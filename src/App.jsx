import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RetornaNumero from './components/basicos/RetornaNumero'

export default _ =>
    <div id="app">
        <h1>Fundamentos React 2</h1>
        <RetornaNumero
            min={10}
            max={20}>
        </RetornaNumero>
        <Fragmento></Fragmento>
        <ComParametro
            titulo="Segundo texto"
            subtitulo="Terceiro Texto">
        </ComParametro>
        <Primeiro></Primeiro>
    </div>