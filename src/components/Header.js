import React, { useEffect, useState } from "react";
import { Form, Input } from "reactstrap";
import TogglerDark from "../assets/img/TogglerDark.svg";

const Header = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log("toggle", props.toggle);
        updatePredicate();
        window.addEventListener("resize", updatePredicate);
        return () => window.removeEventListener("resize", updatePredicate);
    }, []);

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 992);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <div className="d-flex top-nav shadow border-bottom border-dark justify-content-between px-3 ">
                        <div>
                            <img
                                src={TogglerDark}
                                className="toggle-btn cursor-pointer"
                                onClick={props.toggle}
                            />
                        </div>

                        <div className="">
                            <strong>Logo</strong>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" top-nav shadow border-bottom border-dark">
                    <div className="container align-items-center d-flex justify-content-between">
                        {/* {dashboardText()} */}
                        Dashboard
                    </div>
                </div>
            )}
        </>
    );
};
export default Header;
