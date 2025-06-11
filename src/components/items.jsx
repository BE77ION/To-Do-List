import './items.css'
function Items({items,handleDelete,hadndleEdit}){
    return(
<> {items.map((item,index)=>(
    <div  key={index} className="items">
      <p className='item_no' >{item}</p>  
      <div className="button-group">
      <button onClick={()=>handleDelete(index)}>DELETE</button>
      <button onClick={()=>hadndleEdit(index)}>EDIT</button>
      </div>
</div>

))}


</>
    )
} 
export default Items