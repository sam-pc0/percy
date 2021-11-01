import TwoColumns from "modules/common/layout/TwoColumns/TwoColumns";

const TITLE = "Versiones actuales";
const Versions: React.FC = () => {
  return (
    <TwoColumns title={TITLE}>
      <section className="columns margin-t-1 font-xl">
        <div className="column-8-xs column-7-md">
          núcleo <br /> utilidades <br /> components
        </div>
        <div className="column-4-xs column-5-md">
          0.0.1 <br /> 0.0.1 <br /> 0.0.1
        </div>
      </section>
    </TwoColumns>
  );
};

export default Versions;
