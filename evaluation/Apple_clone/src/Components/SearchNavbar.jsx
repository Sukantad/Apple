import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from '../Redux/action';
import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';


function SearchNavbar() {
    const dispatch=useDispatch();
    const BackToOriginal=()=>{
    dispatch(SearchBar())
    }
    return (
        <div>
            <Flex bg='#1A1A1A' h='50px'> 
          <Flex alignItems={'center'} w='50%' m='auto'> 
          <BiSearch size={'18px'}  color='#67676C'/>
            <Input pl='10px' _placeholder={{color:'#67676C'}} color='white' fontSize={'18px'}
             type={'text'} variant='unstyled' placeholder='Search apple.com'/>
           <Text onClick={BackToOriginal} _hover={{cursor:'pointer'}}> <IoClose color='#67676C' size={'27px'}/></Text> 
            </Flex>
            </Flex>
        </div>
    );
}

export default SearchNavbar;