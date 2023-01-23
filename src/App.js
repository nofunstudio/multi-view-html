import { forwardRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PerspectiveCamera, CameraShake, PivotControls, Environment, Center } from '@react-three/drei'
import useRefs from 'react-use-refs'
import { Soda, Apple, Duck, Candy, Flash, Target } from './Models'

export function App() {
  const [ref, view1, view2, view3, view4, view5, view6] = useRefs()
  return (
    <div ref={ref} className="container">
      <div className="text">
        Work on <Link ref={view6}>version 8</Link> has begun 3 Sep 2021.
        <div ref={view1} className="view translateX" />
        This is perhaps the biggest update to Fiber yet.
        <div ref={view2} className="view scale" style={{ height: 300 }} />
        We've tried our best to keep breaking-changes to a minimum,
        <div ref={view3} className="view translateY" />
        they mostly affect rarely used api's like attach.
        <div ref={view4} className="view scale" />
        This release brings a ton of performance related fixes,
        <div ref={view5} className="view translateX" />
        but also includes some new and ground-breaking features.
      </div>
      <Canvas eventSource={ref} className="canvas">
        <View track={view1}>
          <Common color="lightpink" />
          <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2}>
            <Soda scale={6} position={[0, -1.6, 0]} />
          </PivotControls>
          <OrbitControls makeDefault />
        </View>
        <View track={view2}>
          <Common color="lightblue" />
          <Apple position={[0, -1, 0]} scale={14} />
          <OrbitControls makeDefault />
        </View>
        <View track={view3}>
          <Common color="lightgreen" />
          <Duck scale={2} position={[0, -1.6, 0]} />
          <CameraShake intensity={2} />
        </View>
        <View track={view4}>
          <Common color="peachpuff" />
          <Candy scale={3} />
        </View>
        <View track={view5}>
          <Common color="orange" />
          <Flash scale={3} />
        </View>
        <View track={view6}>
          <Common color="hotpink" />
          <Center>
            <Target scale={1.5} />
          </Center>
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

const Link = forwardRef(({ children }, fRef) => {
  const [hovered, hover] = useState(false)
  return (
    <a
      href="https://github.com/pmndrs/react-three-fiber/releases/tag/v8.0.0"
      onPointerMove={(e) => {
        const x = e.nativeEvent.offsetX
        const y = e.nativeEvent.offsetY - e.target.offsetTop - 100
        fRef.current.style.transform = `translate3d(${x}px,${y}px,0)`
      }}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      {children}
      <div ref={fRef} className="view" style={{ position: 'absolute', width: 200, display: hovered ? 'block' : 'none' }} />
    </a>
  )
})
