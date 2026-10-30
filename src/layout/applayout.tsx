// import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import feader from "../components/header/header";
import footer from "../components/footer/footer";
import "../styles/layout.css";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
 // const { pathname } = useLocation();

  // The Wiki intentionally owns its complete page chrome.
 // if (pathname === "/wiki" || pathname.startsWith("/wiki/")) {
  //  return <div className="app app--wiki">{children}</div>;
 // }

  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <div className="app__main">{children}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;