import Perfil from "../assets/profile.jpg";

const about = () => {
  return (
    <>
    <div className="flex items-center justify-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10">
        <img src={Perfil} alt="" className="object-scale-down w-48 rounded-2xl"/>
      <div>
        <div className="font-sans pb-5 text-4xl w-3/4 font-bold">Olá! Meu nome é <span className="text-green-700 text-4xl">Marcos Pimentel</span>, tenho 23 anos e sou desenvolvedor front-end júnior.</div>
        <div className="font-mono text-slate-300 w-3/4"> Sou apaixonado por criar interfaces de usuário elegantes e funcionais, com um foco especial em acessibilidade e design responsivo.
        trabalho com tecnologias como React, Vite, Tailwind CSS e JavaScript para desenvolver aplicações web modernas e eficientes. Estou constantemente aprendendo e me aprimorando. <br/>
        Além do desenvolvimento, sou entusiasta de boas práticas de codificação e adoro explorar novas tendências e ferramentas que possam melhorar minha produtividade e a qualidade do meu trabalho.
        </div>
      </div>
    </div>
    </>
  )
}

export default about