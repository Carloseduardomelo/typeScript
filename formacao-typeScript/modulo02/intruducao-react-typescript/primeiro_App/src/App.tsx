import { useState } from 'react'
import Card from './components/card/card'
import { StyleApp } from './styled'
import Inputtela from './components/input/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyleApp>
      <Inputtela />
    </StyleApp>
  )
}

export default App
