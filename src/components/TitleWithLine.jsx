export default function TitleWithLine({ text = "text", align = "left" }) {
    const className = align === "left" ? "title-with-line-left" : "title-with-line-right";
    return (
        <h4 className={className}>{text}</h4>
    );
}
