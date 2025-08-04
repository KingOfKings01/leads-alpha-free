import tiktok from "../../assets/section-5/tik-tok.svg"
import instagram from "../../assets/section-5/instagram.svg"
import video_icon from "../../assets/section-5/video.svg"
import play_icon from "../../assets/section-5/logo-play.svg"
import chat_icon from "../../assets/section-5/chat.svg"
const iconMap = {
  tiktok: <img src={tiktok} alt="tik-tok" />,
  instagram: <img src={instagram} alt="instagram" />,
  link: <img src={video_icon} alt="video_icon" />,
  
  editing: <img src={play_icon} alt="play_icon" />,

  chat: <img src={chat_icon} alt="chat_icon" />,
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
]

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
    icons: [],
  },
];

const ServicesGrid = () => {
  return (
    <>
    <div className="services-grid-part-1">
      {services_part1.map((service, index) => (
        <div className="service-card" key={index}>
          {service.icons.length > 0 && (
            <div className="service-icons">
              {service.icons.map((icon, i) => (
                <div className="icon-circle" key={i}>
                  {iconMap[icon]}
                </div>
              ))}
            </div>
          )}
          <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="services-grid-part-2">
      {services_part2.map((service, index) => (
        <div className="service-card" key={index}>
          {service.icons.length > 0 && (
            <div className="service-icons">
              {service.icons.map((icon, i) => (
                <div className="icon-circle" key={i}>
                  {iconMap[icon]}
                </div>
              ))}
            </div>
          )}
          <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ServicesGrid;
