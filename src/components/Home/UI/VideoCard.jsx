export default function VideoCard({ video = null, image = null, name, flag, location }) {
  return (
    <div className="relative flex flex-col gap-2">
      {/* Video */}
      {
        video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-md h-[77vh] flex-shrink-0"
          />
        ) : (
          <img src={image} alt="" />
        )
      }

      {/* Overlay Content */}
      <div className="absolute bottom-6 left-4 md:bottom-6 md:left-4 lg:bottom-4 lg:left-4 flex flex-col gap-2 text-white text-xs md:text-sm">
        <h4 className="font-semibold">{name}</h4>
        <p className="flex items-center gap-2">
          {flag && <img src={flag} alt="flag" className="w-4 h-4 md:w-5 md:h-5" />}
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
}
