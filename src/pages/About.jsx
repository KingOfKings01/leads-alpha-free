import img1 from '../assets/about/img1.png';
import img2 from '../assets/about/img2.png';
import img3_1 from '../assets/about/img3_1.jpg';
import img3_2 from '../assets/about/img3_2.jpg';
import img3_3 from '../assets/about/img3_3.jpg';

export default function About() {
    return (
        <div className='about'>
            {/* About Section (image first on mobile) */}
            <div
                className="max-w-[90vw] my-[10vh] gap-[6vh] mx-auto flex flex-col-reverse items-center md:flex-row"
            >
                {/* Text Section */}
                <div
                    className="flex-1 text-center md:text-left"
                >
                    <h2
                        className="text-lg md:text-[2.3rem] font-medium mb-4"
                    >
                        About <span className="text-blue-600 font-semibold">Us</span>
                    </h2>
                    <p
                        className="text-gray-600 text-sm leading-relaxed text-justify px-3 md:px-0"
                    >
                        Leads Alpha is a vibrant and growing team of creative professionals, all about supporting creators
                        and businesses across the world with genuine and impactful User-Generated Content. We work together
                        remotely from various locations in the world, which helps us to bring a rich mix of ideas and talents
                        to our mission. We are excited to empower our community and make a difference together! One thing we
                        all have in common is our passion for what we do!
                    </p>
                </div>

                {/* Image Section */}
                <div
                    className={`bg-[url(${img1})] bg-no-repeat h-[50vw] md:h-[28vw] mb-[1rem] w-full md:w-[49%] bg-cover bg-center rounded-[20px]`}
                />
            </div>

            {/* Mission Section (keep order: image first on desktop) */}
            <div
                className="max-w-[90vw] my-[10vh] mx-auto flex flex-col items-center md:flex-row"
            >
                {/* Image Section */}
                <div
                    className={`bg-[url(${img2})] bg-no-repeat bg-cover bg-position-[25%_85%] md:bg-position-[25%_95%] h-[50vw] md:h-[35vw] w-full md:w-[49%] mb-[2rem] rounded-[20px]`}
                />

                {/* Text Section */}
                <div
                    className="flex-1 text-center md:text-left md:ml-[2rem]"
                >
                    <h2
                        className="text-lg md:text-[2.3rem] font-medium mb-4"
                    >
                        Our <span className="text-blue-600 font-semibold">Mission</span>
                    </h2>
                    <p
                        className="text-gray-600 text-sm leading-relaxed text-justify px-3 md:px-0"
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

            {/* Flagship Section */}
            <div
                className="px-[5vw] py-[10vh] gap-[6vh] py-[2rem] bg-[#FFFCF0] mx-auto flex flex-col-reverse items-center md:flex-row"
            >

                {/* Text Section */}
                <div
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-lg md:text-[2.3rem] font-medium mb-4">
                        Our <span className="text-blue-600 font-semibold">Flagship</span>
                    </h2>
                    <p
                        className="text-gray-600 text-sm leading-relaxed text-justify px-3 md:px-0"
                    >
                        Our flagship product is a friendly and easy-to-use User-Generated Content (UGC) platform that makes
                        connecting brands and creators a breeze! With a super intuitive interface and great accessibility features,
                        anyone can jump right in. Brands can quickly put together detailed briefs outlining what they need and their
                        goals. At the same time, creators can hop onto the Leads Alpha website to browse and apply for these
                        tailored opportunities in just a few clicks. The Leads Alpha innovative platform creates a lively connection
                        between brands and a fantastic network of talented creators who are excited to craft engaging content that
                        truly resonates with audiences. By simplifying the collaboration process, we help both brands and creators
                        flourish in a creative space that celebrates innovation and versatility.
                    </p>
                </div>

                {/* Images Section */}
                <div className="w-80 md:w-[35vw] flex flex-row gap-[1rem] items-center py-[1rem] relative">
                    <div className="flex flex-col gap-[1rem] w-full z-1">
                        <div
                            className={`bg-[url(${img3_1})] bg-no-repeat bg-position-[53%_95%] h-[25vh] md:h-[23vw] w-full bg-cover rounded-[20px]`}
                        />
                        <div
                            className={`bg-[url(${img3_3})] bg-no-repeat h-[20vh] md:h-[17vw] w-full bg-cover rounded-[20px]`}
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] w-full z-2">
                        <div
                            className={`bg-[url(${img3_2})] bg-no-repeat bg-position-[45%_95%] h-[20vh] md:h-[20vw] w-[40vw] md:w-full bg-cover rounded-[20px]`}
                        />

                    </div>
                    <div className='absolute bg-[#FFF4DD] w-[45vw] md:w-[20vw] h-[30vh] md:h-[28vw] rounded-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    </div>
                </div>
            </div>


        </div>
    );
}
