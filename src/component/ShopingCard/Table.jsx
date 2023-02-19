import React from 'react'
import AllButton from './AllButton';
export default function Table(props) {
    const pageSize=10;
    const totalPage = Math.ceil(props.userData.length/pageSize);
    const currentData = props.userData.slice(
        (props.currentPage - 1) * pageSize, props.currentPage * pageSize 
    );
  return (
    <div className="container">
            <h1 className='text-center'> Fetch data</h1>
            <table className='table table-bordered table-hover table-responsive'>
                <thead className='table-dark'>
                    <tr>
                        <td>Image</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={value.images[4]} alt="" /></td>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.description}</td>
                                <td>{value.price}</td>
                            </tr>
                        )
                            
                            
                        })
                    }

                </tbody>

            </table>
            <div>
                <AllButton
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                pageSize={pageSize}
                totalPage={totalPage}
                />
            </div>

        </div>
        
  )
}
