const Footer: React.FC = () => {
  return (
    <footer className="footer display-flex  justify-center align-center">
      <p className="license margin-b-1"> Gratuita & de Código Abierto (MIT) </p>
      <p> © 2021 Sponsored by sam-pc </p>
      <style jsx>{`
        .footer {
          flex-direction: column;
          background-color: #46463a;
          color: aliceblue;
          margin: 0;
          margin-top: 5em;
          padding: 2em;
        }
        .license {
          font-weight: 300;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
