import '../globals.css'
import Link from 'next/link'


export default function Info(){
    
    return(
    <div className="pt-20">
            <Link className="btn-back text-sm " href="/"> &larr; </Link>

        <div className="flex flex-col mt-20 leading-7 w-2/3 mx-auto ">
                <p > Select any of the diet green buttons that you want to check the food item.</p>
                <p className="mt-2">
                <span className="font-bold">Low FODMAP</span> - is recommended for those who have IBS. <br></br>
                <span className="font-bold">High PH</span>- is recommended for those who have gastritis and/or acid reflux.  <br></br>
                <span className="font-bold">Low Fat</span> - is recommended for those who have issues with the gallbladder.
                </p>
        </div>
                <div className="mx-auto w-5/6 info-disclaimer mb-6">
                    <span className="font-bold">Disclaimer</span> 
                    <p className="mt-1">
                        All information and tools presented and written within this site are intended for informational purposes only. I am not a certified nutritionist and any nutritional information on FoodCheck should only be used as a general guideline.
                        <br></br> This information is provided as a courtesy and there is no guarantee that the information will be completely accurate. 
                        <br></br>
                        All content within this site is not intended as medical diagnosis or treatment and should not be considered a substitute for professional medical expertise. If you think you have any type of medical condition, you should seek professional advice. 
                        <br></br>Under no circumstances will FoodCheck and its owner be responsible for any loss, adverse reactions, effects, consequences, damage, affliction or illness resulting in your reliance on the content here such as the recipes and nutritional information provided. 
                        <br></br>Content should not be considered a substitute for professional medical advise, treatment or diagnosis. Should you need to be sure, please seek advice from a professional nutritionist or your doctor.
                    </p>
                
                </div> 
    </div>
    )
}