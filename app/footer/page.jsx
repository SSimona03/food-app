import '../globals.css'
import Link from 'next/link'
import { Error } from '../error';
import Info from '../info/page'
import FAQ from '../faq/page'

export default function Footer(){
    return(
    <div className="footer-style " >
        <div className=" footer-infobox ">
            <div className='pb-2 footer-subbox leading-relaxed'>
                <h3 className=" footer-title"> ABOUT US </h3>
                <p className=" footer-p">
                Find what foods are the best or worst choice
                for you depending on your current target.
                </p>
            </div>

            <div className="footer-details" >

                <div className='pb-2 footer-subbox '>
                    <h3 className="footer-title "> LINKS </h3>
                    <Link href="/info" className="footer-p ">
                    How to use the website
                    </Link> <br></br>
                    <Link href="/faq" className="footer-p">
                    FAQ
                    </Link>
                </div>

                <div className='pb-3 footer-subbox'>
                    <h3 className="footer-title  "> CONTACT US </h3>
                    <Link href="mailto: info@[example].com"  className="footer-p">
                    info@[example].com
                    </Link>
                    <p className="footer-p pt-2">
                    London, UK
                    </p>
                </div>
               
            </div>
        </div>
           
    </div>
    )
}