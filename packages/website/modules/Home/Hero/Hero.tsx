import Image from "next/image";

import styles from "./Hero.module.scss";
import homeImage from "assets/svg/home.svg";

const Hero: React.FC = () => {
  return (
    <section className="hero columns">
      <div
        className="column-12-xs column-6-md"
        style={{ transform: "translate(-50px, -80px)" }}
      >
        <Image src={homeImage} alt="A boy dreaming" />
      </div>
      <div className="column-12-xs column-6-md display-flex justify-center justify-flex-end-md align-flex-end">
        <div className={styles.content}>
          <h2 className={styles.title}> Percy </h2>
          <p className={styles.paragraph}>
            Construye interfaces de <br /> manera simple y creativa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
