import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
export default function PagesLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
        <Navbar />
        <div style={{height:'100%', width:'100%', background:'aqua', padding:'100px 20px'}}>{children}</div>
      </div>
    </div>
  );
}
