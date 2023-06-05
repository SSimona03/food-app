import "./globals.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/foodLogo.png";
import Buttons from "../components/Buttons.jsx";
import Login from "../server-components/Login.jsx";
import Search from "../components/Search.jsx";
import Footer from "../server-components/Footer.jsx";
import Logic from "../components/Logic.jsx";

const fontMontserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: ["--font-montserrat"],
});

export const metadata = {
  title: "Diet Food App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontMontserrat.variable} font-montserrat`}>
      <body>
        <div className="page-wrap">
          <div>
            <Logic>
              <nav className="navbar ">
                <Link href="/">
                  <Image
                    src={logo}
                    width={120}
                    max-height={100}
                    alt="logo"
                    className="object-contain logo absolute left-0 ml-4 "
                    priority="true"
                  ></Image>
                </Link>
              </nav>

              <div className="other-pages">{children}</div>
            </Logic>
          </div>
          <Footer className="footer " />
        </div>
      </body>
    </html>
  );
}
