import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const navLinkStyle = {
    color: "white",
    marginLeft: "1rem",
    marginRight: "1rem",
    textDecoration: "underline",
    fontSize: "1rem",
    fontWeight: "500"
  };

  return (
    <Router>
      <div className="App" style={{ fontFamily: "Arial", padding: "2rem", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
        <header
          style={{
            backgroundColor: "#2b6cb0",
            padding: "1rem 1rem",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            HealthSync
          </div>

          <nav>
            <Link to="/" style={{...navLinkStyle, textDecoration: "underline" }}>Home</Link>
            <Link to="/login" style={navLinkStyle}>Login</Link>
            <Link to="/SignUp" style={navLinkStyle}>SignUp</Link>
          </nav>
        </header>

        <main style={{ marginTop: "5rem" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/" element={
              <section style={{ marginBottom: "10rem" }}>
                <h2>Find Out About Yourself</h2>
                <p>See your BMI, Caloric needs, Hours of sleep, Amount of water and Heart rate zone.</p>
                <h2>Set Reminders For Health Related Activities</h2>
                <p>- Alarm for medications including name and amount</p>
                <p>- Notifications for hydration reminders</p>
                <p>- Reminders for taking breaks throughout the day</p>
              </section>
            } />
          </Routes>
        </main>

        <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#666", paddingBottom: "3rem" }}>
          © 2025 Health Tracker. Be well!
          <section>
            <div
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: "#2b6cb0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "0"
              }}
            >
              <p style={{ color: "white", fontWeight: "bold", textAlign: "center", margin: 0 }}>
                Created By Rutva Goyal
              </p>
            </div>
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;




