import Navigation from "./Navigation/Navigation";

const Documentation: React.FC = () => {
  return (
    <div className="container">
      <Navigation />

      <section id="core" className="instructions">
        <h2 className="instructions__title margin-t-5">1. Núcleo</h2>
        <code>
          <p className="code__title"> // Instalar percy-core </p>
          <p className="code__text"> npm install @sampc0/percy-core</p>
          <p className="code__title"> // Importar estilos </p>
          <p className="code__text">
            @import "node_modules/percy-core/lib/core"
          </p>
        </code>
      </section>

      <section id="utilities" className="instructions">
        <h2 className="instructions__title margin-t-5">2. Utilidades</h2>
        <code>
          <p className="code__title"> // Instalar percy-utilities </p>
          <p className="code__text"> npm install @sampc0/percy-utilities</p>
          <p className="code__title"> // Importar estilos </p>
          <p className="code__text">
            @import "node_modules/percy-utilities/lib/utilities"
          </p>
        </code>
      </section>

      <section id="components" className="instructions">
        <h2 className="instructions__title margin-t-5">3. Componentes</h2>
        <code>
          <p className="code__title"> // Instalar percy-components</p>
          <p className="code__text"> npm install @sampc0/percy-components</p>
          <p className="code__title"> // Importar estilos </p>
          <p className="code__text">
            @import "node_modules/percy-components/lib/components"
          </p>
        </code>
      </section>

      <section id="full" className="instructions">
        <h2 className="instructions__title margin-t-5">4. Full</h2>
        <code>
          <p className="code__title"> // Instalar percy</p>
          <p className="code__text"> npm install @sampc0/percy</p>
          <p className="code__title"> // Importar estilos </p>
          <p className="code__text">@import "node_modules/percy/lib/percy"</p>
        </code>
      </section>
    </div>
  );
};

export default Documentation;
