import React from 'react';
import { useCart } from 'react-use-cart';

function AddToCart() {
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    console.log("addTocard wali",items)

    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <>
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className="col-12">
                    <div className="badge bg-primary text-wrap" style={{width: "8rem"}}>
                            total no of item: {totalUniqueItems} <br></br>
                            total item: {totalItems}
                       
                     </div>
                        
                        <table class="table table-bordered table-hover table-responsive">
                            <thead class="table-dark">
                                <tr>
                                    <td>Image</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((item, index) => {
                                        return (<tr key={index}>
                                            <td>{<img src={item.thumbnail} style={{ width: '200px' }} />}</td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className='btn btn-outline-warning mx-3' type='button' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    -
                                                </button>
                                                {item.quantity}
                                                <button className='btn btn-outline-warning mx-3' type='button' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    +
                                                </button>
                                                <button className='btn btn-outline-danger mx-3' type='button' onClick={() => removeItem(item.id)}>
                                                    delete
                                                </button>
                                            </td>
                                        </tr>

                                        )
                                    })
                                }
                           
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>


        </>

    )
}

export default AddToCart