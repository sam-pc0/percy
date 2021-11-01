import TwoColumns from "modules/common/layout/TwoColumns/TwoColumns";

const TITLE = "Comenzando";
const GettingStarted: React.FC = () => {
  return (
    <TwoColumns title={TITLE}>
      <h3> Instalar con npm </h3>
      <code>
        <p className="code__title"> // Instalar Percy </p>
        <p className="code__text"> npm install @sampc0/percy-full</p>
        <p className="code__title"> // Importar estilos </p>
        <p className="code__text"> @import "node_modules/@percy/lib/full" </p>
      </code>
    </TwoColumns>
  );
};

export default GettingStarted;
