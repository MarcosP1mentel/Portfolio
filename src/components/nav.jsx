import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import LogoSword from "../assets/sword.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";


const nav = () => {

  const [toggle, setToggle] = useState(false);

function openMenu() {
  setToggle(true);
}

function closeMenu() {
  setToggle(false);
}

  return (
    <>
    <div className="flex items-center justify-between p-7">
        <div className="">
            <img src={LogoSword} alt="logo-sword" />
        </div>
        <div className="space-x-40 lg:block ssm:hidden">
            <a href="#" className="font-mono uppercase font-bold hover:text-green-700">About</a>
            <a href="#" className="font-mono uppercase font-bold hover:text-green-700">Skills</a>
            <a href="#" className="font-mono uppercase font-bold hover:text-green-700">Projects</a>
        </div>
        <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/marcos-p1mentel/"><FaLinkedin size={30}/></a>
            <a href=""><AiFillInstagram size={30}/></a>
            <a href="https://github.com/MarcosP1mentel"><BsGithub size={30}/></a>
        </div>
        <div className="ssm:block lg:hidden">
              {toggle ? (
                <AiOutlineClose  onClick={closeMenu} size={30} className="text-white cursor-pointer"/>
              ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-white"/>)}
            </div>
    </div>
    <div>
                {toggle ? (
                  <div className="flex justify-around ml-10">
                    <a href="#" className="font-mono uppercase font-bold hover:text-green-700">About</a>
                    <a href="#" className="font-mono uppercase font-bold hover:text-green-700">Skills</a>
                    <a href="#" className="font-mono uppercase font-bold hover:text-green-700">Projects</a>
                </div>
                ):(
                  <div className="">
                
                  </div>
                )}
              </div>
    </>
  )
}

export default nav