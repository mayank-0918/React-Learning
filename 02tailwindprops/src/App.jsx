import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">
        Hello world!
      </h1>
      <Card naam="johny" btn="conecting"/>
      <Card naam="Jammu" btn="frind"/>


    </>
  )
}

export default App
