
import "../css/VegNonVegRepeatOrderTableComponent.css";
import { MdCalendarMonth } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from "react";
import { orderData } from "../utils/orderData";

export const VegNonVegRepeatOrderTableComponent = () => {

    const [fromdateStatus, setFromDateStatus] = useState(true);
    const [todateStatus, setToDateStatus] = useState(true);

    return (
        <div id="order_table_container">
            <div className="searchDate_box">
                <div className="searchbtn_box">
                    <div class="search_box">
                        <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" class="search-input" placeholder="Search any date" />
                    </div>
                    <button class="btn">Search</button>
                </div>
                <div className="date_box">
                    <div className="from">
                        <span>From</span>
                        <div className="date_input_wrapper">
                            <input
                                type="text"
                                className="date_input"
                                placeholder=""
                                onFocus={(e) => {
                                    e.target.type = "date"
                                    setFromDateStatus(!fromdateStatus)
                                }}
                                onBlur={(e) => {
                                    e.target.type = "text"
                                    setFromDateStatus(!fromdateStatus)
                                }}
                            />
                            {
                                fromdateStatus ? (
                                    <MdCalendarMonth />
                                ) : ""
                            }
                        </div>
                    </div>
                    <div className="to">
                        <span>To</span>
                        <div className="date_input_wrapper">
                            <input
                                type="text"
                                className="date_input"
                                placeholder=""
                                onFocus={(e) => {
                                    e.target.type = "date"
                                    setToDateStatus(!todateStatus)
                                }}
                                onBlur={(e) => {
                                    e.target.type = "text"
                                    setToDateStatus(!todateStatus)
                                }}
                            />
                            {
                                todateStatus ? (
                                    <MdCalendarMonth />
                                ) : ""
                            }
                        </div>
                    </div>
                    <button class="btn">Search</button>
                </div>
            </div>
            <div className="pagination_box">
                <p className="pagination_result">Showing <b>12</b> from <b>955</b> results</p>
                <div className="paginationbtn_box">
                    <button className="prev"><GrFormPrevious /></button>
                    <span>1 - 10</span>
                    <button className="next"><GrFormNext /></button>
                </div>
            </div>
            <div className="table_box">
                <table>
                    <thead>
                        <tr>
                            <th scrow="row">S. No</th>
                            <th scrow="row">Order details</th>
                            <th scrow="row">Order ID</th>
                            <th scrow="row">Bill Date</th>
                            <th scrow="row">Time</th>
                            <th scrow="row">Bill ID</th>
                            <th scrow="row">Bill Amount</th>
                            <th scrow="row">Mode Of Payment</th>
                            <th scrow="row">Mode Of Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orderData?.map((element, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{element.orderDetails}</td>
                                    <td><b>{element.orderId}</b></td>
                                    <td>{element.billDate}</td>
                                    <td>{element.time}</td>
                                    <td>{element.billId}</td>
                                    <td>{element.billAmount}</td>
                                    <td>{element.modeOfPayment}</td>
                                    <td>{element.modeOfOrder}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}