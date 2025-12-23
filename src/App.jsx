import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import word from "./assets/word.png";
import Amazon from "./assets/amazon.png"
// import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  
// const navigate=useNavigate();
const tools=[{name:"word_to_pdf converter" ,
      description: (
  <>
        Word-to-PDF Converter is a tool that allows users to easily convert 
        Word documents into high-quality PDF files while preserving 
        the original formatting, layout, and content. 
        It provides a fast, secure, and user-friendly way to generate shareable and print-ready PDFs.
      </>),image:word,link:"https://word-to-pdf-converter-ten.vercel.app/"},
      {name:"Amazon seller profit calculator" , description:(
        <>
        Amazon Seller Profit Cost Calculator is a tool that helps sellers estimate their
         actual profit by calculating all Amazon-related costs such as product cost, Amazon fees,
          shipping, taxes, and ads. It gives a clear breakdown of total cost, profit, and profit margin
          before listing or selling a product.</>
      ),
      image:Amazon,link:"https://wheat-goose-528320.hostingersite.com/"},
     {name:"Amazon seller profit calculator" , description:(
        <>
        Amazon Seller Profit Cost Calculator is a tool that helps sellers estimate their
         actual profit by calculating all Amazon-related costs such as product cost, Amazon fees,
          shipping, taxes, and ads. It gives a clear breakdown of total cost, profit, and profit margin
          before listing or selling a product.</>
      ),
      image:Amazon,link:"https://wheat-goose-528320.hostingersite.com/"},
    
    {name:"AI writing tools" ,description:(
      <>
      AI writing tools are intelligent software solutions designed to help users create high-quality <br/>
      written content quickly and efficiently. They use artificial intelligence and natural language<br/>
       processing to generate, rewrite, summarize, and enhance text while maintaining clarity, tone, <br/>
       and context. These tools are widely used for writing blogs, emails, social media posts, marketing copy,<br/>
        and professional documents, helping individuals and businesses save time, 
      improve productivity, and maintain consistent content quality.
      </>
    )}
    ]
  return (
    <>
     <h2>Tools</h2>
     <div className='head'>
     
      {tools.map((item,index)=>(
        <div key={index} className='card'   onClick={() =>
    window.open(
      
      item.link,"_blank")
  }
>
           <img src={item.image}/>
      <p className='title'>{item.name}</p>
      <p className='description'>{item.description}</p>
      
     </div>
     
    ))
  }
  </div>
    </>
  )
}

export default App
