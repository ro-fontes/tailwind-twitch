import React from "react";

interface ITextGridProps {
  text: String;
}

export function TextGrid({ text }: ITextGridProps) {
  return (
    <div className="text-2xl ml-5 mb-6">
      <p className="">{text}</p>
    </div>
  );
}
