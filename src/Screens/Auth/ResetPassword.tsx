import { Image } from 'react-native';
import { Center, VStack, AspectRatio, Button, Icon, Box, FormControl, Input, Pressable, Text, HStack } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const ResetPassword = ({ navigation }: RouterProps) => {
    const onboard1 = Image.resolveAssetSource(require('./../../Assets/Images/Layers.png')).uri;
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);

    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"start"}
        >
            <VStack w={"100%"} p={10} >
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} mb={2}>
                    Reset Password
                </Text>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={18} color={"grey.100"}>
                    Reset And Confirm Password
                </Text>
            </VStack>
            <Box safeArea w="100%" px={10} mt={0} mb={2}>
                <VStack mt="5" space={8} w="100%" mx="auto">
                    <FormControl >
                        <Input borderRadius={10} p={3}
                            _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                            bgColor={'grey.50'} borderColor={'grey.50'} type={show ? "text" : "password"}
                            InputRightElement=
                            {<Pressable pr={5} onPress={() => setShow(!show)}>
                                <Icon as={<FontAwesomeIcon color='#004852' icon={show ? faEye : faEyeSlash} />} size={4} />
                            </Pressable>}
                            InputLeftElement=
                            {<VStack pl={4}>
                                <Icon as={<FontAwesomeIcon color='#004852' icon={faLock} />} size={4} />
                            </VStack>} placeholder='NEW PASSWORD' placeholderTextColor="grey.100" />
                    </FormControl>

                    <FormControl >
                        <Input borderRadius={10} p={3}
                            _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                            bgColor={'grey.50'} borderColor={'grey.50'} type={show1 ? "text" : "password"}
                            InputRightElement=
                            {<Pressable pr={5} onPress={() => setShow1(!show1)}>
                                <Icon as={<FontAwesomeIcon color='#004852' icon={show1 ? faEye : faEyeSlash} />} size={4} />
                            </Pressable>}
                            InputLeftElement=
                            {<VStack pl={4}>
                                <Icon as={<FontAwesomeIcon color='#004852' icon={faLock} />} size={4} />
                            </VStack>} placeholder='CONFIRM PASSWORD' placeholderTextColor="grey.100" />
                    </FormControl>
                    <Button onPress={() => navigation.navigate('SignIn')} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                        RESET
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}
export default ResetPassword;