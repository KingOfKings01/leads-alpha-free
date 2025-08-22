export default function ActionButton({
  label = "Click Me",
  onClick = () => {},
  arrow_bg = "#4C86F3",
  stroke = "#ffffffff",
  bg = "#1e60db",
}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg }}
      className="w-fit flex items-center gap-2 rounded-full pl-4 pr-2 py-1.5 text-[10px] text-white transition-colors duration-300 cursor-pointer hover:brightness-90"
    >
      {label}
      <svg
        viewBox="0 0 41 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <rect x="0.279785" width="40" height="40" rx="20" fill={arrow_bg} />
        <path
          d="M16.1573 23.1248L24.4068 14.8752M24.4068 14.8752H16.1573M24.4068 14.8752V23.1248"
          stroke={stroke}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
