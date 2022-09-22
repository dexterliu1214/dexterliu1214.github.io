import { useState, useEffect } from 'react'
import { useStore } from '../hooks/useStore.js'
import { html } from 'htm/react'
import { useKeyboard } from '../hooks/useKeyboard.js'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
        } 
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if(pressedTexture) {
            console.log(pressedTexture)
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])
    const images = {
        dirt:'../images/dirt.jpg',
        grass:'../images/grass.jpg',
        glass:'../images/glass.png',
        wood:'../images/wood.png',
        log:'../images/log.jpg',
    }
    return visible && html`
        <div className="absolute centered texture-selector">
        ${Object.entries(images).map(([k, src]) => {
            return html`<img
                key=${k}
                src=${src}
                alt=${k}
                className=${k === activeTexture ? 'active' : ''}
            />`
        })}
        </div>
    `
}