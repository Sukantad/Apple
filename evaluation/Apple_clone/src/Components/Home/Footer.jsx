import { Box, Text ,Grid,GridItem} from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function Footer() {
    return (
        <div>
            <Box bg='#F5F5F7' p='5px 13%' >
               <Box fontSize={'13px'} color='#7E7E83'> 
               <Text pt='8px'>  1. iPhone 8 or later or Apple Watch Series 3 or later paired with iPhone 6s or later required. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.
               </Text>
               <Text pt='8px'>  A subscription is required for Apple Fitness+.</Text>
              <Text pt='8px'>  Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later.
              </Text> 
               <Text pt='8px'> To get the newest features, make sure your devices are running the latest software version.
              </Text>  
              <Text pt='8px' display={'flex'} alignItems='center'>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings  General  Software Update. Tap Download and Install.
                </Text> 
                <Text pt='8px'> Available for qualifying applicants in the United States. </Text>
             <Text pt='8px'>   Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</Text> 
             <Text pb='12px' pt='8px'>   Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</Text> 
           <hr /> <hr />
            </Box>

            <Box display={"flex"}   borderBottom="1px solid grey" >
                    <Box w="100%" >
                        <Grid templateColumns='repeat(5, 1fr)' color='#7E7E83' padding={{ base: '20px', md: '30px', lg: '20px' }} fontSize={{ base: '7px', md: '10px', lg: '13px' }} gap="15px">

                            <GridItem>
                                <Text color={"black"} fontWeight="500"> ABOUT</Text>
                                <Text pt="8px" pb="4px">Contact Us </Text>
                                <Text pt="4px" pb="4px"> About Us</Text>
                                <Text pt="4px" pb="4px">  Careers</Text>
                                <Text pt="4px" pb="4px">Flipkart Stories</Text>
                                <Text pt="4px" pb="4px">Press </Text>
                                <Text pt="4px" pb="4px"> Flipkart Wholesale</Text>
                                <Text pt="4px" pb="4px"> Corporate Information </Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="500"> HELP</Text>
                                <Text pt="4px" pb="4px">Payments</Text>
                                <Text pt="4px" pb="4px"> Shipping</Text>
                                <Text pt="4px" pb="4px"> Cancellation & Returns</Text>
                                <Text pt="4px" pb="4px">FAQ</Text>
                                <Text pt="4px" pb="4px">Report </Text>
                                <Text pt="4px" pb="4px"> Infringement</Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="500"> POLICY</Text>
                                <Text pt="4px" pb="4px">Return Policy </Text>
                                <Text pt="4px" pb="4px"> Security</Text>
                                <Text pt="4px" pb="4px">  Privacy</Text>
                                <Text pt="4px" pb="4px">Sitemap</Text>
                                <Text pt="4px" pb="4px"> EPR </Text>
                                <Text pt="4px" pb="4px"> Flipkart Wholesale</Text>
                                <Text pt="4px" pb="4px"> Corporate Information </Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="500"> SOCIAL</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">Facebook  </Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  Twitter</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  YouTube</Text>


                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="500"> SOCIAL</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">Facebook  </Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  Twitter</Text>
                                <Text cursor={"pointer"}  pt="4px" pb="4px">  YouTube</Text>


                            </GridItem>

                        </Grid>
                    </Box>
                   
                </Box>


            </Box>
        </div>
    );
}

export default Footer;