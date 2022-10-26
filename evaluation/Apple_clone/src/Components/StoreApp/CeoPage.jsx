import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function CeoPage() {
    return (
        <div>
            <Box p='50px 180px' >
                <Box color={'silver'} fontSize={'28px'} textAlign='center' display='flex' fontWeight={'700'}>
                    <Text color={'#6E6E73'}> <span style={{ color: 'black' }}>  Help is here.</span>Whenever and however you need it. </Text>
                </Box>

                <Box display={'flex'}>
                    <Box
                        backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-202208?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1658942547535')"
                        borderRadius={'25px'}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize="100%"
                        backgroundPosition=' center'
                        h='80vh'
                        w='50%'
                        m='5px'
                    >
                       <Text fontWeight={'500'} fontSize='30px' p='35px 12px' lineHeight="100%">  Shop one on one with a Specialist online.</Text>
                    </Box>


                    <Box height={'80vh'} w='50%'

                    >
                        <Box
                            backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000')"
                           
                            backgroundRepeat={"no-repeat"}
                            backgroundSize="100%"
                            backgroundPosition='  center'
                            borderRadius={'25px'}
                            w='100%'
                            m='5px'
                            h='40vh'
                        >
                            <Text fontSize='25px' p='55px 18px'  lineHeight="100%" > 
                            Get to know your new device with a free Personal Session.</Text>
                        </Box>
                        <Box
                            backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000')"
                            borderRadius={'25px'}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize="100%"
                            backgroundPosition='  center'
                            h='39vh'
                            w='100%'
                            m='5px'
                        >
                            <Text fontSize='25px' p='75px 20px' w='50%' lineHeight="100%" > 
                            Service and support. We're here to help.</Text> </Box>
                    </Box>

                </Box>

            </Box>
        </div>
    );
}

export default CeoPage;