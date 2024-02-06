import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./ParticlesConfig";

export default function ParticleBackground() {
	const particlesInit = async (main) => {

		await loadFull(main);
	};
	const particlesLoaded = (container) => {

	};
	return (
        <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        particlesInit={particlesInit}
        options={ParticlesConfig} 
        height='100vh'
        width='100vw'
        style={{width:"300px", minHeight:"100vh"}}
      ></Particles>
	);
}