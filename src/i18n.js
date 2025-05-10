import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const recursos = {
    en: {
        translation:{
            header:{
                title: "Curriculum Vitae",
                subtitle: "Full-Stack Developer",
            },
            section:{
                profile:"Professional Profile",
                experience: "Professional Experience", 
                skills: "Technical Skills",
                social:"Network",
                certificates: "Certifications",
                alterarTema: "Change Theme",
                exportPDF: "Save PDF",
            },
            content: { // <-- Nova seção para conteúdos dinâmicos
                profileDescription: "Computer Science student with two years of Java experience and hands-on expertise in full-stack development using Spring Boot, Quarkus and Jakarta EE to build robust APIs and responsive interfaces.",
                experiences: [ // <-- Experiências traduzidas
                    {
                        position: "Software Development Intern",
                        company: "Celepar",
                        period: "May 2023 - Present",
                        description: "Development of corporate systems using Java  and PostgreSQL. Implementation of RESTful APIs, SQL query optimization, and participation in full development cycles using Agile methodologies."
                    },
                    {
                        position: "Administrative Intern",
                        company: "Public Prosecutor's Office of Paraná",
                        period: "February 2019 - December 2020",
                        description: "Management of legal documents and support for process digitalization. Workflow automation and organization of physical/digital files to increase departmental productivity."
                    }
                ],
                titleCertificates:{
                        title1:"Java: Applying Object-Oriented Programming",
                        title2:"Java and JDBC: Working with a Database",
                        title3:"Java OOP: Understanding Object-Oriented Programming",
                        title4:"JavaScript and HTML: Develop a Game and Practice Programming Logic",
                        // eslint-disable-next-line no-script-url
                        title5: "JavaScript: Programming in the Web Language",
                        title6: "JavaSE 7 Programmer I Certification",
                        title7: "JavaSE 7 Programmer I Certification: Creating and Using Arrays",
                        title8:"JavaSE 7 Programmer I Certification: Loops",
                        title9:"JavaSE 7 Programmer I Certification: Encapsulation Methods",
                        title10:"JavaSE 7 Programmer I Certification: Operators",
                        title11:"JavaSE 7 Programmer I Certification: Class Relationships",
                        title12:"JavaSE 7 Programmer I Certification: Data Types",
                        title13:"Java Servlet: Java Web Programming",
                        title14:"Persistence with JPA: Hibernate",
                        title15:"PostgreSQL",
                    }
            }
        }
    },
    pt:{
        translation:{
            header:{    
                title: "Currículo",
                subtitle: "Desenvolvedor Full-Stack",
            },
            section:{
                profile:"Perfil Profissional",
                experience: "Experiência Profissional", 
                skills: "Habilidades Técnicas",
                social:"Redes",
                certificates: "Certificados",
                alterarTema: "Alterar Tema",
                exportPDF: "Exportar PDF",
            },
            content: { // 
                profileDescription: "Estudante de Ciência da Computação na PUCPR com dois anos de experiência em Java e conhecimento em Spring Boot, Quarkus e Jakarta EE, com prática em desenvolvimento full-stack para construção de APIs robustas e interfaces responsivas.",
                experiences: [
                    {
                        position: "Estagiário em Desenvolvimento de Software",
                        company: "Celepar",
                        period: "Maio de 2023 - Atualmente",
                        description: "Desenvolvimento de sistemas corporativos com Java  e PostgreSQL. Implementação de APIs RESTful, otimização de queries SQL e participação em ciclos completos de desenvolvimento utilizando metodologias ágeis."
                    },
                    {
                        position: "Estagiário Administrativo",
                        company: "Ministério Público do Paraná",
                        period: "Fevereiro de 2019 - Dezembro de 2020",
                        description: "Gestão de documentos jurídicos e suporte à digitalização de processos. Automação de fluxos de trabalho e organização de arquivos físicos/digitais para aumento de produtividade setorial."
                    }
                ],
                titleCertificates:{
                        title1:"Java: Aplicando a orientação a objetos",
                        title2:"Java e JDBC: Trabalhando com um banco de dados",
                        title3:"Java OO: Entendo a Orientação a Objetos",
                        title4:"JavaScript e HTML: Desenvolva jogo e pratique lógica de programação",
                        // eslint-disable-next-line no-script-url
                        title5:"JavaScript: Programando na linguagem WEB",
                        title6:"Certificação JavaSE 7 Programmer I",
                        title7:"Certificação JavaSE 7 Programmer I: Criando e usando arrays",
                        title8:"Certificação JavaSE 7 Programmer I: Laços",
                        title9:"Certificação JavaSE 7 Programmer I: Métodos de Encapsulamento",
                        title10:"Certificação JavaSE 7 Programmer I: Operadores",
                        title11:"Certificação JavaSE 7 Programmer I: Relações entre classes",
                        title12:"Certificação JavaSE 7 Programmer I: Tipos de Dados",
                        title13:"Java Servlet: Programação Web Java ",
                        title14:"Persistência com JPA: Hibernate",
                        title15:"POstgreSQL",
                    }
            }
        }
    }
};
i18n
.use(LanguageDetector) // Detecta o idioma do navegador
.use(initReactI18next) // Inicializar o i18next com o React
.init({
    resources: recursos,
    fallbackLng: "en", // Idioma padrão se o idioma detectado não estiver disponível
    interpolation: {
        escapeValue: false, // React já faz a proteção contra XSS   
    },
});

export default i18n;