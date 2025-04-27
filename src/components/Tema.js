import React, {useState} from 'react';

const Tema = () => {
    const [tema, setTema] = useState("claro");
    const estilos = {
        claro: {
            backgroundColor: "#f0f0f0",
            color: "#000"
        },
        escuro: {
            backgroundColor: "#000",
            color: "#fff"
        },
    };
    const alterarTema = () => {
        setTema(tema === "claro" ? "escuro" : "claro");

    };
    return(
        <div style={estilos[tema]}>
            <h1> Currículo</h1>
            <button onClick={alterarTema}>Alterar tema</button>
        </div>
    );
};

export default Tema;