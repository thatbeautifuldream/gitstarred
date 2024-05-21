"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StarredRepos from "./repo/starred-repos";

type Tab = "Starred Repos";

const tabs: Tab[] = ["Starred Repos"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected ? "font-semibold !text-primary" : " hover:text-gray-900"
      } relative rounded-md  px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-primary`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
  repos: Repository[];
}

const LineTabs = ({ center, customID, repos }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0] ?? "");
  return (
    <main className="p-4">
      <div
        className={` ${
          center ? "justify-center " : ""
        } border-black-500/25 mb-8 flex flex-wrap items-center gap-2 border-b`}
      >
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
            customID={customID}
          />
        ))}
      </div>
      {selected === "Starred Repos" && <StarredRepos repos={repos} />}
    </main>
  );
};

export default LineTabs;
