import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { VStack, FormControl, Input, Icon, Button} from "native-base"
import { RouterProps } from "../../../App"
import AppBar from "../../Common/AppBar"
import React from "react"
import { faEnvelope, faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons"

const EditInfo = ({ navigation }: RouterProps) => {
    // const [show, setShow] = React.useState(false);
    return (
        <VStack space={10}>
            <AppBar title='Edit Information' route={navigation} useBackIcon />
            <VStack mt="5" space={8} mx={10}>
                <FormControl >
                    <Input borderRadius={10} p={3}
                        _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                        bgColor={'#CBCBCB'} borderColor={'grey.100'} placeholder="FULL NAME"
                        InputRightElement=
                        {<VStack pr={4}>
                            <Icon as={<FontAwesomeIcon color={'#969696'} icon={faPenToSquare} />} size={4} />
                        </VStack>}
                        InputLeftElement=
                        {<VStack pl={4}>
                            <Icon as={<FontAwesomeIcon color={'#969696'} icon={faUser} />} size={4} />
                        </VStack>} placeholderTextColor="grey.200" />
                </FormControl>
                <FormControl >
                    <Input borderRadius={10} p={3}
                        _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                        bgColor={'grey.100'} borderColor={'grey.50'} placeholder='EMAIL'
                        InputRightElement=
                        {<VStack pr={4}>
                            <Icon as={<FontAwesomeIcon color={'#969696'} icon={faPenToSquare} />} size={4} />
                        </VStack>}
                        InputLeftElement=
                        {<VStack pl={4}>
                            <Icon as={<FontAwesomeIcon color='#969696' icon={faEnvelope} />} size={4} />
                        </VStack>} placeholderTextColor="grey.200" />
                </FormControl>
                <FormControl >
                    <Input borderRadius={10} p={3}
                        _focus={{ focusOutlineColor: 'primary.50', placeholderTextColor: 'primary.50' }}
                        bgColor={'grey.100'} borderColor={'grey.50'}
                        type={"password"}
                        // type={show ? "text" : "password"}
                        InputRightElement=
                        {<VStack pr={4}>
                            <Icon as={<FontAwesomeIcon color={'#969696'} icon={faPenToSquare} />} size={4} />
                        </VStack>}
                        // InputRightElement=
                        // {<Pressable pr={5} onPress={() => setShow(!show)}>
                        //     <Icon as={<FontAwesomeIcon color='#969696' icon={show ? faEye : faEyeSlash} />} size={4} />
                        // </Pressable>}
                        InputLeftElement=
                        {<VStack pl={4}>
                            <Icon as={<FontAwesomeIcon color='#969696' icon={faLock} />} size={4} />
                        </VStack>} placeholder='PASSWORD' placeholderTextColor="grey.200" />
                </FormControl>
                <Button onPress={() => navigation.navigate('Preferences')} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                    SAVE CHANGES
                </Button>
            </VStack>
        </VStack>
    )
}
export default EditInfo;