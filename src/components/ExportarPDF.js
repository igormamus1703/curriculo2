import jsPDF from "jspdf";
import { useTranslation } from 'react-i18next';

const ExportarPDF = ({ dados }) => {
  const { t } = useTranslation();

  const gerarPDF = () => {
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Ajustes de espaçamento
    const lineHeight = 18;
    const sectionGap = 28;

    let y = margin;

    // Foto de perfil (opcional)
    let imgW = 0;
    let imgH = 0;
    if (dados.foto) {
      imgW = 80;
      const props = pdf.getImageProperties(dados.foto);
      imgH = (props.height * imgW) / props.width;
      // Desenha a foto um pouco acima para evitar corte
      const photoY = y - 10;
      pdf.addImage(dados.foto, "PNG", pageWidth - margin - imgW, photoY, imgW, imgH);
    }

    // Cabeçalho
    pdf.setFont("helvetica", "bold").setFontSize(22);
    pdf.text(dados.nome, margin, y + 20);
    pdf.setFont("helvetica", "normal").setFontSize(14);
    pdf.text(dados.titulo, margin, y + 40);

    y += 60;
    // Linha de separação: se houver foto, para antes dela
    const lineEndX = imgW > 0
      ? pageWidth - margin - imgW - 10
      : pageWidth - margin;
    pdf.setLineWidth(0.5).line(margin, y, lineEndX, y);
    y += sectionGap;

    // Contato (sem símbolos)
    pdf.setFontSize(11);
    pdf.text(dados.email, margin, y);
    pdf.text(dados.telefone, margin + 250, y);
    y += sectionGap;

    // Função para iniciar nova seção
    const novaSecao = (titulo) => {
      pdf.setFont("helvetica", "bold").setFontSize(14).setTextColor(40);
      pdf.text(titulo, margin, y);
      y += 6;
      pdf.setLineWidth(0.3).line(margin, y, pageWidth - margin, y);
      y += sectionGap - 6;
      pdf.setFont("helvetica", "normal").setFontSize(11).setTextColor(20);
    };

    // Perfil
    novaSecao("Perfil Profissional");
    const perfilLinhas = pdf.splitTextToSize(
      dados.descricao,
      pageWidth - 2 * margin
    );
    pdf.text(perfilLinhas, margin, y);
    y += perfilLinhas.length * lineHeight + sectionGap;

    // Experiência
    novaSecao("Experiência Profissional");
    dados.experiencias.forEach((exp) => {
      // Cargo
      pdf.setFont("helvetica", "bold");
      pdf.text(`• ${exp.position}`, margin, y);
      y += lineHeight; // pular linha para a empresa

      // Empresa + período
      pdf.setFont("helvetica", "normal");
      pdf.text(`${exp.company} (${exp.period})`, margin + 12, y);
      y += lineHeight; // espaço após empresa

      // Descrição
      const descLinhas = pdf.splitTextToSize(
        exp.description,
        pageWidth - 2 * margin - 12
      );
      pdf.text(descLinhas, margin + 12, y);
      y += descLinhas.length * lineHeight + sectionGap;

      // Quebra de página automática
      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
    });

    // Habilidades
    novaSecao("Habilidades Técnicas");
    const skillsLinhas = pdf.splitTextToSize(
      dados.habilidades.join(", "),
      pageWidth - 2 * margin
    );
    pdf.text(skillsLinhas, margin, y);
    y += skillsLinhas.length * lineHeight + sectionGap;

    // Salvar arquivo final
    const filename = `${dados.nome.replace(/\s+/g, "_")}_Curriculo.pdf`;
    pdf.save(filename);
  };

  return (
    <button
      onClick={gerarPDF}
      style={{ padding: "8px 16px", fontSize: "14px", cursor: "pointer" }}
    >
      {t('section.exportPDF')}
    </button>
  );
};

export default ExportarPDF;
