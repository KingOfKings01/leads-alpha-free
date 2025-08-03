import logo_1 from "../../assets/testimonial/img-1.png"
import logo_2 from "../../assets/testimonial/img-2.png"
import logo_3 from "../../assets/testimonial/img-3.png"
import logo_4 from "../../assets/testimonial/img-4.png"
import logo_5 from "../../assets/testimonial/img-5.png"
import logo_6 from "../../assets/testimonial/img-6.png"
import logo_7 from "../../assets/testimonial/img-7.png"
import logo_8 from "../../assets/testimonial/img-8.png"
import logo_9 from "../../assets/testimonial/img-9.png"
import logo_10 from "../../assets/testimonial/img-10.png"

export default function Testimonial() {
    const logoList = [
        { url: logo_1, alt: "flipbox" },
        { url: logo_2, alt: "flipbox" },
        { url: logo_3, alt: "flipbox" },
        { url: logo_4, alt: "flipbox" },
        { url: logo_5, alt: "flipbox" },
        { url: logo_6, alt: "flipbox" },
        { url: logo_7, alt: "flipbox" },
        { url: logo_8, alt: "flipbox" },
        { url: logo_9, alt: "flipbox" },
        { url: logo_10, alt: "flipbox" },

    ]
    return (
        <div className="testimonial">
            {[...logoList, ...logoList].map((element, idx) => (
                <img key={idx} src={element.url} alt={element.alt} />
            ))}
        </div>
    )
}
