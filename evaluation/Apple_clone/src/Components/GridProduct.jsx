import { Box, Flex, Text, Grid, GridItem, Img } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsApple } from 'react-icons/bs';

function GridProduct() {
    return (
        <div>
            <Grid templateColumns='repeat(2, 1fr)' gap={3} mt='20px'>
                <GridItem
                    backgroundImage="url('https://www.apple.com/v/home/at/images/promos/apple-watch-ultra/promo_apple_watch_ultra__gnsqulvdc4a6_large_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="160%"
                    backgroundPosition='left 50%  center'
                    h='80vh'
                    w='100%'
                >
                    <Box w='50%' m='auto'>
                        <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'}>

                            <BsApple size={'30px'} /> <Text fontWeight={'bold'} fontSize={'32px'}>WATCH </Text>

                        </Box>
                        <Text mt='-13px' justifyContent={'center'} display='flex' fontWeight={'500'} color={'orange'}>
                            ULTRA
                        </Text>
                        <Text textAlign={'center'} fontWeight='500' fontSize={'21px'}> Adventure awaits</Text>
                        <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='220px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Buy <RiArrowRightSLine /> </Flex>
                        </Box></Box>

                </GridItem>
                <GridItem backgroundImage="url('https://www.apple.com/v/home/at/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_large_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="150%"
                    backgroundPosition='bottom 10%  center'
                    h='80vh'
                    w='100%'

                >
                    <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'} bg='black' color='white' >

                        <BsApple size={'30px'} /> <Text fontWeight={'bold'} fontSize={'32px'}>WATCH </Text>

                    </Box>
                    <Text justifyContent={'center'} display='flex' mt='-13px' fontWeight={'400'} color={'RED'}>
                        SERIES 8
                    </Text>
                    <Text textAlign={'center'} color='white' fontWeight='500' fontSize={'21px'}> A healthy leap a head.</Text>
                    <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='220px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Buy <RiArrowRightSLine /> </Flex>
                    </Box>

                </GridItem>
                <GridItem backgroundImage="url('https://www.apple.com/v/home/at/images/promos/ipad-pro/promo_ipadpro_order__upw04aj7i2qe_large_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="175%"
                    backgroundPosition='bottom 10%  center'
                    h='80vh'
                    w='100%'

                >
                    <Box pt='20px'>
                        <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'} bg='black' color='white' >

                            <Text fontWeight={'bold'} fontSize={'36px'}>iPad Pro </Text>

                        </Box>
                        <Text justifyContent={'center'} display='flex' mt='-13px' fontWeight={'400'} color={'white'} fontSize='21px'>
                            Supercharged by <Img ml='10px' w='35px' src='https://www.apple.com/v/home/at/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_medium_2x.png' />

                        </Text>
                        <Text textAlign={'center'} color='#6E6E73' fontWeight='400' fontSize={'17px'}> Available starting 10.26</Text>
                        <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='250px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Order now <RiArrowRightSLine /> </Flex>
                        </Box></Box>

                </GridItem>
                <GridItem backgroundImage="url('https://www.apple.com/v/home/at/images/promos/apple-tv-4k/promo_tv4k__d33vaocbii82_large_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="180%"
                    backgroundPosition='bottom 10%  center'
                    h='80vh'
                    w='100%'

                >
                    <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'} bg='#F5F5F7' color='white' >

                        <Img src="https://www.apple.com/v/home/at/images/logos/apple-tv-4k/promo_tv4k_logo__5m5umvk10duu_large.png" />

                    </Box>
                    <Text justifyContent={'center'} display='flex' mt='-13px' fontWeight={'400'} color={'black'} fontSize='21px'>
                        The Apple experience.
                    </Text>
                    <Text justifyContent={'center'} pt='10px' display='flex' mt='-13px' fontWeight={'400'} color={'black'} fontSize='21px'>
                        Cinematic in every sense.
                    </Text>
                    <Text textAlign={'center'} color='#6E6E73' fontWeight='400' fontSize={'17px'}> Available starting 11.4</Text>
                    <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='250px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                        <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Order now <RiArrowRightSLine /> </Flex>
                    </Box>

                </GridItem>

                <GridItem backgroundImage="url('https://www.apple.com/v/home/at/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_medium_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="105%"
                    backgroundPosition='top 90%  center'
                    h='80vh'
                    w='100%'

                >
                    <Box pt='20px'>
                        <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'}  color='white' >

                            <Text fontWeight={'bold'} fontSize={'36px'}>AirPods Pro </Text>

                        </Box>
                        <Text justifyContent={'center'} display='flex' mt='-13px' fontWeight={'400'} color={'white'} fontSize='21px'>
                            Rebuilt from the sould up.

                        </Text>
                        <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='220px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Buy <RiArrowRightSLine /> </Flex>
                        </Box></Box>

                </GridItem> 

                <GridItem
                    backgroundImage="url('https://www.apple.com/v/home/at/images/promos/apple-card/tile__cauwwcyyn9hy_medium_2x.jpg')"
                    backgroundRepeat={"no-repeat"}
                    backgroundSize="90%"
                    backgroundPosition='left 50%  center'
                    h='80vh'
                    w='100%'
                >
                    <Box w='40%' m='auto'>
                        <Box p='12px' display={'flex'} justifyContent='center' alignItems={'center'}>

                            <BsApple size={'30px'} /> <Text fontWeight={'bold'} fontSize={'35px'}>Card </Text>

                        </Box>
                        
                        <Text  textAlign={'center'} fontWeight='500' fontSize={'21px'}> Get up to 3% Daily Cash back with every purchase.</Text>
                        <Box pt='12px' alignItems={'center'} color={'#3485D6'} fontWeight='400' fontSize={'18px'} w='250px' m='auto' display={'flex'} textAlign='center' justifyContent='space-around'>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Learn more <RiArrowRightSLine /> </Flex>
                            <Flex _hover={{ textDecoration: 'underLine' }} alignItems={'center'} justifyContent='center'> Apply now <RiArrowRightSLine /> </Flex>
                        </Box></Box>

                </GridItem>

            </Grid>

        </div>
    );
}

export default GridProduct;