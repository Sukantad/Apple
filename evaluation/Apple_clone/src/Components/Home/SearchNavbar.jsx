import { Box, Button, Flex, Img, Input, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  SearchBar } from '../../Redux/action';
import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { useEffect } from 'react';
import { Recomendation } from '../../Recomendation/action';


function SearchNavbar() {
    const ref = useRef(null)

    const [data, setData] = useState([])
    const [searchVal, setSearchVal] = useState("");
    const [hiddenDiv, setHiddenDiv] = useState(true)

    const { Search } = useSelector((state) => state.CategoryState);
     const { RecomendationArray  } = useSelector((state) => state.RecomendationState);
    console.log(RecomendationArray,'dekh lu')
    console.log(data, "e state hai")
    const dispatch = useDispatch();
    const BackToOriginal = () => {
        dispatch(SearchBar())
    }

//   const url="http://localhost:4000/phones"
//     useEffect(()=>{
//         fetchData(searchVal)
//       },[searchVal])
      
//       const fetchData=(searchVal)=>{
//         fetch(`${url}?_limit=5&q=${searchVal}`)
//         .then((res)=>res.json())
//         .then((res)=>{
//           setData(res) 
//           console.log(res, " search input data after fetched ");
//         })
//       }
    useEffect(() => {
        setHiddenDiv(true)
        dispatch(Recomendation(searchVal))
     console.log(searchVal,'test for')
    },[searchVal])

    const debounce = (fn, timeout) => {
        let timerid;
        return () => {
            clearTimeout(timerid)
            timerid = setTimeout(() => {
                fn()
            }, timeout);
        }
    }
    const handleinput = debounce(() => {
        const val = ref.current.value
        console.log( val);
        setHiddenDiv(true)
         setSearchVal(val)
    }, 500)

    window.addEventListener("click", (e) => {
        console.log(e.target.id,);
        if (e.target.id !== "inputBox") {
            setHiddenDiv(false)
        }
    })

    return (
        <div>
            <Flex bg='#1A1A1A' h='50px' pos='fixed' w='100%'>
                <Flex alignItems={'center'} w='50%' m='auto'>
                    <BiSearch size={'18px'} color='#67676C' />
                    <Input ref={ref} id='inputBox' onChange={handleinput} pl='10px' _placeholder={{ color: '#67676C' }} color='white' fontSize={'18px'}
                        type={'text'} variant='unstyled' placeholder='Search apple.com' />
                    <Text onClick={BackToOriginal} _hover={{ cursor: 'pointer' }}> <IoClose color='#67676C' size={'27px'} /></Text>
                </Flex>
            </Flex>

            {
                hiddenDiv ? <Box border={'1px solid silver'} w='50%' h='30vh' bg='white' shadow={'2xl'} borderRadius={"0px 0px 20px 20px"} m='auto' position={'absolute'} left='25%' top='50px'>
                    {
                        RecomendationArray.length!=""?
                        RecomendationArray.map((e)=>(
                           <Box display={'flex'} justifyContent="space-around">  
                           {/* <Img src={e.url}/> */}
                         <Text> {e.name} </Text> </Box>

                        ))
                        :<Box> <Img w='50%' m='auto' src='https://www.itinerantnotes.com/blog-theme/images/empty.gif'/></Box>
                    }
                    
                     </Box> : ""
            }



        </div>
    );
}

export default SearchNavbar;