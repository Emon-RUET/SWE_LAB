import React from "react";
import { bankInfo } from "./BankInfo";
import NavbarFactory from "./NavbarFactory";

const navItems = [
  NavbarFactory.createItem("home"),
  NavbarFactory.createItem("accounts"),
  NavbarFactory.createItem("about"),
];

function App() {
  return (
    <div>
      <nav style={{ background: "#1976d2", padding: "1rem" }}>
        <span
          style={{ color: "#fff", fontWeight: "bold", marginRight: "2rem" }}
        >
          {bankInfo.name}
        </span>
        {navItems.map((item, idx) => (
          <span key={idx} style={{ color: "#fff", marginRight: "1rem" }}>
            {item.label}
          </span>
        ))}
      </nav>
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to {bankInfo.name}</h1>
        <p>
          This is a simple banking system homepage using Singleton and Factory
          Method patterns.
        </p>
      </main>
    </div>
  );
}

export default App;
