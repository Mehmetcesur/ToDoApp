import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
  return (

    <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-between', 
           border:'1px solid lightgrey',padding:'16px',marginTop:'25px',borderRadius:'5px'}} >
        
        <div>Ben ilk todoyum</div>
          <div>
             <IoMdRemoveCircleOutline className='icons' style={{marginRight:'8px'}} />
             <FaRegEdit className='icons' />
        
        
          </div>

    </div>

    
  )
}

export default Todo