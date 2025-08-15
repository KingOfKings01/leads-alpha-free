import img1 from '../assets/about/img1.png';
import img2 from '../assets/about/img2.png';

export default function About() {
    return (
        <div className='about'>
            {/* About Section (image first on mobile) */}
            <div
                className="max-w-[90vw] mx-auto flex flex-col items-center md:flex-row"
                style={{ margin: "10vh auto", gap: "6vw" }}
            >
                {/* Image Section */}
                <div
                    className="w-full md:w-[40%] bg-cover bg-center rounded-[20px]"
                    style={{
                        backgroundImage: `url(${img1})`,
                        height: "50vw",
                        maxHeight: "300px",
                        marginBottom: "2rem"
                    }}
                />

                {/* Text Section */}
                <div
                    className="flex-1 text-center md:text-left"
                >
                    <h2
                        className="text-lg md:text-2xl font-medium"
                        style={{ marginBottom: "1rem" }}
                    >
                        About <span className="text-blue-600">Us</span>
                    </h2>
                    <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ padding: "0 1rem" }}
                    >
                        Leads Alpha is a vibrant and growing team of creative professionals, all about supporting creators
                        and businesses across the world with genuine and impactful User-Generated Content. We work together
                        remotely from various locations in the world, which helps us to bring a rich mix of ideas and talents
                        to our mission. We are excited to empower our community and make a difference together! One thing we
                        all have in common is our passion for what we do!
                    </p>
                </div>
            </div>

            {/* Mission Section (keep order: image first on desktop) */}
            <div
                className="max-w-[90vw] mx-auto flex flex-col items-center md:flex-row"
                style={{ margin: "10vh auto", gap: "6vw" }}
            >
                {/* Image Section */}
                <div
                    className="w-full md:w-[40%] bg-cover rounded-[20px]"
                    style={{
                        backgroundImage: `url(${img2})`,
                        backgroundPosition: "25% 95%",
                        height: "55vw",
                        maxHeight: "350px"
                    }}
                />

                {/* Text Section */}
                <div
                    className="flex-1 text-center md:text-left"
                    style={{ marginTop: "2rem" }}
                >
                    <h2
                        className="text-lg md:text-2xl font-medium"
                        style={{ marginBottom: "1rem" }}
                    >
                        Our <span className="text-blue-600">Mission</span>
                    </h2>
                    <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ padding: "0 1rem" }}
                    >
                        We're excited to support Leads Alpha's growth and to help build strong connections
                        between brands and video creators. Let's keep working together to make great things
                        happen! Leads Alpha truly value a flexible work environment that lets our team members
                        work from anywhere in the world! We're all about creating a warm and welcoming culture
                        where everyone's contributions are not just recognised but celebrated. We're passionate
                        about creating a diverse team! Embracing diversity and inclusion fuels our innovation,
                        drives exceptional business results, and empowers us to serve our customers with even
                        greater excellence. Let's grow together!
                    </p>
                </div>
            </div>
        </div>
    );
}
