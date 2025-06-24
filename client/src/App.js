function App() {
  const navLinkStyle = {
    color: "white",
    marginLeft: "1rem",
    marginRight: "1rem",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500"
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#2b6cb0",
          padding: "1rem 1rem",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "0px",
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
          <a href="#login" style={{ ...navLinkStyle, textDecoration: "underline" }}>Login</a>
          <a href="#signup" style={{ ...navLinkStyle, textDecoration: "underline" }}>Sign Up</a>
        </nav>
      </header>

      <main style={{ marginTop: "5rem" }}>
        <section style={{ marginBottom: "15rem" }}>
          <h2>Find Out About Yourself</h2>
          <p> See your BMI, Caloric needs, Hours of sleep, Amount of water and Heart rate zone. </p>
          <h2>Set Reminders For Health Rated Activities</h2>
          <p>- Alarm was medications including name and amt</p>
          <p>- Notifications for hydration reminders</p>
          <p>- Reminders for taking breaks throughout the day</p>
        </section>
      </main>

      <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
        © 2025 Health Tracker. Be well!
      </footer>
    </div>
  );
}

export default App;



