export default function Layout({ children }) {
  return (
    <div style={{ padding: 10 }}>
      <header style={{ background: "#ffd700", padding: 20, borderRadius: 10, textAlign: "justify" }}>
        <h2 style={{color: "black"}}>Nome do Site</h2>
      </header>

      <main>{children}</main>

      <footer style={{ background: "#ffd700", padding: 10, marginTop: 10, borderRadius: 10 }}>
        <p  style={{color: "black", textAlign: "center" }}>Colocar as informações do site - Footer.</p>
      </footer>
    </div>
  );
}
