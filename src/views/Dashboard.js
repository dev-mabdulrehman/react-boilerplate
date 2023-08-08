import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
    const toggle = () => document.body.classList.toggle("open");
    const outsideClose = () => {
        if (document.body.classList.contains("open")) {
            document.body.classList.remove("open");
        } else {
            document.body.classList.remove("close");
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        updatePredicate();
        window.addEventListener("resize", updatePredicate);
        return () => window.removeEventListener("resize", updatePredicate);
    }, []);

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 992);
    };
    return (
        <div className="dashboard">
            {" "}
            <Header toggle={toggle} />
            <div className="w-100 dashboard__main__section">
                <div className="dashboard__main__section-content">
                    <Sidebar
                        sidebarToggle={toggle}
                        outsideClose={outsideClose}
                    />
                    <div className="p-4">Dashboard</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
