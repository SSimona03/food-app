

import './globals.css'
import { Montserrat } from "next/font/google"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/foodLogo.png"
import Categories from "../components/Buttons.jsx"
import Login from "../components/Login.jsx"
import Search from "../components/Search.jsx"
import Footer from "../components/Footer.jsx"
import Logic from "../components/LogicButtons.jsx"



const fontMontserrat = Montserrat({
  weight: ["400","500","600","700"],
  variable: ['--font-montserrat']
})

export const metadata = {
  title: 'Diet Food App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontMontserrat.variable} font-montserrat`}  >
      
      <body>
        <div className="page-wrap">
       
            <div className="content">  
                <Logic>       
                      <nav className='navbar '>
                        <Image src={logo} width={120} max-height={100} alt="logo" className="object-contain logo absolute left-0 ml-2 " priority="true"></Image>
                        <Categories />
                        <Login />
                      </nav> 
                      <Search  className=" "/>  

                      <div className="other-pages">
                      {children}
                      </div>
                </Logic>    
            </div>
            <Footer className="footer "/>

        </div>
            
        </body>

    </html>
  )
}
