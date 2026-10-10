"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { options } from "../utils/utils";

async function initParticles(engine: Engine) {
  await loadSlim(engine);
}

const ParticlesComponent = () => {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default ParticlesComponent;
