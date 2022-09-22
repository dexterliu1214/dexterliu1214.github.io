import { useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import { html } from 'htm/react'

export const FPV = () => {
    const { camera, gl } = useThree()
    return html`
    <${PointerLockControls} args=${[camera, gl.domElement]}/>
    `
}