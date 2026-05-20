import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#171615] text-[#F7F0E8]">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}