
export default function TodoCard(props) {
    let {children, handleDelete, index, handleEdit} = props
  return (
    <li className='todoItem' >
        {children}
        <div className="actionsContainer">
            <button onClick={()=>{
                handleEdit(index)
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
                handleDelete(index)
            }}>
                 <i className="fa-solid fa-trash-can"></i>
            </button>
        
       
        </div>
  
    </li>
  )
}
