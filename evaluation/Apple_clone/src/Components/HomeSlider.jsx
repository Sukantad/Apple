import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Img } from '@chakra-ui/react';
function HomeSlider() {
    var settings = {
        // dots: true,
        // infinite: true,
        // slidesToShow: 1.5,
        // slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        



    };
    return (
        <Box mt='10px'>

            <Slider {...settings} >
                <div>
                    <Img p='10px' src='https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1378x774.jpg' />
                </div>
                <div>
                    <Img p='10px' src='https://is2-ssl.mzstatic.com/image/thumb/_vkF4kzNiSCdmWsVNp0gjw/1378x774.jpg' />
                </div>
                <div>
                    <Img p='10px' src='https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/1378x774.jpg' />
                </div>
                <div>
                    <Img p='10px' src='https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/1378x774.jpg' />
                </div>
                <div>
                    <Img p='10px' src='https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1378x774.jpg' />
                </div>
                <div>
                    <Img p='10px' src='https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/1378x774.jpg' />
                </div>
            </Slider>
        </Box>
    );
}

export default HomeSlider;