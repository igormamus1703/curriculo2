import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const Tema = () => {
    const [tema, setTema] = useState("claro");
    const { t } = useTranslation();
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
            <button onClick={alterarTema}>{t('section.alterarTema')}</button>
        </div>
    );
};

export default Tema;