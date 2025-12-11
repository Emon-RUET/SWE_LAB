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
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Navigation Bar */}
      <nav style={{ 
        background: "rgba(255, 255, 255, 0.95)", 
        padding: "1.2rem 3rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <span style={{ 
          color: "#667eea", 
          fontWeight: "bold", 
          fontSize: "1.5rem",
          letterSpacing: "1px"
        }}>
          🏦 {bankInfo.name}
        </span>
        <div>
          {navItems.map((item, idx) => (
            <span key={idx} style={{ 
              color: "#333", 
              marginLeft: "2rem",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "color 0.3s"
            }}>
              {item.label}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ padding: "4rem 3rem", color: "#fff" }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            marginBottom: "1rem",
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
          }}>
            Welcome to {bankInfo.name}
          </h1>
          <p style={{ 
            fontSize: "1.3rem", 
            marginBottom: "3rem",
            opacity: "0.95"
          }}>
            Your trusted partner for secure and modern banking solutions
          </p>

          {/* Feature Cards */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            {/* Card 1 */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "15px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
              color: "#333"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💳</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>
                Digital Banking
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Access your accounts anytime, anywhere with our secure online platform
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "15px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
              color: "#333"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>
                Secure Transactions
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Bank-grade encryption and multi-factor authentication protect your data
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "15px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
              color: "#333"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>
                Smart Analytics
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Track spending, set budgets, and achieve your financial goals
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button style={{
            marginTop: "3rem",
            background: "#fff",
            color: "#667eea",
            border: "none",
            padding: "1rem 3rem",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, box-shadow 0.3s"
          }}>
            Get Started Today
          </button>

          {/* Stats Section */}
          <div style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>10M+</h2>
              <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>Active Users</p>
            </div>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>$50B+</h2>
              <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>Transactions</p>
            </div>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>99.9%</h2>
              <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>Uptime</p>
            </div>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>24/7</h2>
              <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>Support</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: "rgba(0, 0, 0, 0.3)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        marginTop: "3rem"
      }}>
        <p style={{ fontSize: "0.95rem", opacity: "0.9" }}>
          © 2025 {bankInfo.name}. Built with Singleton & Factory Method Design Patterns.
        </p>
      </footer>
    </div>
  );
}

export default App;
