import Hero from "./Hero/Hero";
import Versions from "./Versions/Versions";
import GettingStarted from "./GettingStarted/GettingStarted";
import Benefits from "./Benefits/Benefits";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Versions />
      <GettingStarted />
      <Benefits />
    </>
  );
};

export default Home;
