import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function Iphone14() {
    return (
        <div>
            <Box
                backgroundImage="url('https://www.apple.com/v/home/at/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_small_2x.jpg')"
                backgroundRepeat={"no-repeat"}
                backgroundSize="70%"
                backgroundPosition='bottom 10%  center'
                h='100vh'
                w='100%'
            >
                <Box w='30%' pt='30px' m='auto' textAlign={'center'}>
                    <Text color={'black'} fontSize='5xl' fontWeight={'600'} > iPhone 14 </Text>
                    <Text color={'black'} fontSize='3xl' fontWeight={'400'}> Big and Bigger.</Text>
                    <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='500' fontSize={'21px'} w='250px' m='auto' display={'flex'} textAlign='center' justifyContent='space-between'>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Buy <RiArrowRightSLine /> </Flex>
                    </Box>
                </Box>

            </Box>

        </div>
    );
}

export default Iphone14;