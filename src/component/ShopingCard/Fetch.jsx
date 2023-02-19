import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// import Table from './Table';
import axious from 'axios';
import Product from '../Other/Product';

function Fetch() {
    const [userData, setUserData] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    // console.log("ya wala hyy",userData)
    useEffect(()=>{
        fetchData();
        // console.log(fetchData) 
        },[]);

    const fetchData = async () => {

        try {
        const response = await axious.get('https://dummyjson.com/products')
        // const data = await response.json();
        setUserData(response.data.products)
        console.log(response.data.products)
        } catch(error){
        console.log(error)
    }
    };

    
    

    return (
        <>
        console.console.log("jnnnnkkkk",userData);
        {/* <Table 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userData={userData}
        /> */}
        
        <Product
        userData ={userData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />

        {/* <MainBody 
        userData={userData}
        /> */}
        
        </>
    )
}

export default Fetch
 