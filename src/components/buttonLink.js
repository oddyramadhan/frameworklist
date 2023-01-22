import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

export default function ButtonLink({ buttonText, buttonIcon }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.theme === "light"
          ? "inline-block rounded bg-[#CEAB93] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#AD8B73] focus:outline-none cursor-pointer"
          : "inline-block rounded bg-[#6419E6] px-5 py-3 text-sm font-medium text-white transition focus:outline-none cursor-pointer"
      }
    >
      <div className="flex items-center gap-2">
        {buttonIcon}
        {buttonText}
      </div>
    </div>
  );
}
