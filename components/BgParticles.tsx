import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "../utils/utils";
import styles from "../styles/Hero.module.css";


const BgParticles = () => {
  return (
    <div className={styles.particles}>
      <ParticlesComponent
        id="tsparticles"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default BgParticles;
