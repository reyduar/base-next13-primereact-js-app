function DarkLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "5px",
        borderRadius: "5px",
        color: "black",
      }}
    >
      <h3>Dark Layout</h3>
      {children}
    </div>
  );
}

export default DarkLayout;
