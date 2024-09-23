import "./sobre.css";
import fotoCriador from "../../assets/images/criador.jpeg";

const Sobre = () => {
    return (
        <div>
            <div className="container">
                <div className="profile">
                    <img src={fotoCriador} alt="Foto do Criador"/> 
                    <div>
                        <h1>Gabryel Alves de Freitas</h1>
                        <p><strong>Profissão:</strong> Desenvolvedor Full Stack</p>
                        <p><strong>Biografia:</strong> Tenho 20 anos, sou um entusiasta por tecnologia, games e carros. <br/>Atuo como Desenvolvedor Full Stack C# à 2 anos, sempre buscando aprender e melhorar minhas habilidades visando a melhor experiência para o usuário. </p>
                        <p><a href="https://github.com/GabryelFreitasDev">Visite meu GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;