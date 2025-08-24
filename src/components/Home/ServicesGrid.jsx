import tiktok from "../../assets/section-5/tik-tok.svg"
import instagram from "../../assets/section-5/instagram.svg"
import video_icon from "../../assets/section-5/video.svg"
import play_icon from "../../assets/section-5/logo-play.svg"
import chat_icon from "../../assets/section-5/chat.svg"

const iconMap = {
  tiktok: <img src={tiktok} alt="tik-tok" className="w-[30px] h-[30px]" />,
  instagram: <img src={instagram} alt="instagram" className="w-[30px] h-[30px]" />,
  link: <img src={video_icon} alt="video_icon" className="w-[30px] h-[30px]" />,
  editing: <img src={play_icon} alt="play_icon" className="w-[30px] h-[30px]" />,
  chat: <img src={chat_icon} alt="chat_icon" className="w-[30px] h-[30px]" />,
  blank: <span />,
};

const services_part1 = [
  {
    title: "Reels",
    description:
      "High quality social media reels for your business’ TikTok and Instagram created for your brand by Leads Alpha’s top UGC creators.",
    icons: ["tiktok", "instagram", "link"],
  },
  {
    title: "Edited Videos",
    description:
      "Elevate your social media videos with custom editing that clearly demonstrates your product & services",
    icons: ["editing"],
  }
];

const services_part2 = [
  {
    title: "Social Media Content",
    description:
      "Hire top creators to create your monthly social media content for marketing. Keep your socials active & engaging!",
    icons: ["chat"],
  },
  {
    title: "Ship Your Product",
    description:
      "You can courier your product to the creator of your choice for them to create a more interactive product experience with your product to your target audience.",
    icons: ["blank"],
  },
];

const ServicesGrid = () => {
  return (
    <section id="s-5" className="px-[10vw] pb-[60px] pt-[10px] bg-white">
      {/* Part 1 */}
      <div className="flex max-w-[1200px] mx-auto gap-5 flex-col md:flex-row md:gap-5 mb-6">
        {services_part1.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b from-[#e5eeff] to-[#f3f7ff] p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.02] 
            ${index === 0 ? "md:flex-[3]" : "md:flex-[2]"}`}
          >
            {service.icons.length > 0 && (
              <div className="flex justify-end mb-5 -space-x-2">
                {service.icons.map((icon, i) => (
                  <div key={i} className="w-[25px] h-[25px] flex items-center justify-center rounded-full">
                    {iconMap[icon]}
                  </div>
                ))}
              </div>
            )}
            <div>
              <h3 className="text-[30px] font-semibold text-[#333] mb-2">{service.title}</h3>
              <p className="text-sm font-light text-[#555] leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Part 2 */}
      <div className="flex max-w-[1200px] mx-auto gap-5 flex-col md:flex-row md:gap-5">
        {services_part2.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b from-[#e5eeff] to-[#f3f7ff] p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.02] 
            ${index === 0 ? "md:flex-[2]" : "md:flex-[3]"}`}
          >
            {service.icons.length > 0 && (
              <div className="flex justify-end mb-5 -space-x-2">
                {service.icons.map((icon, i) => (
                  <div key={i} className="w-[25px] h-[25px] flex items-center justify-center rounded-full">
                    {iconMap[icon]}
                  </div>
                ))}
              </div>
            )}
            <div>
              <h3 className="text-[30px] font-semibold text-[#333] mb-2">{service.title}</h3>
              <p className="text-sm font-light text-[#555] leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
