
import {  usePlane } from '@react-three/cannon'
import { html } from 'htm/react'
import { groundTexture } from "../textures.js"
import { useStore } from "../hooks/useStore.js"

export default () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2,0,0], position:[0,-0.5,0]}))

    const [addCube] = useStore((state) => [state.addCube])

    groundTexture.repeat.set(100,100)

    return html` 
    <mesh ref=${ref}
        onClick=${(e) => { 
            e.stopPropagation()
            const [x,y,z] = Object.values(e.point).map(p => Math.ceil(p))
            addCube(x,y,z)
        }}
    >
        <planeGeometry attach='geometry' args=${[100, 100]}/>
        <meshStandardMaterial attach='material' map=${groundTexture} />
    </mesh>
    ` 
}