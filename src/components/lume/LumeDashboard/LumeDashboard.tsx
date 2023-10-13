import * as Dialog from "@radix-ui/react-dialog";
import { Network, useLume } from "../LumeProvider";
import Logo from "../../../assets/lume-logo.png";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { useState, useEffect } from "react";
import React from "react";
import camelCase from "camelcase";

const SYNCSTATE_TO_TEXT: Record<Network["syncState"], string> = {
  done: "Synced",
  error: "Issue",
  syncing: "Syncing",
};

export const LumeDashboardTrigger = Dialog.Trigger;
LumeDashboardTrigger.displayName = "LumeDashboardTrigger";

const LumeDashboard = (props: any) => {
  const { children }: { children: React.PropsWithChildren } = props;
  const {
    lume: { networks },
  } = useLume();

  const [uniqueNetworkTypes, setUniqueNetworkTypes] = useState<string[]>([]);

  useEffect(() => {
    const networkTypes = networks.map((network) => network.type);
    const uniqueTypes = Array.from(new Set(networkTypes));
    setUniqueNetworkTypes(uniqueTypes);
  }, [networks]);

  const DefaultTrigger = (props: any) => (
    <LumeDashboardTrigger asChild {...props}>
      <button
        className={cn(
          "bg-primary text-primary-foreground p-2 px-4 text-sm font-semibold font-mono rounded-md",
          {
            "disabled:pointer-events-none disabled:opacity-50": props.disabled,
          },
        )}
        {...props}>
        Open Dashboard
      </button>
    </LumeDashboardTrigger>
  );
  const GivenTrigger = React.Children.toArray(
    children?.children || (children as any) || [],
  )
    .filter((c) => {
      if (typeof c === "object") {
        //@ts-expect-error -- I dont know what the type of this should be, i just know that this works
        return c.type?.displayName === "LumeDashboardTrigger";
      }

      return false;
    })
    .at(0);
  const Trigger = GivenTrigger ? () => GivenTrigger : DefaultTrigger;

  return (
    <Dialog.Root>
      <Trigger {...props} />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-40 inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed p-5 z-50 right-0 bottom-0 top-0 w-[300px] bg-neutral-950 text-white border-black border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500">
          <div className="w-[calc(100%+38px)] border-b pb-3 -mx-5 px-5 border-neutral-900">
            <img src={Logo} className="w-24" />
          </div>
          {uniqueNetworkTypes.map((type, index) => (
            <div className="mt-4 mb-8" key={`NetworkTypeSection_${index}`}>
              <h2 className="text-xl mb-4">
                {camelCase(type, { pascalCase: true })}
              </h2>
              <div className="grid grid-cols-2">
                {networks
                  .filter((network) => network.type === type)
                  .map((network, networkIndex) => (
                    <NetworkIndicator
                      key={`${type}_ChainIndicator_${networkIndex}`}
                      network={network}
                    />
                  ))}
              </div>
            </div>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const chainIndicatorVariant = cva("chainIndicatorVariant", {
  variants: {
    syncState: {
      done: "text-primary",
      error: "text-red-500",
      syncing: "text-orange-500",
    },
  },
});

const NetworkIndicator = ({ network }: { network: Network }) => {
  return (
    <div key={network.id} className="flex flex-row gap-x-2 items-center ">
      <CircularProgress chain={network} />
      <div className="flex flex-col">
        <span>{network.name}</span>
        <span
          className={cn([
            "text-[12px] -mt-1",
            chainIndicatorVariant({ syncState: network.syncState }),
          ])}>
          {SYNCSTATE_TO_TEXT[network.syncState]}
        </span>
      </div>
    </div>
  );
};
function getTextDimensions(
  fontSize: number,
  ratios: { width: number; height: number },
) {
  const width = fontSize * ratios.width;
  const height = fontSize * ratios.height;

  return { width, height };
}

const CircularProgress = ({
  chain,
  className,
}: {
  chain: Network;
  className?: string;
}) => {
  const [fontRatio, setFontRatio] = useState({
    width: 0,
    height: 0,
  });

  const radius = 45;
  const SVG_SIZE = radius * 2 + 10; // +10 to add some padding around
  const STROKE_WIDTH = radius * 0.08; // 8% of the radius for the stroke width
  const textSize = radius * 0.5; // half of the radius for text size

  useEffect(() => {
    const testText = document.createElement("span");
    testText.style.fontSize = `${textSize}px`;
    testText.style.position = "absolute";
    testText.style.left = "-9999px";
    testText.textContent = "The quick brown fox jumps over the lazy dog";
    document.body.appendChild(testText);
    const rect = testText.getBoundingClientRect();
    setFontRatio({
      width: rect.width / textSize,
      height: rect.height / textSize,
    });
    document.body.removeChild(testText);
  }, [textSize]);

  const { width: textWidth } = getTextDimensions(textSize, fontRatio);

  const circumference = 2 * Math.PI * radius;
  const offset = circumference * ((100 - chain.sync) / 100);

  return (
    <svg
      className={cn([
        className,
        chainIndicatorVariant({ syncState: chain.syncState }),
      ])}
      width={SVG_SIZE}
      height={SVG_SIZE}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(-90deg)" }}>
      <circle
        r={radius}
        cx={SVG_SIZE / 2}
        cy={SVG_SIZE / 2}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth={STROKE_WIDTH}
        strokeDasharray={`${circumference}px`}></circle>
      <circle
        r={radius}
        cx={SVG_SIZE / 2}
        cy={SVG_SIZE / 2}
        stroke="currentColor"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDashoffset={`${offset}px`}
        fill="transparent"
        strokeDasharray={`${circumference}px`}></circle>
      <text
        x={(SVG_SIZE - textWidth) / 2}
        y={(SVG_SIZE + textSize) / 2} // Adding half of the text size for vertical centering
        fill="currentColor"
        fontSize={`${textSize}px`}
        fontWeight="normal">
        {chain.sync}
      </text>
    </svg>
  );
};

export default LumeDashboard;
