import React, { useState } from 'react'
import { useCart } from 'react-use-cart'


function ProductCart(props) {
  const [text, setText] = useState("AddToCart")
  const { addItem } = useCart();

  // props.
   const handleClick=(item)=>{
    addItem(item)

    if(text==="AddToCart")
    {
      setText("Added")
      props.setItemCount(props.itemCount + 1);
    }
    else{
      setText("AddToCart")
      props.setItemCount(Math.max(props.itemCount - 1, 0));
    }
   }
   
  return (
    <div className="card mx-3 my-3" style={{ width: "18rem" }}>
    <img src={props.img} className="card-img-top" alt="dany web" />
    <div className="card-body">
      <h5 className="card-title text-center">{props.title}</h5>
      <h5 className="card-title text-center">{props.price}</h5>
      <div className='text-center'>
        <p className="card-text">{props.desc}</p>
        <button type='button' className="btn btn-primary"
            onClick={()=>handleClick(props.item)
            
            }
            >{text}</button>
      </div>

      
    </div>
  </div>
  )
}

export default ProductCart