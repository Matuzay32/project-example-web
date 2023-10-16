import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Bounds,
  Edges,
  Html,
  PresentationControls,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import { LayerMaterial, Depth, Fresnel } from 'lamina';
import { useControls } from 'leva';
import {
  Box,
  Text,
  Center,
  Icon,
  Stack,
  Heading,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';

export const Cursor3d = () => {
  // const { xRotation, yRotation, zRotation, gradient } = useControls({
  //   xRotation: { value: -1.1, min: -Math.PI, max: Math.PI },
  //   yRotation: { value: -1.7, min: -Math.PI, max: Math.PI },
  //   zRotation: { value: Math.PI / 2, min: -Math.PI, max: Math.PI },
  //   gradient: { value: 0.7, min: 0, max: 1 },
  // });

  const [controlValues, setControlValues] = useState({
    xRotation: -1.1,
    yRotation: -1.7,
    zRotation: Math.PI / 2,
    gradient: 0.13,
  });

  const { xRotation, yRotation, zRotation, gradient } = controlValues;
  return (
    <Canvas
      orthographic
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 10],
        rotation: [
          0,
          0,
          Math.PI,
        ] /* Ajusta la rotación para apuntar hacia abajo */,
        zoom: 300,
      }}
    >
      <group rotation={[xRotation, yRotation, zRotation]}>
        <Bounds fit clip observe margin={3.25}>
          {/* <Cursor scale={[0.5, 1, 0.5]} gradient={gradient} */}
          <PresentationControls
            config={{ mass: 2, tension: 300 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Cursor scale={[0.5, 1, 0.5]} gradient={gradient} />
          </PresentationControls>
        </Bounds>
      </group>
    </Canvas>
  );
};

function Cursor(props) {
  const ref = useRef();
  const { nodes } = useGLTF('/cursor.glb');

  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2);
    const cos = Math.cos(state.clock.elapsedTime / 2);
    ref.current.layers[0].origin.set(cos / 2, 0, 0);
    ref.current.layers[1].origin.set(cos, sin, cos);
    ref.current.layers[2].origin.set(sin, cos, sin);
    ref.current.layers[3].origin.set(cos, sin, cos);
  });

  return (
    <mesh {...props} geometry={nodes.Cube.geometry}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth
          colorA="#285E61"
          colorB="#285E61"
          alpha={1}
          mode="normal"
          near={0.5 * props.gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="#81E6D9"
          colorB="#38B2AC"
          alpha={1}
          mode="add"
          near={2 * props.gradient}
          far={2}
          origin={[0, 1, 1]}
        />
        <Depth
          colorA="green"
          colorB="#234E52"
          alpha={1}
          mode="add"
          near={3 * props.gradient}
          far={3}
          origin={[0, 1, -1]}
        />
        <Depth
          colorA="white"
          colorB="red"
          alpha={1}
          mode="overlay"
          near={1.5 * props.gradient}
          far={1.5}
          origin={[1, -1, -1]}
        />
        <Fresnel
          mode="add"
          color="white"
          intensity={0.5}
          power={1.5}
          bias={0.05}
        />
      </LayerMaterial>
      <Edges color="white" />
    </mesh>
  );
}
export default Cursor3d;
