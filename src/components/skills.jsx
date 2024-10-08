import Html5 from "../assets/html5.png";
import Css3 from "../assets/css3.png";
import Js from "../assets/js.png";
import Php from "../assets/php.png";
import Mysql from "../assets/mysql.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.svg";
import Vite from "../assets/vite.png";
import Bootstrap from "../assets/bootstrap.png";



const skills = () => {
  return (
    <>   
        <section className="m-20 max-w-full rounded-xl">
            <div className="grid justify-items-center mt-10 mb-5">
                <h1 className="text-3xl mt-8 font-bold">SKILLS</h1>
            </div>
            <hr className="mb-10"/>
            <div className="">
                <div className="grid md:grid-cols-3 gap-4 p-5 ssm:grid-cols-2">
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Html5} alt="logo-html" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        HTML5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Css3} alt="" className="m-4"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        CSS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Js} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        JAVASCRIPT
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Php} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        PHP
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Mysql} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        MYSQL
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={React} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        REACTJS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Tailwind} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        TAILWINDCSS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Bootstrap} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        BOOTSTRAP
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4 flex items-center justify-center size-40">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Vite} alt="" className="m-4 size-16"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        VITE
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default skills