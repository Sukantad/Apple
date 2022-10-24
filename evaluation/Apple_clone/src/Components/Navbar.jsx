import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BsApple ,BsBag} from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

function Navbar() {
    return (
        <div>
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
             <BiSearch size={'15px'} color='#D6D6D6'/>
             <BsBag size={'15px'} color='#D6D6D6'/>
           </Flex>
            
        </div>
    );
}

export default Navbar;