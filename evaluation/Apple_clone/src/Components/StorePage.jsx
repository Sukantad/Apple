import { Box } from '@chakra-ui/react';
import React from 'react';
import Category from './StoreApp/Category';
import CeoPage from './StoreApp/CeoPage';
import ProductSlider from './StoreApp/ProductSlider';
import ShortOffer from './StoreApp/ShortOffer';
import TopPart from './StoreApp/TopPart';

function StorePage() {
    return (
        <Box bg='#F5F4F6'>
            <ShortOffer/>
            <TopPart/>
             <Category/>
             {/* <ProductSlider/> */}
             <CeoPage/>
        </Box>
    );
}

export default StorePage;