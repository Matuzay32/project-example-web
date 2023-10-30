import { MathUtils } from 'three';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Instances, Instance, Environment } from '@react-three/drei';
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing';

const geometries = [<tetrahedronGeometry args={[0.45]} />];

const particles = Array.from({ length: 5 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10),
}));

export default function Particles() {
  const canvasStyle = {
    position: 'fixed',
    zIndex: -100,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
  };

  return (
    <Canvas
      style={canvasStyle}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ fov: 50, position: [0, 0, 20] }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <Bubbles />
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={6} intensity={2} color="red" />
        <TiltShift2 blur={0.1} />
      </EffectComposer>
      <Environment preset="city" />
    </Canvas>
  );
}

function Bubbles() {
  const ref = useRef();
  const [currentGeometry, setCurrentGeometry] = useState(geometries[0]);
  const [geometryChangeTimer, setGeometryChangeTimer] = useState(0);

  // Utiliza un efecto para cambiar la geometría cada 5 segundos
  useEffect(() => {
    const geometryChangeInterval = setInterval(() => {
      setGeometryChangeTimer((prevTimer) => prevTimer + 1);

      if (geometryChangeTimer % 5 === 0) {
        // Cambia la geometría al azar
        const randomIndex = Math.floor(Math.random() * geometries.length);
        setCurrentGeometry(geometries[randomIndex]);
      }
    }, 1000); // Cambia cada 1 segundo

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(geometryChangeInterval);
    };
  }, [geometryChangeTimer]);

  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta
      ))
  );

  return (
    <Instances
      limit={particles.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 2.5, 0]}
    >
      {currentGeometry}
      <meshStandardMaterial roughness={0.1} metalness={0} color="teal" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  );
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef();
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2);
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5));
    ref.current.position.set(
      Math.cos(t) +
        Math.sin(t * 1) / 10 +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 4
    );
  });
  return <Instance ref={ref} />;
}
