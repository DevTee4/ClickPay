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
import { RouterProps } from '../../../App';



const SignIn = ({ navigation }: RouterProps) => {
    const onboard1 = Image.resolveAssetSource(require('./../../Assets/Images/Layers.png')).uri;
    const [show, setShow] = React.useState<boolean>();

    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"space-between"}
        >
            {/* Image */}
            <Box safeArea w="100%">
                <AspectRatio h={400} right={0} left={0}>
                    <Image height={600} width={500} source={{ uri: onboard1 }} resizeMode='cover' />
                </AspectRatio>
            </Box>
            {/* Google/Apple sign up */}

            <Box mt={-200} top={0} safeArea w="100%" px={12}>
                <VStack w={"100%"} >
                    <Text textAlign={"center"} fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={38} mb={10}>
                        Sign In
                    </Text>
                    <HStack justifyContent={"space-around"}>
                        <Button px={16} py={3} bg="grey.50" borderRadius={10} >
                            <Icon as={<FontAwesomeIcon size={20} color='#004852' icon={faGoogle} />} />
                        </Button>
                        <Button px={16} py={3} bg="grey.50" borderRadius={10} >
                            <Icon as={<FontAwesomeIcon size={24} color='#004852' icon={faApple} />} />
                        </Button>
                    </HStack>

                </VStack>
            </Box>
            <Text textAlign={"center"} fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={18} color={"grey.100"}>
                OR
            </Text>
            {/* Sign in form */}
            <Box safeArea w="100%" px={12} mt={0} mb={2}>
                <VStack mt="5" space={8} w="100%" mx="auto">
                    <FormControl >
                        <Input borderRadius={10} p={3}
                            _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                            bgColor={'grey.50'} borderColor={'grey.50'} placeholder='EMAIL'
                            InputLeftElement=
                            {<VStack pl={4}>
                                <Icon as={<FontAwesomeIcon color='#004852' icon={faEnvelope} />} size={4} />
                            </VStack>} placeholderTextColor="grey.100" />
                    </FormControl>
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
                            </VStack>} placeholder='PASSWORD' placeholderTextColor="grey.100" />
                        <Pressable onPress={() => navigation.navigate('ForgotPassword')} >
                            <Text textAlign={"right"} color={"grey.100"} fontFamily="body" fontWeight="400" fontStyle="normal"> Forgot Password?</Text>
                        </Pressable>
                    </FormControl>
                    <Button onPress={() => navigation.navigate('MainLayout')} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                        SIGN IN
                    </Button>
                    <HStack justifyContent={"center"}>
                        <Text fontFamily="body" fontWeight="400" fontStyle="normal">
                            Create A New Account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('SignUp')} >
                            <Text fontFamily="body" fontWeight="700" fontStyle="normal"> Sign Up</Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}
export default SignIn;