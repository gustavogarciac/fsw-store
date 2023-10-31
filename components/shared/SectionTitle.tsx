import React from "react";

interface Props {
  title: string;
  icon?: React.ReactNode;
  otherClasses?: string;
}

const SectionTitle = ({ title, icon: Icon, otherClasses }: Props) => {
  return (
    <div
      className={`rounded-3xl border border-purple-800 w-fit px-3 py-2 flex gap-2 ${otherClasses}`}
    >
      {Icon && Icon}
      <h1 className="uppercase font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
