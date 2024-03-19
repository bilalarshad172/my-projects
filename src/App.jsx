 import React from 'react'
 let array= ["user1","user2","user3","user4","user5"]
 let array2 = ["user3","user4","user5","user6","user7"]
 let array3 = []
 
  const App = () => {
   return (
    <>
    {array3.map((data)=>{
      return(
        <>
        {array.value===array2.value?<h1>{data}</h1>:}
        </>
      )
    })}
    
     </>
   )
 }
 
 export default App