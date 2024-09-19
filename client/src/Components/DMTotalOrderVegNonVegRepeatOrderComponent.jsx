
import "../css/DMTotalOrderVegNonVegRepeatOrderComponent.css";
import { NavbarLayout } from "../Layout/NavbarLayout";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { VegNonVegRepeatOrderTableComponent } from "./VegNonVegRepeatOrderTableComponent";

export const DMTotalOrderVegNonVegRepeatOrderComponent = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div id="dmc_container">
            <NavbarLayout />
            <div id="dmc_main">
                <div className="heading_backbtn">
                    <button onClick={() => navigate(-1)}><FaArrowLeftLong /></button>

                    <span>{title}</span>
                </div>
                <VegNonVegRepeatOrderTableComponent />
            </div>
        </div>
    )
}