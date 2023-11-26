import "./footer.css";

export default box = ({title,store,Icon})=> {
    return (
        <div className="box">
            <div className="store-logo">
                {Icon}
            </div>
            <div className="store-text">
                <p>{title}</p>
                <p>
                    <b>{store}</b>
                </p>
            </div>
        </div>
    )
}