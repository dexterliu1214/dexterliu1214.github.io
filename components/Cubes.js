import { useStore } from '../hooks/useStore.js'
import { html } from 'htm/react'
import { Cube } from '../components/Cube.js'

export const Cubes = () => {
    const [cubes] = useStore((state) => [
        state.cubes
    ])

    return cubes.map(({key, pos, texture}) => {
        return html`
            <${Cube} key=${key} position=${pos} texture=${texture}/>
        `
    }) 
}