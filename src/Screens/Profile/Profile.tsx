import React from 'react';
import { RouterProps } from '../../../App';
import AppBar from '../../Common/AppBar';
import { Avatar, HStack, Icon, Text, VStack } from 'native-base';
import { Image, Pressable } from 'react-native';
import { faArrowRightToBracket, faChevronRight, faGear, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';


const Profile = ({ navigation }: RouterProps) => {
    const avatar = Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri;
    // function convertToBinary(n: number,binary: string) {
    //     // let binary: string;
    //     if (n>0)
    //     {
    //         let rem = n%2;
    //         let div = n/2;
    //         // console.log("rem",rem);
    //         // console.log("div",parseInt(div.toString(),10));
    //         binary += rem.toString();
    //         return convertToBinary(parseInt(div.toString(),10),binary)
    //     }
    //     else
    //     {
    //         console.log("binary",binary.split("").reverse().join(""));
    //         return binary.split("").reverse().join("");
    //     }
    // }
    return (
        <VStack space={10}>
            <AppBar title='Profile' route={navigation} useBackIcon />
            <VStack justifyContent={"center"} alignItems={"center"}>
                <Avatar
                    source={{
                        uri: avatar
                    }}
                    size={"xl"}
                >
                    <Avatar.Badge size={"6"} bg="primary.50" />
                </Avatar>
                <Text fontFamily={"body"} fontWeight={"700"} fontStyle={"normal"} fontSize={27} lineHeight={40.5}>Tom Hillson</Text>
                <Text color={"grey.200"} fontFamily={"body"} fontWeight={"500"} fontStyle={"normal"} fontSize={14} lineHeight={21}>Tomhill@mail.com</Text>
            </VStack>
            {/* Preferences */}
            <Pressable onPress={() => navigation.navigate('Preferences')}>
                <HStack mx={10} space={10} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack alignItems={"center"} space={5}>
                        <Icon as={<FontAwesomeIcon size={30} color='#004852' icon={faGear} />} />
                        <Text fontFamily={"body"} fontWeight={"500"} fontStyle={"normal"} fontSize={18} lineHeight={27}>Preferences</Text>
                    </HStack>
                    <Icon as={<FontAwesomeIcon size={14} color='#969696' icon={faChevronRight} />} />
                </HStack>
            </Pressable>
            {/* Account Security */}
            <HStack mx={10} space={10} alignItems={"center"} justifyContent={"space-between"}>
                <HStack alignItems={"center"} space={5}>
                    <Icon as={<FontAwesomeIcon size={30} color='#004852' icon={faLockOpen} />} />
                    <Text fontFamily={"body"} fontWeight={"500"} fontStyle={"normal"} fontSize={18} lineHeight={27}>Account Security</Text>
                </HStack>
                <Icon as={<FontAwesomeIcon size={14} color='#969696' icon={faChevronRight} />} />
            </HStack>
            {/* Customer Support */}
            <HStack mx={10} space={10} alignItems={"center"} justifyContent={"space-between"}>
                <HStack alignItems={"center"} space={5}>
                    <Icon as={<FontAwesomeIcon size={30} color='#004852' icon={faCircleQuestion} />} />
                    <Text fontFamily={"body"} fontWeight={"500"} fontStyle={"normal"} fontSize={18} lineHeight={27}>Customer Support</Text>
                </HStack>
                <Icon as={<FontAwesomeIcon size={14} color='#969696' icon={faChevronRight} />} />
            </HStack>
            {/* Logout */}
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <HStack mx={10} space={5} alignItems={"center"} >
                    <Icon as={<FontAwesomeIcon size={30} color='#004852' icon={faArrowRightToBracket} />} />
                    <Text fontFamily={"body"} fontWeight={"500"} fontStyle={"normal"} fontSize={18} lineHeight={27}>Logout</Text>
                </HStack>
            </Pressable>
        </VStack>
    );
}
export default Profile;