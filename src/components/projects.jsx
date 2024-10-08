import Lock from "../assets/cadeado.png";
import Starbucks from "../assets/Starbucks.png";
import Coffe from "../assets/coffe.png";


const projects = () => {
  return (
    <>
    <section className="m-20 max-w-full rounded-xl">
            <div className="grid justify-items-center mt-10 mb-5">
                <h1 className="text-3xl mt-8 font-bold">PROJECTS</h1>
            </div>
            <hr className="mb-10"/>
            <div className="">
                <div className="grid md:grid-cols-3 gap-4 p-5 ssm:grid-cols-2">
                        <a href="https://cafeteria-marcospimentel.netlify.app/">
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40 hover:animate-pulse">
                                <div className="md:flex">
                                    <div className="p-8 flex flex-col items-center justify-center">
                                        <img src={Coffe} alt="logo-html" className="m-4 size-16"/>
                                        <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                            <h1>CAFETERIA</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://geradordesenha-mp.netlify.app/">
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40 hover:animate-pulse">
                            <div className="md:flex">
                                <div className="p-8 flex flex-col items-center justify-center">
                                    <img src={Lock} alt="" className="m-4 size-20"/>
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        <h1>GERADOR DE SENHAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="https://mp-sbucks.netlify.app/">
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-3/4  flex items-center justify-center size-40 hover:animate-pulse">
                                <div className="md:flex">
                                    <div className="p-8 flex flex-col items-center justify-center">
                                        <img src={Starbucks} alt="" className="m-4 size-20"/>
                                        <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                            <h1>Starbucks</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                </div>    
            </div>
        </section>
    </>
  )
}

export default projects