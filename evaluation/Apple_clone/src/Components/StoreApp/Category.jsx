import { Box, getDividerStyles, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchCategory } from '../../Redux/action';

function Category() {
    // const [data,setData]=useState([]);
    // const getData=()=>{
    //     fetch('http://localhost:3000/Category')
    // .then((res) => res.json())  
    //  .then((res)=>setData(res))
    // }
    // getData();
    const dispatch=useDispatch();
    const {loading, error, Category}=useSelector((state)=>state.CategoryState);
    useEffect(()=>{
        dispatch(FetchCategory());
    },[])
    return (
        <div>
            <Box display={'flex'} alignItems='center' justifyContent={'center'} textAlign='center'> 
            {
              
              Category.map((ele)=>(
                <Box > 
             <Img w='140px' src={ele.image} alt='ele.id'/>
          <Text pt='10px'> {ele.title} </Text>  </Box>
            ))
            }</Box>
           
        </div>
    );
}

export default Category;