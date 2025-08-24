export default function TitleWithLine({ text = "text", align = "left", width = "100px" }) {
  const baseClasses =
    `flex items-center text-[12px] text-[#444a46] font-medium gap-3 w-[${width}]`;

  const alignClasses =
    align === "left"
      ? "after:content-[''] after:flex-1 after:h-px after:bg-[#444a46]"
      : "before:content-[''] before:flex-1 before:h-px before:bg-[#444a46]";

  return <h4 className={`${baseClasses} ${alignClasses}`}>{text}</h4>;
}
