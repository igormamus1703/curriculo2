import './App.css';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Header from './components/Header';
import Perfil from './components/Perfil';
import ExportarPDF from './components/ExportarPDF';
import CarouselCert from './components/CarouselCert';
import SocialLinks from './components/SocialLinks';
import "./i18n"; 
import { useTranslation } from 'react-i18next'; // Importando o hook useTranslation do react-i18next
import Foto from './components/Foto'; // Importando o componente Foto
import fotoPerfil from "./assets/fotoTerno.jpeg";
import { useState } from 'react';
function App() {

  const {t, i18n} = useTranslation(); // Hook para usar traduções o que seria um Hook? o hook é uma função que permite usar o estado e outros recursos do React sem escrever uma classe.

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const [tema, setTema] = useState("claro");
  const estilos = {
      claro: {
          backgroundColor: "#f0f0f0",
          color: "#222",
          transition: "all 0.5s ease",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          padding: "20px"
      },
      escuro: {
          backgroundColor: "#000",
          color: "#e0e0e0",
          transition: "all 0.5s ease",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          padding: "20px"
      },
  };
  const alterarTema = () => {
      setTema(tema === "claro" ? "escuro" : "claro");

  };
  // alimentar o componente gerais
  const dados = {
    nome: "Igor Mamus dos Santos",
    email:"igormamus@gmail.com",
    telefone:"+55 (41) 99846-0742",
    titulo: t('header.title'),
    descricao: t("content.profileDescription"),
    experiencias: t("content.experiences", { returnObjects: true }),
    // experiencias: [
    //   {
    //     cargo: "Estagiario ",
    //     empresa: "Ministerio Público do Paraná",
    //     periodo: "fevereiro de 2019 - dezembro de 2020",
    //     descricao: "Atuei como estagiário do ensino médio, prestando auxílio nas rotinas administrativas do setor. Minhas responsabilidades incluíam organização de documentos físicos e digitais, apoio no arquivamento de processos e realização de tarefas operacionais para otimizar o fluxo de trabalho."
    //   },
    //   {
    //     cargo: "Estagiario",
    //     empresa: "Celepar",
    //     periodo: "maio de 2023 - atualmente",
    //     descricao: "Estagiario no ensino superior, atividades de desenvolvimento de software Java e PostgreSQL."
    //   }
    // ],
    habilidades: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JPA",
      "HIbernate/ORM",
      "Jakarta EE",
      "Quarkus", 
      "Python",
      "c++",
      "Git",
      "Docker",
      "Design Patterns",
      "Linux",
      "RestFul Apis",
      "JavaScript",
      "Node.js"
    ],
    foto: fotoPerfil,
  };
  // colocar certificados aqui
  const certificados = [
    {
      image: require('./assets/certificado1_page-0001.jpg'),
      tituloKey: "content.titleCertificates.title1",

    },
    {
    image: require("./assets/certificado2_page-0001.jpg"),
    tituloKey:"content.titleCertificates.title2",
    },
    {
      image: require('./assets/certificado3_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title3",

    },
    {
      image: require('./assets/certificado4_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title4",

    },
    {
      image: require('./assets/certificado5_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title5",

    },
    {
      image: require('./assets/certificado6_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title6",

    },
    {
      image: require('./assets/certificado7_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title7",

    },
    {
      image: require('./assets/certificado8_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title8",
    },
    {
      image: require('./assets/certificado9_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title9",

    },
    {
      image: require('./assets/certificado10_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title10",

    },
    {
      image: require('./assets/certificado11_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title11",

    },
    {
      image: require('./assets/certificado12_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title12",

    },
    {
      image: require('./assets/certificado13_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title13",

    },
    {
      image: require('./assets/certificado14_page-0001.jpg'),
      tituloKey:"content.titleCertificates.title14",

    },
    {
      image: require('./assets/certificado15_page-0001.jpg'),
      tituloKey: "content.titleCertificates.title15",

    },
  ];

  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/igor-mamus-0a0126199"
    },
    {
      name: "GitHub",
      url: "https://github.com/igormamus1703"
    }
  ];
  // arrumar tema e exportar pdf
  return (
    <div className="App" style={estilos[tema]}>
      <div >
            <button onClick={alterarTema}>{t('section.alterarTema')}</button>
        
        {/* Botões para trocar de idioma */}
        <div className="botaoIdioma">
          <button onClick={() => changeLanguage("pt")}>Português</button>
          <button onClick={() => changeLanguage("en")}>English</button>
        </div>
        <div className='perfil-container'>
            <Foto></Foto>
            <div class='perfil-texto'>
              <Header nome={dados.nome} titulo={dados.titulo}/>
              <Perfil descricao={dados.descricao}/>    
            </div>   
        </div>
        
        
        <div>
          <h1>{t("section.social")}</h1>
          <SocialLinks links={socialLinks}/>
        </div>
        <Experiencia experiencias={dados.experiencias}/>
        <div>
          <h1>{t("section.skills")}</h1>
          </div>
        <Habilidades habilidades={dados.habilidades}/>
        <ExportarPDF dados={dados}/>

        <div>
          <h1>
            {t("section.certificates")}
          </h1>
          <CarouselCert certificados={certificados}/>
        </div>
      </div>
    </div>
  );
}

export default App;