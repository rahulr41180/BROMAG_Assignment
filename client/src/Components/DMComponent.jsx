
import "../css/DMComponent.css";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { NavbarLayout } from "../Layout/NavbarLayout";
import { VegNonVegRepeatOrderCardComponent } from "./VegNonVegRepeatOrderCardComponent";
import { FaCircle } from "react-icons/fa";

const cardData = [
    { to : "/total-veg-order", tag: "Total Orders - Veg", value: 12345, growth: 1.3, border: "#db5f32", menuIcon: "MdOutlineReceiptLong" },
    { to : "/total-non-veg-order", tag: "Total Orders - Non Veg", value: 12345, growth: 1.3, border: "#E0A20F", menuIcon: "GoGraph" },
    { to : "/total-repeat-order", tag: "Repeat Orders", value: 123, growth: 1.3, border: "#CC60FF", menuIcon: "FiBox" },
]

const perCentageData = [20, 40, 10, 60, 50, 80, 35, 90, 65, 95];
const itemData = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];

export const DMComponent = () => {

    const options = {
        chart: {
            backgroundColor : "#F1F9FF",
            type: "column"
        },
        xAxis: {
            categories: itemData,
        },
        yAxis: [{
            labels: {
                format: '{value}%'
            }
        }],
        tooltip: {
            shared: false
        },
        plotOptions: {
            column: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                },
                dataLabels: {
                    enabled: true,
                    format: '{y}%'
                },
                enableMouseTracking: true
            }
        },
        series: [{
            type: 'column',
            yAxis: 0,
            data: perCentageData,
            tooltip: {
                valueSuffix: '%'
            }
        }]
    }

    return (
        <div id="dmc_container">
            <NavbarLayout />
            <div id="dmc_main">
                <p className="dmc_heading">Dominant Management</p>

                <div id="dmc_card_box">
                    {cardData.map((element, index) => {
                        return (
                            <VegNonVegRepeatOrderCardComponent cardData={element} ind={index} />
                        )
                    })}
                </div>
                <div id="dmc_totalOrder_container">
                    <div className="totalOrder_tags">
                        <div className="tags" id="tags_box">
                            <h6>Total Orders</h6>
                            <div id="food_category">
                                <p>
                                    <FaCircle /> <span>Non Veg Orders</span>
                                </p>
                                <p>
                                    <FaCircle /> <span>Veg Orders</span>
                                </p>
                            </div>
                        </div>
                        <div className="sortSelect">
                            <span>Sort by</span>
                            <select name="" id="selectOption">
                                <option value="">Today</option>
                            </select>
                        </div>
                    </div>
                    <div className="totalOrder_graph">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}