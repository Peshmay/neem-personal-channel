import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <Header />

      <main className="pt-[82px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
