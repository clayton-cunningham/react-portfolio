import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import "./Particles.less";

export const LooseParticles = (props: any) => {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = async (container?: Container): Promise<void> => {
    //   console.log(container);
    };
  
    const options: ISourceOptions = useMemo(
      () => ({
        background: {
          color: {
            value: "#0d47a1",
          },
          opacity: 0,
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#009900",
          },
          move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
              default: OutMode.out,
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 450,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
    if (init) {
      return (
        <Particles
            className="loose-particles"
            id="tsparticles-loose"
            particlesLoaded={particlesLoaded}
            options={options}
        />
      );
    }
  
    return <></>;
}