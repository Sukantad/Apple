import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function Iphone12() {
    return (
        <div>
            <Box
            backgroundImage="url('https://www.apple.com/v/home/at/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_medium_2x.jpg')"
            backgroundRepeat={"no-repeat"}
            backgroundSize="100%"
            backgroundPosition='bottom 10%  center'
            h='100vh'
            w='100%'
            >
                <Box  w='30%' pt='10px' m='auto' textAlign={'center'}> 
                    <Text color={'white'} fontSize='5xl' fontWeight={'500'} > iPhone 14 Pro</Text>
                    <Text color={'white'} fontSize='3xl' fontWeight={'400'}> Pro. Beyond.</Text>
                    <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='500' fontSize={'21px'} w='250px' m='auto' display={'flex'} textAlign='center' justifyContent='space-between'>
                    <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                    <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Buy <RiArrowRightSLine /> </Flex>
                         </Box>
                </Box>

            </Box>
        </div>
    );
}

export default Iphone12;