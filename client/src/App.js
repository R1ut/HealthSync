import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Interview from "./Components/Interview";
import Info from "./Components/Info";
import UserPFP from "./Components/UserPFP";
import { InterviewProvider } from './Components/InterviewContext';

import frontpage from './Components/Assets/frontpage.png';
import logos from './Components/Assets/Mlogo.png';
import './App.css';

function App() {
  return (
    <InterviewProvider>
      <Router>
        <div
          className="App"
          style={{
            fontFamily: "Arial",
            padding: "2rem",
            backgroundColor: "white",
            minHeight: "100vh",
          }}
        >
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
              zIndex: 1000,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img
                src={logos}
                alt=""
                style={{ height: "50px", width: "40px", objectFit: "contain" }}
              />
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                HealthSync
              </div>
            </div>

            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/SignUp" className="nav-link">SignUp</Link>
            </nav>
          </header>

          <main style={{ marginTop: "5rem", background: "white" }}>
            <Routes>
              <Route path="/interview" element={<Interview />} />
              <Route path="/login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Info" element={<Info />} />
              <Route path="/UserPFP" element={<UserPFP />} />
              <Route
                path="/"
                element={
                  <section
                    style={{
                      marginBottom: "10rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="box">
                      <h2>Find Out About Yourself</h2>
                      <p>
                        See your BMI, Caloric needs, Hours of sleep, Amount of water
                        and Heart rate zone.
                      </p>
                      <h2>Set Reminders For Health Related Activities</h2>
                      <p>- Alarm for medications including name and amount</p>
                      <p>- Notifications for hydration reminders</p>
                      <p>- Reminders for taking breaks throughout the day</p>
                    </div>

                    <img
                      src={frontpage}
                      alt="HealthSync Preview"
                      style={{
                        width: "720px",
                        height: "420px",
                        display: "block",
                        marginTop: "-2rem",
                        marginRight: "-3rem",
                      }}
                    />
                  </section>
                }
              />
            </Routes>
          </main>

          <footer
            style={{
              marginTop: "3rem",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#666",
              paddingBottom: "3rem",
            }}
          >
            © 2025 HealthSync. Be well!
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
                  marginRight: "0",
                  marginTop: "1rem"
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Created By Rutva Goyal
                </p>
              </div>
            </section>
          </footer>
        </div>
      </Router>
    </InterviewProvider>
  );
}

export default App;
