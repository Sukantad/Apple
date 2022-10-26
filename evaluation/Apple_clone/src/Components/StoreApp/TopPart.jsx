import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

function TopPart() {
    return (
        <div>
            <Box  display={'flex'}   p='80px 5%' justifyContent='space-around' justifyItems={'flex-start'} >
                <Box color={'silver'}fontSize={'45px'} display='flex' fontWeight={'semibold'} m='0px' w='60%'>
                    <Text color={'#6F6E72'} lineHeight="110%"> <span style={{color:'black'}}>  Store.</span> The best way to buy the products you love. </Text>
                </Box>
                 
                <Box display={'flex'} alignItems='center'>
                    <Box> <Img w='50px' borderRadius={'50%'} pr='10px' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202208_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1659043294002' /> </Box>
                    <Box>
                        <Text> Need shopping help? </Text>
                        <Text color={'#3083D5'}> Ask a Specialist</Text>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default TopPart;