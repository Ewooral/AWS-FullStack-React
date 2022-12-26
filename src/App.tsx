import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hi, How are you doing?
      <a href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/username/repository">
        <img src="https://oneclick.amplifyapp.com/button.svg" alt="Deploy to Amplify Console" />
      </a>
    </div>
  )
}

export default App
