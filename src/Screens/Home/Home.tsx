import { Box, Text, Card, Center, AspectRatio, HStack, Heading, Image, Stack, Icon, VStack } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import AppBar from '../../Common/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { Dimensions } from 'react-native';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Home = ({ navigation }: RouterProps) => {
    const isCarousel = React.useRef(null);

    const CarouselCardItem = ({ item, index }) => {
        return (
            <Box
                maxW="full"
                rounded="3xl"
                overflow="hidden"
                mx={10}
                my={5}
                style={{ elevation: 5, shadowRadius: 10, shadowColor: 'black' }}
            >
                <VStack bg="primary.50" maxH={"209px"} justifyContent={"space-between"}>
                    <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                        <Icon as={<FontAwesomeIcon size={24} color='white' icon={faCreditCard} />} />
                        <Icon as={<FontAwesomeIcon size={20} color='white' icon={faCcMastercard} />} />
                    </HStack>
                    <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                        <Text color={"white"}>4576 5321 0255 7854</Text>
                        <Text color={"grey.100"}>11/22</Text>
                    </HStack>
                </VStack>
                <HStack bg={"secondary.50"} alignItems="center" space={4} justifyContent="space-between">
                    <Text
                        p={5}
                        color="black"
                        _dark={{
                            color: "warmGray.200"
                        }}
                        fontFamily="body"
                        fontWeight="500"
                        fontStyle="normal"
                        fontSize={26}
                    >
                        $10,000.00
                    </Text>
                </HStack>
            </Box>
        )
      }

    return (
        <Box bg={"trueGray.300"} _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} h={"100%"} >
            <AppBar title='Welcome, Tom!' />
            

            <VStack justifyContent={"space-between"} p={5}>
                <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontStyle="normal"
                    fontSize={21}
                    color={"grey.100"}
                >
                    Total balance
                </Text>
                <Heading
                    fontFamily="body"
                    fontWeight="500"
                    fontStyle="normal"
                    fontSize={36}
                >
                    $ 13,553.00
                </Heading>
            </VStack>
        </Box>
    );
}
export default Home;