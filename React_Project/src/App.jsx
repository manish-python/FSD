// import React from 'react'
// import Students from './components/Students'

// const App = () => {
//   return (
//     <div>
//       <h1 style={{color:'black'}}>Student Record</h1>
//       <div style={{display:'flex',gap:'15px'}}>
//         <Students name="Rohit" roll="Roll NO - 101" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGWYbVvDTBjHOX-by-rO1HbQdM19aROs7jaQgfjsko4sA-Tv6f2t15jJB&s=10"/>
//         <br />
//         <Students name="Sohan" roll="Roll No - 102" img="https://img.magnific.com/free-photo/3d-cartoon-character_23-2151021986.jpg?semt=ais_hybrid&w=740&q=80"/>
//       </div>
//     </div>
//   )
// }

// export default App

import {BrowserRouter,link,Routes,Route} from 'react-router-dom'

function  Home(){
  return <h1>This is my Home Page</h1>
  
}
function  About(){
  return <h1>This is my About Page</h1>
  
}
function  Phone(){
  return <h1>This is my Phone Page</h1>

}

const App = () => {
  return (

    <BrowserRouter>
      <nav>
        <link to="/">Home</link>  {" "}
        <link to="/about">About</link>  {" "}
        <link to="/phone">Phone</link>  {" "}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/phone" element={<Phone/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
