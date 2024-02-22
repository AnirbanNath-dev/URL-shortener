
import { useState } from 'react'
import './App.css'

function App() {

  const [url , setUrl] = useState('')
  const [link , setLink] = useState('')

  const handler = async ()=>{

    const data  = await fetch('http://localhost:3000/api/' , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        url : url
      })
    })
    const json = await data.json()


    setUrl('')
    setLink(`http://localhost:3000/${json.id}`)
  }

  return (
    <>
    <input value={url} onChange={(e)=> setUrl(e.target.value)} style={{padding : '10px' , fontSize : '20px'}} type="text" placeholder='Enter the link...'/>
    <br/>
    <br/>
    <button onClick={handler}>Generate</button>
    <h2>{link}</h2>
    </>
  )
}

export default App
