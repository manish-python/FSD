import React from 'react'

const Students = (props) => {
  return (
    <div>
      <div style={{backgroundColor:'white',border:'4px solid black',height:'400px', width:'400px', margin:'auto', textAlign:'center',color:'black'}}>
        <h2 style={{color:'black'}}>{props.name}</h2>
        <img src={props.img} alt="Little Krishna" height={'200px'} width={'200px'} border={'4px solid black'} />
        <h3>{props.roll}</h3>
        <h3>Class - BTECH CSE</h3>
      </div>
      <br />
      {/* <div style={{backgroundColor:'brown',border:'5px solid white',height:'400px', width:'400px', margin:'auto', textAlign:'center',color:'yellow'}}>
        <h2>Naruto</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGWYbVvDTBjHOX-by-rO1HbQdM19aROs7jaQgfjsko4sA-Tv6f2t15jJB&s=10" alt="Little Krishna" height={'200px'} width={'200px'} border={'4px solid white'} />
        <h3>ROll Number</h3>
        <h3>Class - BTECH CSE</h3> */}
      {/* </div> */}
    </div>
  )
}

export default Students