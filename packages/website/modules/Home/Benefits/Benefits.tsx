import TwoColumns from "modules/common/layout/TwoColumns/TwoColumns";
import Benefit from "./Benefit/Benefit";

const TITLE = "Beneficios";
const GettingStarted: React.FC = () => {
  const benefits = [
    {
      title: "Ligera",
      text: "cada línea de CSS está pensada para ocupar el menor espacio.",
    },
    {
      title: "Modular",
      text: "instala únicamente el módulo que necesites o el paquete completo.",
    },
    {
      title: "Sencilla",
      text: "curva de aprendizaje corta, teniendo resultados en minutos.",
    },
    {
      title: "Especifidad",
      text: "despreocupate de los conflictos, únicamente selectores de clase.",
    },
    {
      title: "Configurable",
      text: "pensada para ser adaptada a diferentes proyectos.",
    },

    {
      title: "Agnostica",
      text:
        "la paleta de colores es sobría y apropiada para cualquier interfaz.",
    },
  ];
  return (
    <TwoColumns title={TITLE}>
      <section className="columns">
        {benefits.map((benefit) => (
          <Benefit
            key={benefit.title}
            title={benefit.title}
            text={benefit.text}
          />
        ))}
      </section>
    </TwoColumns>
  );
};

export default GettingStarted;
