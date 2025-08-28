import TitleWithLine from "../TitleWithLine";

export default function ServicesSection() {
  return (
    <div className="flex flex-col md:flex-row! flex-wrap p-[4vh_5vw] bg-white">

            {/* Box-1 */}
            <div className=" md:w-1/2! p-4 flex gap-5 md:gap-12! max-md:w-full max-md:flex-col">
              <div className="flex items-center gap-2 text-[12px] text-gray-600 self-start">
                <TitleWithLine text="Why Choose Us" align="right" width="140px" />
              </div>
              <h2 className="text-[38px] font-medium">
                What We Can{" "}
                <span className="text-[#1e60db]">
                  Do <br /> For You
                </span>
              </h2>
            </div>

            {/* Box-2 */}
            <div className="md:w-1/2! p-4 text-sm font-light leading-relaxed flex items-center self-start max-md:w-full max-md:pt-0">
              <p>
                Stand out in the fast-paced world of short-form content. We create
                high-energy, engaging edits that keep viewers hooked and help you
                grow your audience.
              </p>
            </div>
          </div>
  )
}
