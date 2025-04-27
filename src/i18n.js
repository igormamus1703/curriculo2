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
                certificates: "Certifications"
            },
            content: { // <-- Nova seção para conteúdos dinâmicos
                profileDescription: "Computer Science student with hands-on experience in full-stack development. Proficient in Java ecosystem and modern frameworks for building robust APIs and responsive interfaces.",
                experiences: [ // <-- Experiências traduzidas
                    {
                        position: "Software Development Intern",
                        company: "Celepar",
                        period: "May 2023 - Present",
                        description: "Development of corporate systems using Java Spring Boot and PostgreSQL. Implementation of RESTful APIs, SQL query optimization, and participation in full development cycles using Agile methodologies."
                    },
                    {
                        position: "Administrative Intern",
                        company: "Public Prosecutor's Office of Paraná",
                        period: "February 2019 - December 2020",
                        description: "Management of legal documents and support for process digitalization. Workflow automation and organization of physical/digital files to increase departmental productivity."
                    }
                ]
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
                certificates: "Certificados"
            },
            content: { // 
                profileDescription: "Estudante de Engenharia de Software com experiência prática em desenvolvimento full-stack. Domínio do ecossistema Java e frameworks modernos para construção de APIs robustas e interfaces responsivas.",
                experiences: [
                    {
                        position: "Estagiário em Desenvolvimento de Software",
                        company: "Celepar",
                        period: "Maio de 2023 - Atualmente",
                        description: "Desenvolvimento de sistemas corporativos com Java Spring Boot e PostgreSQL. Implementação de APIs RESTful, otimização de queries SQL e participação em ciclos completos de desenvolvimento utilizando metodologias ágeis."
                    },
                    {
                        position: "Estagiário Administrativo",
                        company: "Ministério Público do Paraná",
                        period: "Fevereiro de 2019 - Dezembro de 2020",
                        description: "Gestão de documentos jurídicos e suporte à digitalização de processos. Automação de fluxos de trabalho e organização de arquivos físicos/digitais para aumento de produtividade setorial."
                    }
                ]
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