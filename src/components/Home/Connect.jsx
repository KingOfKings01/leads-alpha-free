import img_1 from '../../assets/section-7/img-1.webp'
import img_2 from '../../assets/section-7/img-2.png'
import img_3 from '../../assets/section-7/img-3.png'
import ActionButton from '../ActionButton'
import TitleWithLine from '../TitleWithLine'

export default function Connect() {
    return (
        <>
            <div className="section-title">
                <TitleWithLine text="Creator" />
            </div>

            <div className="results-grid">
                {/* Card 1 - Creator */}
                <div className="result-card">
                    <p className="headline">Generate your brief with Leads Alpha’s AI brief generator.</p>
                    <img src={img_1} alt="Brief Generator" />
                    <div style={{ marginBottom: "2vh" }}>
                        <TitleWithLine text="Results" align='r' />
                    </div>
                    <div className="metrics">
                        <div>+24.5m<span>Views</span></div>
                        <div>+89%<span>Engagement rate</span></div>
                        <div>+105k<span>Likes</span></div>
                    </div>
                </div>

                {/* Card 2 - Brand */}
                <div className="result-card">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5vh" }}>

                        <ActionButton label='Schedule A Call' />


                        <div style={{ margin: "auto 0" }}>
                            <TitleWithLine text="Brand" />
                        </div>
                    </div>
                    <img src={img_2} alt="Schedule a Call" />
                    <div style={{ marginBottom: "2vh" }}>
                        <TitleWithLine text="Results" align='r' />
                    </div>
                    <div className="metrics">
                        <div>+15m<span>Views</span></div>
                        <div>+59%<span>Engagement rate</span></div>
                        <div>+2.4m<span>Likes</span></div>
                    </div>
                </div>
            </div>



            {/* Large Card at Bottom */}
            <div className="main-result-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5vh" }}>
                    <ActionButton label='Schedule A Call' />
                    <TitleWithLine text="Brand" />
                </div>
                <img src={img_3} alt="Creator Video" />
                <div style={{ marginBottom: "2vh" }}>
                    <TitleWithLine text="Results" align='r' />
                </div>
                <div className="metrics">
                    <div>+88.9m<span>Views</span></div>
                    <div>+77%<span>Engagement rate</span></div>
                    <div>+683k<span>Likes</span></div>
                </div>
            </div>
        </>
    )
}
