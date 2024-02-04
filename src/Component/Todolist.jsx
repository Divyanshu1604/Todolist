import React, { useState } from 'react'

function Todolist() {
    
    const[activity, setActivity]= useState("")
    const[listData, setlistData]=useState([])

function addActivity(){
//    setlistData([...listData, activity])
//    console.log(listData)
     
      setlistData((listData)=>{
        const updatedList=[...listData, activity]
        console.log(updatedList)
        setActivity('');  // this is for clear after add activity.
        return updatedList
      })
}

function removeActivity(i){
    const updatedListData = listData.filter((elem,id)=>{
        return i!= id;
    })
    setlistData(updatedListData)
}

function removeall (){
    setlistData([])
}

  return (
    <>
      <div className='container'>
        <div className='header'>
        TO-DO LIST
        </div>
        <input type='text' 
        placeholder='Add Activity' 
        value={activity} 
        onChange={(e)=>setActivity(e.target.value)}/>
        <button className='add-btn' onClick={addActivity}>Add</button>
        <p className='Listheading'>Here is your List :{")"} </p>
        {listData != [] && listData.map((data,i)=>{
            return(
                <> 
                <p key={i}>
                   <div className='listData'>{data}</div>
                   <div className='button-position'> <button onClick={()=> removeActivity(i)}>Remove</button></div>
                </p>
                </>
                
            )
        })} 
        {listData.length >=1 &&
         <button onClick={removeall}>Remove all</button>}

      </div>
    </>
  )
}

export default Todolist
