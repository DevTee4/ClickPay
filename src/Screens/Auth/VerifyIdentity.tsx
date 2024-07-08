import { Center, VStack, Button, Box, Text, HStack, Icon, Circle, Square } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import PinCode from '../../Common/PinCode';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterProps } from '../../../App';


const VerifyIdentity = ({ navigation }: RouterProps) => {
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const next = () => {
        if (show) {
            setShow1(false);
            setShow2(false);
            navigation.navigate('YourPhoto');
        }
        if (show1) {
            setShow(false);
            setShow2(false);
            navigation.navigate('ResidencyProof');
        }
        if (show2) {
            setShow1(false);
            setShow(false);
            navigation.navigate('ScanBankCard');
        }
    }
    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"start"}
        >
            <VStack w={"100%"} p={10} space={5} >
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} mb={2}>
                    Verify Your Identity
                </Text>
                <Pressable onPress={() => {setShow(true); setShow1(false); setShow2(false)}}>
                    <Box safeArea w="100%" bg={!show ? "transparent" : "white"} borderRadius={10} p={5} shadow={show ? "2" : undefined} >
                        <HStack alignItems={"center"}>
                            <Circle size="30px" bg="grey.200">
                                <Icon as={<FontAwesomeIcon color='#323142' icon={faUser} />} size={4} />
                            </Circle>
                            <VStack maxW={"70%"} px={5}>
                                <Text color={"grey.400"} fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={18}>Your Photo</Text>
                                <Text color={"grey.300"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={14}>Look Straight In Your Cam For 30 Seconds </Text>
                            </VStack>
                        </HStack>
                    </Box>
                </Pressable>
                <Pressable onPress={() => {setShow1(true); setShow(false); setShow2(false)}}>
                    <Box safeArea w="100%" bg={!show1 ? "transparent" : "white"} p={5} borderRadius={10} shadow={show1 ? "2" : undefined} >
                        <HStack alignItems={"center"}>
                            <Circle size="30px" bg="grey.200">
                                <Icon as={<FontAwesomeIcon color='#323142' icon={faLocationDot} />} size={4} />
                            </Circle>
                            <VStack maxW={"70%"} px={5} >
                                <Text color={"grey.400"} fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={18}>Residency</Text>
                                <Text color={"grey.300"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={14}>Proof Of Your Residency Via Passport / ID Card</Text>
                            </VStack>
                        </HStack>
                    </Box>
                </Pressable>
                <Pressable onPress={() => {setShow2(true); setShow1(false); setShow(false)}}>
                    <Box safeArea w="100%" bg={!show2 ? "transparent" : "white"} p={5} borderRadius={10} shadow={show2 ? "2" : undefined} >
                        <HStack alignItems={"center"}>
                            <Circle size="30px" bg="grey.200">
                                <Icon as={<FontAwesomeIcon color='#323142' icon={faCreditCard} />} size={4} />
                            </Circle>
                            <VStack maxW={"70%"} px={5} >
                                <Text color={"grey.400"} fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={18}>Scan Card</Text>
                                <Text color={"grey.300"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={14}>Scan Your Both Sides Of Your Bank Card</Text>
                            </VStack>
                        </HStack>
                    </Box>
                </Pressable>
            </VStack>
            <Box safeArea w="100%" px={10} mb={2}>
                <VStack mt="5" space={8} w="100%" >
                    <Button onPress={() => next()} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                        NEXT
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}
export default VerifyIdentity;