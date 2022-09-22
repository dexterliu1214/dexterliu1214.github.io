import * as ReactDOM from "react-dom/client"
import React from 'react'
import reactToWebcomponent from 'react-to-webcomponent';
import { Canvas } from '@react-three/fiber'
import { html } from 'htm/react'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Box from "./components/Box.js"
import Ground from "./components/Ground.js"
import Player from "./components/Player.js"
import { FPV } from "./components/FPV.js"
import { Cubes } from "./components/Cubes.js"
import { TextureSelector } from "./components/TextureSelector.js";
import { Menu } from "./components/Menu.js";

const App = () => {
    return html`
    <${Canvas}>
        <${Sky} sunPosition=${[100, 100, 20]}/>
        <ambientLight intensity=${0.5}/>
        <${FPV}/>
        <${Physics}>
            <${Player} />
            <${Cubes} />
            <${Ground}/>
            <${Box}/>
        <//>
    <//>
    <div className='absolute centered cursor'>+</div>
    <${TextureSelector}/>
    <${Menu}/>
    `
}

customElements.define("my-app", reactToWebcomponent(App, React, ReactDOM));