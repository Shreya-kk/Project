import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "@/components/Features/ChatWidget";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-subtle-gradient">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;