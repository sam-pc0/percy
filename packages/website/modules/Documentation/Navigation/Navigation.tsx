const Navigation: React.FC = () => {
  return (
    <section className="nav display-flex margin-t-5">
      <a className="nav__item" href="#core">
        1. Núcleo
      </a>
      <a className="nav__item" href="#utilities">
        2. Utilidades
      </a>
      <a className="nav__item" href="#components">
        3. Componentes
      </a>
      <a className="nav__item" href="#full">
        4. Full
      </a>
      <style jsx>{`
        .nav {
          flex-direction: column;
          color: gray;
          font-size: 1.6em;
          font-weight: bold;
          height: auto;
          width: auto;
        }
      `}</style>
    </section>
  );
};

export default Navigation;
