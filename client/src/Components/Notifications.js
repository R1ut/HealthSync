import { useNavigate } from "react-router-dom";

export default function Notifications() {
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
          <p>- Settings</p>
        </div>
      </div>

      <div style={{ marginLeft: "200px", padding: "1rem 2rem 0 2rem", marginTop: "-2rem" }}>
        <h1>Hi what's good</h1>
      </div>
    </div> 
  );
}

