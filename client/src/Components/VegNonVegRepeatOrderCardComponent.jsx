
import "../css/VegNonVegRepeatOrderCardComponent.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineReceiptLong } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";

export const VegNonVegRepeatOrderCardComponent = ({ cardData, ind }) => {

    const handleIcon = () => {
        if (cardData.menuIcon === "MdOutlineReceiptLong") return <MdOutlineReceiptLong />
        else if (cardData.menuIcon === "GoGraph") return <GoGraph />

        else if (cardData.menuIcon === "FiBox") return <FiBox />
    }

    return (
        <Link to={cardData.to}>
            <div id="card_box" style={{ border: `3px solid ${cardData.border}` }}>
                <p className="content">{cardData?.tag} <br /> <span>{cardData?.value}</span> <br /> <span><FaArrowTrendUp /> {cardData?.growth}% Order Count</span></p>
                <div className={`icon ${cardData.menuIcon}`} style={{ backgroundColor: `${cardData.border}` }}>
                    {handleIcon()}
                </div>
            </div>
        </Link>
    )
}