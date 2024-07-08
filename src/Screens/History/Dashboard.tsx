import { Center, VStack, Button, Box, Text, Stack, Heading, Pressable, HStack, Icon, AspectRatio } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import { RouterProps, SCREEN_HEIGHT } from '../../../App';
import AppBar from '../../Common/AppBar';
import { faChevronRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
const Dashboard = ({ navigation }: RouterProps) => {
    const sandBoxB = Image.resolveAssetSource(require('./../../Assets/Images/BlackSandbox.png')).uri;
    const sandBoxW = Image.resolveAssetSource(require('./../../Assets/Images/WhiteSandbox.png')).uri;
    return (
        <VStack space={5} bg={"blueGray.50"} h={SCREEN_HEIGHT}>
            <AppBar title='Welcome, Tom!' useNotifyIcon />
            <VStack justifyContent={"space-between"} mx={10}>
                <Text fontWeight="700" lineHeight={32} fontStyle="normal" fontSize={21} color={"grey.100"}>
                    BALANCE
                </Text>
                <HStack w={"75%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Heading lineHeight={54} fontWeight="500" fontStyle="normal" fontSize={36} my={5}>
                        $ 13,553.00
                    </Heading>
                    <Text bg={"#21AA5B"} px={3} py={2} borderRadius={50} color={"white"} lineHeight={16} fontWeight="500" fontStyle="normal" fontSize={14}>+8.50%</Text>
                </HStack>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <VStack w={"48%"} space={3} justifyContent={"space-between"} p={5} borderRadius={15} borderColor={"grey.100"} borderWidth={1}>
                        <HStack space={5} justifyContent={"space-between"} alignItems={"center"}>
                            <Text color='#828282' fontWeight="400" fontStyle="normal" fontSize={14}>Positions</Text>
                            <Pressable >
                                <Icon as={<FontAwesomeIcon size={12} color='#828282' icon={faChevronRight} />} />
                            </Pressable>
                        </HStack>
                        <Text fontWeight="medium" fontStyle="normal" fontSize={20}>$13553.00</Text>
                    </VStack>
                    <VStack w={"48%"} space={3} justifyContent={"space-between"} p={5} borderRadius={15} borderColor={"grey.100"} borderWidth={1}>
                        <HStack space={5} justifyContent={"space-between"} alignItems={"center"}>
                            <Text color='#828282' fontWeight="400" fontStyle="normal" fontSize={14}>Cash</Text>
                            <Pressable>
                                <Icon as={<FontAwesomeIcon size={12} color='#828282' icon={faChevronRight} />} />
                            </Pressable>
                        </HStack>
                        <Text fontWeight="medium" fontStyle="normal" fontSize={20}>$2250.00</Text>
                    </VStack>
                </HStack>
                <HStack w={"45%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Heading fontFamily={"body"} lineHeight={27} fontWeight="medium" fontStyle="normal" fontSize={18} my={5}>
                        Token Bonus
                    </Heading>
                    <Text bg={"primary.50"} px={2} py={0.5} borderRadius={6} color={"grey.100"} lineHeight={15} fontWeight="400" fontStyle="normal" fontSize={10}>Today</Text>
                </HStack>
                <HStack justifyContent={"space-between"} h={"43%"}>
                    <VStack w={"47%"} alignItems={"center"} justifyContent={"space-around"} p={5} borderRadius={15} bgColor={"primary.50"}>
                        <Box>
                            <CircularProgress
                                value={31}
                                // activeStrokeColor={'#E2FF54'}
                                inActiveStrokeColor={'#efefef'}
                                progressValueColor={'#ecf0f1'}
                                inActiveStrokeOpacity={0.1}
                                activeStrokeColor={'#E2FF54'}
                                // activeStrokeSecondaryColor={'#004852'}
                                valueSuffix={'%'}
                            />
                        </Box>
                        <Text p={5} textAlign={"center"} color={"grey.100"} lineHeight={20} fontWeight="500" fontStyle="normal" fontSize={14}>Tokens to buy for 33%</Text>
                        <Text textAlign={"center"} color={"secondary.50"} lineHeight={30} fontWeight="700" fontStyle="normal" fontSize={20}>8990TB</Text>
                    </VStack>
                    <VStack w={"47%"} justifyContent={"space-between"} borderRadius={15}>
                        <VStack h={"47%"} justifyContent={"space-around"} p={5} borderRadius={15} bgColor={"secondary.50"}>
                            <AspectRatio ratio={1} w={"18px"} h={"20.08px"} maxW={"18px"} maxH={"20.08px"}>
                                <Image source={{ uri: sandBoxB }} />
                            </AspectRatio>
                            <Text lineHeight={21} fontWeight="400" fontStyle="normal" fontSize={14}>Bonus received</Text>
                            <Text lineHeight={17} fontWeight="700" fontStyle="normal" fontSize={17}>$22.42</Text>
                        </VStack>
                        <VStack h={"47%"} justifyContent={"space-around"} p={5} borderRadius={15} bgColor={"primary.50"}>
                            <AspectRatio ratio={1} w={"18px"} h={"20.08px"} maxW={"18px"} maxH={"20.08px"}>
                                <Image source={{ uri: sandBoxW }} />
                            </AspectRatio>
                            <Text color={"white"} lineHeight={21} fontWeight="400" fontStyle="normal" fontSize={14}>Bonus received</Text>
                            <Text color={"white"} lineHeight={17} fontWeight="700" fontStyle="normal" fontSize={17}>$122.00</Text>
                        </VStack>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
}
export default Dashboard;