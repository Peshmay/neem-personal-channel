import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#1A1A1A]">
      <Header />

      <main className="pt-[78px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
