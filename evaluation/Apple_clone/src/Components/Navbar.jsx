import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BsApple ,BsBag} from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../Redux/action';
import SearchNavbar from './Home Page/SearchNavbar';

function Navbar() {
  const {Search}=useSelector((state)=>state.CategoryState);
console.log(Search,'search')
  const dispatch=useDispatch();
  const Change=()=>{
    dispatch(SearchBar(true))
  }
 
    return (
        <div>
          {
            Search?<SearchNavbar/>:
          
           <Flex zIndex={1} fontSize={'13px'} bg='#323232' h='50px' w='100%' color={'#AEAEAE'} p='0px 190px' justifyContent={'space-between'} alignItems={'center'}>
             <BsApple size={'15px'} color='#D6D6D6'  />
             <Text> Store</Text>
             <Text> Mac</Text>
             <Text> iPad</Text>
             <Text> iPhone</Text>
             <Text> Watch </Text>
             <Text> AirPods</Text>
             <Text> TV & Home</Text>
             <Text> Only on Apple</Text>
             <Text> Accessories</Text>
             <Text> Support</Text>
            <Text onClick={Change} _hover={{cursor:'pointer'}}>  <BiSearch size={'18px'}  color='#D6D6D6'/></Text>
             <BsBag size={'15px'} color='#D6D6D6'/>
           </Flex>
}
        </div>
    );
}

export default Navbar;