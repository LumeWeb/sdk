import {
  makeSwitchable,
  useSwitchableComponent,
} from "../../SwitchableComponent";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  CheckIcon,
  ClipboardCopyIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, m } from "framer-motion";
import { useLumeIndentity } from "./LumeIdentityContext";
import { useMemo, useState } from "react";

import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

async function seedToKey(seed: string) {
  return bip39.mnemonicToSeed(seed);
}

// Extracted components
const SubmitButtonComponent = () => {
  const { setVisibleComponent } = useSwitchableComponent();
  return (
    <Button
      className="w-full h-12"
      variant={"outline"}
      onClick={() => setVisibleComponent(SeedPhraseInput)}>
      <span className="text-center text-lg font-normal leading-normal">
        Sign in with Account Key
      </span>
    </Button>
  );
};

const SeedPhraseInputComponent = () => {
  const { signIn } = useLumeIndentity();
  return (
    <m.form
      className="flex-col flex gap-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          elements: {
            seedPhrase: { value: string };
          };
        };
        const seedPhrase = target.elements.seedPhrase.value;
        signIn(await seedToKey(seedPhrase));
      }}>
      <Input className="h-12 w-full text-lg" name="seedPhrase" />
      <m.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        transition={{ type: "just", delay: 0.1 }}
        className="h-12">
        <Button className="w-full h-full" role="submit">
          <span className="text-center text-lg font-normal leading-normal">
            Sign in
          </span>
        </Button>
      </m.div>
    </m.form>
  );
};

const SetupAccountKeyComponent = () => {
  const { setVisibleComponent } = useSwitchableComponent();
  const [width, setWidth] = useState<number>();

  return (
    <m.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: -50, height: "auto" }}
      transition={{ type: "just", delay: 0.1 }}
      className="min-h-12 h-full max-w-full"
      style={{ maxWidth: width ?? "auto" }}
      ref={(t) =>
        setTimeout(() => setWidth(t!.getBoundingClientRect().width!), 0)
      }>
      <Button
        className="w-full h-full"
        onClick={() => setVisibleComponent(SeedPhraseGeneration)}>
        <span className="text-center text-lg font-normal leading-normal">
          I get it, I'll keep it safe. Let's see the key.
        </span>
      </Button>
    </m.div>
  );
};

const SeedPhraseGenerationComponent = ({ phraseLength = 12 }) => {
  const [buttonClickedState, setButtonClickedState] = useState<
    "idle" | "clicked"
  >("idle");
  const [step, setStep] = useState<number>(0);
  const { signIn } = useLumeIndentity();

  const phrases = useMemo(() => {
    return bip39.generateMnemonic(wordlist, phraseLength).split(" ");
  }, [phraseLength]);

  const key = useMemo(() => {
    return phrases.join(" ");
  }, [phrases]);

  const copyPhrasesToClipboard = () => {
    navigator.clipboard.writeText(phrases.join(" "));
    setButtonClickedState("clicked");
    setTimeout(() => setButtonClickedState("idle"), 1000);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {step === 1 ? (
          <m.div
            className={`z-10 absolute top-0 bottom-0 left-0 right-0 bg-black pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.75,
              top: -200,
              left: -20,
              right: -20,
              bottom: 120,
            }}
            transition={{ type: "tween", duration: 0.1 }}></m.div>
        ) : null}
      </AnimatePresence>
      <div className="z-20 relative mb-2.5 w-full h-full flex-wrap justify-center items-center gap-2.5 inline-flex">
        {phrases.map((phrase, index) => (
          <div
            key={`SeedPhrase_${index}`}
            className={`justify-center items-center gap-2.5 flex w-[calc(33%-10px)] h-10 rounded border border-current relative ring-current text-neutral-700`}>
            <span className=" text-white text-md font-normal leading-normal w-full h-fit px-2.5 bg-transparent text-center">
              {phrase}
            </span>
            <span className="left-[6px] top-0 absolute text-current text-xs font-normal leading-normal">
              {index + 1}
            </span>
          </div>
        ))}
        <AnimatePresence>
          {step === 1 ? (
            <m.div
              className="text-red-400 flex flex-row gap-5 py-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "linear", delay: 0.2, duration: 0.5 }}>
              <ExclamationTriangleIcon className="w-14 h-14" />
              <span>Make sure to write this down for safe keeping.</span>
            </m.div>
          ) : null}
        </AnimatePresence>
        <Button
          className={`w-full h-12 ${
            buttonClickedState === "clicked"
              ? "!text-primary !border-primary"
              : ""
          }`}
          variant="outline"
          onClick={copyPhrasesToClipboard}>
          {buttonClickedState === "clicked" ? (
            <CheckIcon className="w-5 h-5 mr-2.5" />
          ) : (
            <ClipboardCopyIcon className="w-5 h-5 mr-2.5" />
          )}
          {buttonClickedState === "clicked" ? "Copied!" : "Copy Account Key"}
        </Button>
      </div>
      {step === 0 ? (
        <Button
          className="z-20 w-full h-12 text-white bg-neutral-700 hover:bg-neutral-800"
          variant="secondary"
          onClick={() => setStep(1)}>
          Continue
        </Button>
      ) : null}
      <AnimatePresence>
        {step === 1 ? (
          <m.div
            className="z-20 w-full h-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "linear", delay: 2, duration: 0.5 }}>
            <Button
              className="w-full h-full"
              onClick={async () => signIn(await seedToKey(key))}>
              Sign In
            </Button>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export const SubmitButton = makeSwitchable(
  SubmitButtonComponent,
  "submit-button",
);
export const SeedPhraseInput = makeSwitchable(
  SeedPhraseInputComponent,
  "seed-phrase-input",
);
export const SetupAccountKey = makeSwitchable(
  SetupAccountKeyComponent,
  "setup-account-key",
);
export const SeedPhraseGeneration = makeSwitchable(
  SeedPhraseGenerationComponent,
  "seed-phrase-form",
);
