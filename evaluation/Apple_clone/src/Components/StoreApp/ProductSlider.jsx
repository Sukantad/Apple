import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pd.css'
import { GrFormNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { Img, Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function ProductSlider() {
    const [bestselling, setBestselling] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const PreviousBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} >
                <GrFormPrevious size={'50px'} color='#D6D6D6' />
            </Box>
        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <Box className={className} onClick={onClick} display="none">
                <GrFormNext size={'50px'} color='red' />
            </Box>

        );
    };

    var settings = {
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,

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
    const getFashion = () => {
        setLoading(true)
        fetch("http://localhost:4000/slider")
            .then(res => res.json())
            .then(res => setBestselling(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
    }, [])
    console.log(bestselling)
    return (

        <div>
            <Box p='50px 180px' >
                <Box color={'silver'} fontSize={'28px'} textAlign='center' display='flex' fontWeight={'700'}>
                    <Text color={'#6E6E73'}> <span style={{ color: 'black' }}> The latest.</span>Take a look at what’s new right now.
                    </Text>
                </Box>
            </Box>
            <Box w={{ base: '80%', md: '75%', lg: '98%' }} m="auto" className="OffSlider"  >
                <Slider {...settings}
                
                >

                    {bestselling.map(item =>
                        <Box key={Math.random()}>
                            <Box className='Card'
                              _hover={{border:'2px solid white'}}
                                backgroundImage={item.url}
                                backgroundRepeat={"no-repeat"}
                                backgroundSize="110%"
                                backgroundPosition='bottom 10%  center'
                                h='75vh'
                                w='95%'
                                m='15px'
                                shadow={'2xl'}
                                borderRadius='22px'
                                 >
                                <Box pt='20px' p='15px'>
                                 <Text fontWeight={'500'} color={'#8E8E92'} fontSize='12px'> {item.name}</Text> 
                                 <Text fontSize={'28px'} lineHeight='120%' fontWeight='semibold'> {item.heading}</Text>
                                 {/* <Text pt='7px' sx={{'.Card:hover &':{border:'1px solid red'}} }>From ₹  {item.price} ‡</Text> </Box> */}
                                 <Text pt='7px' sx={{'.Card:hover &':{border:'1px solid red'}} }>From ₹  {item.price} ‡</Text> </Box>

                            
                            </Box> </Box>
                    )}

                </Slider>
            </Box>
        </div>
    );
}

export default ProductSlider;