import ActionButton from "../components/ActionButton";

const CheckIcon = ({ width = 35, height = 35 }) => (
  <svg
    width={width}
    height={height}
    className="flex-shrink-0"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1201_965)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 25C0 19.287 1.475 15.726 4.1005 13.1005C6.726 10.475 10.287 9 14 9C17.713 9 21.274 10.475 23.8995 13.1005C26.525 15.726 28 19.287 28 25C28 28.713 26.525 32.274 23.8995 34.8995C21.274 37.525 17.713 39 14 39C10.287 39 6.726 37.525 4.1005 34.8995C1.475 32.274 0 28.713 0 25ZM13.2011 29.992L21.2613 19.9157L19.8053 18.7509L12.9323 27.3395L8.064 23.2832L6.86933 24.7168L13.2011 29.992Z"
        fill="#1E60DB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1201_965">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function DetailCard({
  title,
  description,
  points,
  image,
  buttonLabel,
  imageSide = "right",
  imgWidth = 100,
  shadow = false
}) {
  const isImageLeft = imageSide === "left";

  return (
    <section
      className={`flex flex-col-reverse md:flex-row ${
        isImageLeft ? "md:flex-row-reverse!" : "md:flex-row!"
      } items-center justify-between gap-10 lg:gap-20 px-6 lg:px-24 py-12`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl lg:text-[2rem] font-semibold leading-snug text-gray-900">
          {title}
        </h1>

        <p className="text-gray-600 leading-relaxed text-[13px]">
          {description}
        </p>

        <ul className="text-gray-700 text-[12px] ">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {buttonLabel && <ActionButton label={buttonLabel} />}
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <div className={`relative rounded-[20px] shadow-lg overflow-hidden max-w-[${imgWidth}%]`}>
          <img
            src={image}
            alt="Services"
            className={`rounded-[20px] max-w-[${imgWidth}%] h-auto`}
          />
          {shadow && (
            <>
              {/* Top to mid gradient */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

              {/* Bottom to mid gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

