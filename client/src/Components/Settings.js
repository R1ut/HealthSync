import React from "react";
import { useNavigate } from "react-router-dom";
export default function Settings() {
const navigate = useNavigate();
   return (
        <div style={{ display: "flex" }}>
            <div className="dashboard">
                <div className="titletext">
                    <h2>Dashboard</h2>
                </div>
                <div className="sidetext">
                    <p onClick={() => navigate("/notifications")}>- Notifications</p>
                    <p onClick={() => navigate("/info")}>- Info</p>
                    <p onClick={() => navigate("/UserPFP")}>- User Profile</p>
                    <p onClick={() => navigate("/history")}>- Patient History</p>
                    <p onClick={() => navigate("/settings")}>- Settings</p>
                </div>
            </div>
        </div>
    );
}