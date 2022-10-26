import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bannerStyle.css';
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
        slidesToShow: 4,
        slidesToScroll: 4,

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
        fetch("http://localhost:4000/phones")
            .then(res => res.json())
            .then(res => setBestselling(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getFashion();
    }, [])
    return (

        <div>
            <Box w={{ base: '80%', md: '75%', lg: '84%' }} m="auto" className="OffSlider">
                <Slider {...settings}>
                    {bestselling.map(item =>
                        // <NavLink to={`/products/view/${item.item_id}`}>
                        <Box
                            // style={{
                            //     backgroundImage: "url('https://www.apple.com/v/home/at/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_medium_2x.jpg')"
                            // }}                      
                             backgroundImage="url('https://www.apple.com/v/home/at/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_medium_2x.jpg')"

                            backgroundRepeat={"no-repeat"}
                            backgroundSize="100%"
                            backgroundPosition='bottom 10%  center'
                            h='100vh'
                            w='100%'
                            m="5px" key={Math.random()} alignItems="center" textAlign={"center"} >
                            {/* <Img maxWidth="190px" h="240px" m="auto" _hover={{ transform: "scale(1.1)", transition: "400ms" }} p="10px" src={item.url} alt="" /> */}
                            <Text p="5px" fontWeight="500" fontSize={{ base: "13px", md: "12px", lg: "14px" }}> {item.description}</Text>

                            <Text pb="16px" fontWeight={"medium"} color={"green"} mt="8px" fontSize={{ base: "13px", md: "14px", lg: "15px" }}> From  ₹  {item.new_price} </Text>
                        </Box>
                        // </NavLink>
                    )}

                </Slider>
            </Box>
        </div>
    );
}

export default ProductSlider;