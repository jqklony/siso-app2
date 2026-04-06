import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App 2.jsx";

// COD-04: ErrorBoundary previene pantalla blanca ante errores no capturados
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[SISO ErrorBoundary]", error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return React.createElement("div", {
        style: {
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", fontFamily: "system-ui",
          background: "#f8fafc", color: "#1e293b", padding: "2rem", textAlign: "center"
        }
      },
        React.createElement("h1", { style: { fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" } }, "SISO — Error inesperado"),
        React.createElement("p", { style: { color: "#64748b", fontSize: "0.875rem", maxWidth: "400px", marginBottom: "1rem" } },
          "La aplicación encontró un error. Sus datos están seguros en la nube."),
        React.createElement("pre", { style: { background: "#fee2e2", color: "#991b1b", padding: "1rem", borderRadius: "0.5rem", fontSize: "0.75rem", maxWidth: "500px", overflow: "auto", marginBottom: "1rem" } },
          String(this.state.error)),
        React.createElement("button", {
          onClick: () => window.location.reload(),
          style: { background: "#0d9488", color: "white", border: "none", padding: "0.75rem 2rem", borderRadius: "0.75rem", fontWeight: 700, cursor: "pointer", fontSize: "0.875rem" }
        }, "Recargar aplicación")
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
