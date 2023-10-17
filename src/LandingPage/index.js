import React, {useState} from "react";
import './style.css'

export default function LandingPage() {

    const fundoBranco = 'bg-branco';
    const fundoCinza = 'bg-cinza';
    const logo = 'logo';
    const logoDm = 'logo-dm';
    const imgBotaoPreto = "assets/sun.png"
    const imgBotaoBranco = "assets/moon.png"
    const txtBotaoPreto = 'txt-botao-preto'
    const txtBotaoBranco = 'txt-botao-branco'
    const txtBotaoPretoNome = 'Dark'
    const txtBotaoBrancoNome = 'Light'
    const txtBranco = 'txt-branco'
    const txtPreto = 'txt-preto'

    const [darkMode, setDarkMode] = useState(true)

    function alteraTema() {
        setDarkMode(!darkMode);
    }

    return (
        <main className={darkMode ? fundoCinza : fundoBranco}>
            <header>
                <img className={darkMode ? logoDm : logo} src="/assets/barbearia-logo.png" alt="Logo"/>
                <button onClick={alteraTema}>
                    <img className="icone" src={darkMode ? imgBotaoBranco : imgBotaoPreto} alt="Lua"/>
                    <p className={darkMode ? txtBotaoBranco : txtBotaoPreto}>{darkMode ? txtBotaoBrancoNome : txtBotaoPretoNome}</p>
                </button>
            </header>
            <section className="banner">

            </section>
            <section className="info">
                    <div className="limita-info">
                        <h1 className={darkMode ? txtBranco : txtPreto}>Bem-vindo a Barber Shop</h1>
                        <h2 className={darkMode ? txtBranco : txtPreto}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</h2>
                        <p className={darkMode ? txtBranco : txtPreto}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                        <p className="assinatura">S. Kelly</p>
                    </div>
            </section>
        </main>
    )
}