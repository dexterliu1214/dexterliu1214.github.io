import { useStore } from "../hooks/useStore.js"
import { html } from "htm/react"

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

    return html`
        <link rel="stylesheet" href="/common.css" />
        <div className="menu absolute">
        <button onClick=${() => saveWorld()}>Save</button>
        <button onClick=${() => resetWorld()}>Reset</button>
        </div>
    `
}