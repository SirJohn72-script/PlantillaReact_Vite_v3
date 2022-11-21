import { useEffect } from 'react'
import { ThreeExperience } from './Script'

import './Scene.css'

export default function Scene() {
  const three = new ThreeExperience()

  useEffect(() => {
    three.initScene()
    return () => {
      three.cleapUp()
      console.log('first')
    }
  }, [])

  return (
    <>
      <div id="container3D" className="scene_container"></div>
    </>
  )
}
