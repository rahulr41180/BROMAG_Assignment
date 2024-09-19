
import "../css/SidebarLayout.css";
import { IoLogoElectron } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FaRankingStar } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import { BsTable } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { TiGroupOutline } from "react-icons/ti";
import { TbWallet } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

const sidebarMainuData = [
    { navigate : "#" ,menu: "Dashboard", menuIcon: MdOutlineDashboard },
    { navigate : "#" ,menu: "Billing Management", menuIcon: MdOutlineReceiptLong },
    { navigate : "#" ,menu: "Sales Management", menuIcon: GoGraph },
    { navigate : "#" ,menu: "Order Management", menuIcon: FiBox },
    { navigate : "#" ,menu: "Dominant Management", menuIcon: FaRankingStar },
    { navigate : "#" ,menu: "Menu Management", menuIcon: GrNotes },
    { navigate : "#" ,menu: "Employee Management", menuIcon: FaUserGroup },
    { navigate : "#" ,menu: "Table Management", menuIcon: BsTable },
    { navigate : "#" ,menu: "Stock Management", menuIcon: AiOutlineStock },
    { navigate : "#" ,menu: "Inventory Management", menuIcon: ImSpinner9 },
    { navigate : "#" ,menu: "CRM Management", menuIcon: TiGroupOutline },
    { navigate : "#" ,menu: "Wallet Management", menuIcon: TbWallet }
];

export const SidebarLayout = () => {
    const [activeIndex, setActiveIndex] = useState(4);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return (
        <div id="sidebar_container">
            <div id="logo_box">
                <IoLogoElectron />
            </div>
            <div id="mainubtn_box">

                <ul id="mainubtn_list">
                    {
                        sidebarMainuData?.map((element, index) => {
                            const IconComponent = element.menuIcon;
                            const isActive = activeIndex === index;
                            return (
                                <li key={index} className="menu-item" onClick={() => handleItemClick(index)}>
                                    <div className={`mainulist_label ${isActive ? "active" : ""}`}></div>
                                    <div className={`mainuIcon ${isActive ? "active" : ""}`}>
                                        <IconComponent />
                                        <Link to={element.navigate}>{element.menu}</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}