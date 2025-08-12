// components/ActionButton.jsx
export default function ActionButton({ label = "Click Me", onClick = () => { }, arrow_bg="#4C86F3", stroke="#ffffffff", bg="" }) {
  return ( 
    <button className="action-btn" onClick={onClick} style={{background: bg}}>
      {label}
      <svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
