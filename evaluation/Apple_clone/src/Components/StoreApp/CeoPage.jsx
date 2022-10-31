import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { Img, Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaRegSmile } from 'react-icons/fa';

import { BsCreditCard } from 'react-icons/bs';

import { CiDeliveryTruck } from 'react-icons/ci';
function CeoPage() {
    const [bestselling, setBestselling] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const PreviousBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <h1 style={{ color: "black", fontSize: "45px" }}> <GrFormPrevious /> </h1>
            </div>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} display="none">
                <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}> <GrFormNext />  </h1>
            </Box>

        );
    };
    var settings = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        infinite: false,
        speed: 500,
        slidesToShow: 3.7,
        slidesToScroll: 3.7,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Box p='50px 180px' >
                <Box color={'silver'} fontSize={'28px'} textAlign='center' display='flex' fontWeight={'700'}>
                    <Text color={'#6E6E73'}> <span style={{ color: 'black' }}>  Help is here.</span>Whenever and however you need it. </Text>
                </Box>

                <Box display={'flex'} mt='30px' >
                    <Box
                        backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-202208?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1658942547535')"
                        borderRadius={'25px'}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize="100%"
                        backgroundPosition=' center'
                        h='77vh'
                        w='50%'
                        m='5px'

                        shadow='2xl'
                        _hover={{ border:'2px solid white'}}
                    >
                        <Text fontWeight={'500'} fontSize='30px' p='35px 12px' lineHeight="100%">  Shop one on one with a Specialist online.</Text>
                    </Box>


                    <Box height={'80vh'} w='50%'
                        ml='25px'
                    >
                        <Box
                            backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000')"

                            backgroundRepeat={"no-repeat"}
                            backgroundSize="110%"
                            backgroundPosition='  center'
                            borderRadius={'25px'}
                            w='100%'
                            m='5px'
                            h='37vh'
                            _hover={{ transform: "scale(1.1)", transition: "1000ms" }}
                            shadow='2xl'
                            mb='20px'
                        >
                            <Text fontSize='25px' w='80%' p='55px 28px' lineHeight="100%" >
                                Get to know your new device with a free Personal Session.</Text>
                        </Box>
                        <Box
                            backgroundImage="url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000')"
                            borderRadius={'25px'}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize="107%"
                            backgroundPosition='  center'
                            h='37vh'
                            w='100%'
                            m='5px'
                            mt='10px'
                            shadow='2xl'
                            _hover={{ transform: "scale(1.1)", transition: "1000ms" }}
                        >
                            <Text fontSize='25px' p='95px 20px' w='55%' lineHeight="100%" >
                                Service and support. We're here to help.</Text> </Box>
                    </Box>

                </Box>

                <Box mt='25px' mb='25px' fontSize={'28px'} textAlign='center' display='flex' fontWeight={'700'}>
                    <Text color={'#6E6E73'}> <span style={{ color: 'black' }}> The Apple Store difference. </span> Even more reasons to shop with us.
                    </Text>
                </Box>






            </Box>
   <Box w={{ base: '80%', md: '75%', lg: '90%' }} m="auto" className="OffSlider" >
            <Slider {...settings}>
             

                    <Box
                        m='10px'
                        h='35vh'
                        shadow={'2xl'}

                        key={Math.random()} alignItems="center" textAlign={"center"} >
                        <CiDeliveryTruck size={'60px'} color='red' />
                        <Text lineHeight={'120%'} fontWeight={"medium"} color={"black"} mt="8px" fontSize={{ base: "13px", md: "14px", lg: "25px" }}> Enjoy <span style={{ color: '#FF0053' }}> two-hour  delivery</span> from an Apple Store, <span style={{ color: '#FF0053' }}> free deivery,</span>  or <span style={{ color: '#FF0053' }}> easy pickup.</span> </Text>
                    </Box>

                    <Box
                        m='10px'
                        shadow={'2xl'}
                        h='35vh'

                        key={Math.random()} alignItems="center" textAlign={"center"} >
                        <CiDeliveryTruck size={'60px'} color='red' />
                        <Text lineHeight={'120%'} fontWeight={"medium"} color={"black"} mt="8px" fontSize={{ base: "13px", md: "14px", lg: "25px" }}> <span style={{ color: '#AC39FF' }}> Trade in your current device.</span>  Get credit toward a new one. </Text>
                    </Box>

                    <Box
                        h='35vh'
                        m='10px'
                        shadow={'2xl'}

                        key={Math.random()} alignItems="center" textAlign={"center"} >
                        <BsCreditCard color='#6ACD47' size={'60px'} />
                        <Text lineHeight={'120%'} fontWeight={"medium"} color={"black"} mt="8px" fontSize={{ base: "13px", md: "14px", lg: "25px" }}>Pay in full or <span style={{ color: '#6ACD47' }}> pay in over time.</span> Your choice</Text>
                    </Box>

                    <Box
                        m='10px'
                        shadow={'2xl'}
                        h='35vh'

                        key={Math.random()} alignItems="center" textAlign={"center"} >
                        <FaRegSmile size={'60px'} color='#007AFF' />
                        <Text lineHeight={'120%'} fontWeight={"medium"} color={"black"} mt="8px" fontSize={{ base: "13px", md: "14px", lg: "25px" }}>Make them yours. <span style={{ color: '#007AFF' }}> Engrave a mix of emoji, names, and numbers for free. </span> </Text>
                    </Box>




            </Slider>

                </Box>


        </div>
    );
}

export default CeoPage;