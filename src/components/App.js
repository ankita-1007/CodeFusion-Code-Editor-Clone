import React ,{useState,useEffect}from 'react';
import Editor from './Editor'
import useLocal from '../hooks/useLocal';

function App() {
  const [html,setHtml]=useLocal('html','')
  const [css,setCss]=useLocal('css','')
  const [js,setJs]=useLocal('js','')
  const[srcDoc, setSrcDoc]=useState('')

  useEffect(()=>{
    const timeout= setTimeout(() => {
      setSrcDoc(`
      <html>
      <body> ${html} </body>
      <style> ${css} </style>
      <script> ${js}</script>
   
      </html>
     `
     )

    },250)

    return ()=> clearTimeout(timeout)
  },[html,css,js])

  

 

  return (
    <>
    <header class="header">
  <div class="logo-container">
  <img src={require('C:/Users/pc/Desktop/CodeFusion/src/components/logo.png')}  alt="logo" height="80px"/>
      {/* </img> */}
  </div>
  <h1 class="title">CodeFusion</h1>
</header>
       <div className="pane top-pane">
         <Editor 
          language="xml" 
          displayName="HTML" 
          value={html}
          onChange={setHtml}
         />
         <Editor
           language="css" 
           displayName="CSS" 
           value={css}
           onChange={setCss}
         
         />
         <Editor
           language="js" 
           displayName="JS" 
           value={js}
           onChange={setJs}
         
         
         />

       </div>
       <div className="output"> <b>OUTPUT </b></div>
       <div className="pane">
        
        <iframe 
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"

        />    
       </div>
    </>
  )
}

export default App;
