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

const CircularProgress = ({
  chain,
  className,
}: {
  chain: Network;
  className?: string;
}) => {
  const size = 60;
  const progressWidth = 2;
  const circleWidth = 2;
  const radius = size / 2 - 10;
  const circumference = 2 * radius * Math.PI;
  const offset = circumference * ((100 - chain.sync) / 100);
  const fontSize = 15;

  return (
    <svg
      className={cn([
        className,
        chainIndicatorVariant({ syncState: chain.syncState }),
      ])}
      width={size}
      height={size}
      viewBox={`-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
        size * 1.25
      }`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(-90deg)" }}>
      <circle
        r={size / 2 - 10}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth={`${circleWidth}px`}
        strokeDasharray={`${circumference}px`}></circle>
      <circle
        r={size / 2 - 10}
        cx={size / 2}
        cy={size / 2}
        stroke="currentColor"
        strokeWidth={`${progressWidth}px`}
        strokeLinecap="round"
        strokeDashoffset={`${offset}px`}
        fill="transparent"
        strokeDasharray={`${circumference}px`}></circle>
      <text
        x="21px"
        y="32px"
        fill="currentColor"
        fontSize={`${fontSize}px`}
        fontWeight="normal"
        style={{ transform: "rotate(90deg) translate(0px, -56px)" }}>
        {chain.sync}
      </text>
    </svg>
  );
};

export default LumeDashboard;
