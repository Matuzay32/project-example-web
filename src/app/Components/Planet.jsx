import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshDistortMaterial, Shadow } from '@react-three/drei';
import Text from './Text';
import state from '../state';
import { Box } from '@chakra-ui/react';
import { relative } from 'path';

function Model(props) {
  const group = useRef();
  const shadow = useRef();
  const { nodes } = useGLTF('/geo.min.glb', true);
  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    group.current.position.y = t / 3;
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.005;
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.mouse[0] / 2,
      0.05
    );
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      state.mouse[1] / 4,
      0.03
    );
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial
            color="#4FD1C5"
            flatShading
            roughness={1}
            metalness={0.5}
            factor={15}
            speed={5}
          />
        </mesh>
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
      </group>
      <group position={[1.25, -0.5, 0]}></group>
      <Shadow
        ref={shadow}
        opacity={0.3}
        rotation-x={-Math.PI / 2}
        position={[0, -2.51, 0]}
      />
    </group>
  );
}
export default function Planet() {
  return (
    <Box width={'full'} minH={'100vh'} height={'100vh'} pos={'relative'}>
      <Canvas
        style={{ width: '100%', height: '100vh' }} // Ajusta el tamaño del Canvas aquí
        camera={{ position: [0, 0, 2.2] }}
      >
        <Suspense fallback={null}>
          <Model />
          <ambientLight intensity={0.7} />
          <directionalLight intensity={0.8} position={[1, 1, 1]} />
          <pointLight intensity={0.5} position={[0, 0, 5]} />
        </Suspense>
      </Canvas>
    </Box>
  );
}
