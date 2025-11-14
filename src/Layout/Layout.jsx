export default function Layout({ children }) {
  return (
    <div style={{ padding: 10 }}>
      <header style={{ background: "black", padding: 10, borderRadius: 10, textAlign: "center" }}>
        <h2 style={{color: "white"}}>Nome do Site</h2>
      </header>

      <main>{children}</main>

      <footer style={{ background: "black", padding: 10, marginTop: 10, borderRadius: 10 }}>
        <p  style={{color: "white", textAlign: "center" }}>Colocar as informações do site - Footer.</p>
      </footer>
    </div>
  );
}
