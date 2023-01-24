import { forwardRef, useState, Suspense, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { View, Preload, OrbitControls, PerspectiveCamera, CameraShake, PivotControls, Environment, Center, Html, ContactShadows, Points } from '@react-three/drei'
import useRefs from 'react-use-refs'
import * as THREE from 'three'
import {
  EffectComposer,
  ChromaticAberration,
  SSAO,
  Bloom
} from "@react-three/postprocessing";
import { Soda, Apple, Duck, Candy, Flash, Target } from './Models'
import { Shoe, ParticleShoe } from './shoe';
import { MeshPhongMaterial } from 'three'


export function App() {
  const [ref, view1, view2, view3, view4, view5, view6] = useRefs()
  return (
    <div ref={ref} className="container">
      
      <div className="text">
        <div ref={view1} className="view a1" />
        
        <div ref={view2} className="view a2"  />
        
        <div ref={view3} className="view a3"  />
        
        <div ref={view4} className="view a4" />
        
        <div ref={view5} className="view a5" />
     
      </div>
      <Canvas eventSource={ref} className="canvas">
      
          
        <View track={view1}>
        <PerspectiveCamera  makeDefault fov={40} position={[0, 0, 2]} />
        <Environment preset="sunset" />
        <ParticleShoe/>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
        </View>
        
        <View track={view2}>
          <Common color="orange" />
          <Apple position={[0, -1, 0]} scale={14} />
          <OrbitControls makeDefault />
        </View>
        
        <View track={view3}>
          <Common color="#636363" />
          <Duck scale={2} position={[0, -1.6, 0]} />
          <CameraShake intensity={2} />
        </View>
        <View track={view4}>
          <Common color="#96B0F3"/>
          <Candy scale={3} />
        </View>
        <View track={view5}>
          <Common color="orange" />
          <Flash scale={3} />
        </View>
        
        <Preload all />
      </Canvas>
    </div>
  )
}

const Common = ({ color }) => (
  <>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <Environment preset="dawn" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </>
)


//took this out but saving to reference html interaction

