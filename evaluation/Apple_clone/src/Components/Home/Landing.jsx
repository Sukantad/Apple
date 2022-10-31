import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function Landing() {

    return (
        <div>

            <Box
                backgroundImage="url('https://www.apple.com/v/home/at/images/heroes/ipad/hero_ipad_order__752kv3kpn2qi_small_2x.jpg')"
                backgroundRepeat={"no-repeat"}
                backgroundSize="105%"
                backgroundPosition='top 100%  center'
                h='100vh'
                w='100%'
                color={'black'}
               
            >

                <Box w='80%' textAlign={'center'} pt='200px' pl='400px' m='auto' >
                    <Text color={'#1D1D1F'} fontSize='6xl' fontWeight={'500'}> iPad</Text>
                    <Text fontSize='2xl' color={'#1D1D1F'}> Lovable. Drawable. Magical.</Text>
                    <Text pt='10px' color={'#6E6E73'} fontWeight='400' fontSize={'21px'}> Available starting 10.26</Text>
                    <Box alignItems={'center'} color={'#3485D6'} fontWeight='500' fontSize={'21px'} w='290px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'> <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'}> Learn more <RiArrowRightSLine /> </Flex> <Text _hover={{ textDecoration: 'underLine' }} display={'flex'} alignItems='center' > Order now <RiArrowRightSLine /> </Text></Box>
                </Box>
            </Box>


        </div>
    );
}

export default Landing;