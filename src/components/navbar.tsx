import Image from "next/image"
import logo from "../assets/navbar-brand.png"
import Link from "next/link"
export default function Home(){
    return (
        <div className="">
            <header className="">
                <div className="bg-[#252B42] w-[1349.4px] h-[91px] flex items-center">
                    <Image src={logo} alt="" className="w-[187px] h-[58px] ml-[136px]"/>
                <div className="w-[815px] h-[58px] flex justify-between">
                    <ul className="flex gap-[21px] mt-[17px] text-white ml-[63px]">
                        <li>Home</li>
                        <li>product</li>
                        <li>pricing</li>
                        <li>contact</li>
                    </ul>
                    <div className="w-[189px] h-[52px] mt-[3px] flex items-center gap-[45px] text-white">
                        <Link href="">Login</Link>
                        <button className="w-[110px] h-[52px] rounded-tl-[5px] rounded-bl-[5px] bg-[#23A6F0]">JOIN US</button>

                    </div>

                </div>
                </div>                
            </header>

          
            
        </div>
    )
}

