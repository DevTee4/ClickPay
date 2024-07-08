import React from 'react';
import { RouterProps } from '../../../App';
import AppBar from '../../Common/AppBar';
import { HStack, Icon, Text, VStack } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faMoneyCheck, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';
import { Pressable } from 'react-native';


const Preferences = ({ navigation }: RouterProps) => {
    return (
        <VStack space={10}>
            <AppBar title='Preferences' route={navigation} useBackIcon />
            {/* Account Information */}
            <HStack mx={10} space={5} alignItems={"center"}>
                <Icon as={<FontAwesomeIcon size={24} color='#004852' icon={faUser} />} />
                <VStack>
                    <Pressable onPress={() => navigation.navigate('EditInfo')}>
                        <Text fontWeight="bold" fontFamily={"body"} fontStyle="normal" fontSize={19} lineHeight={30} >Account Information</Text>
                    </Pressable>
                    <Text fontWeight="400" color={"grey.200"} fontFamily={"body"} fontStyle="normal" fontSize={13} lineHeight={19} >Change your Account information</Text>
                </VStack>
            </HStack>
            {/* Password */}
            <HStack mx={10} space={5} alignItems={"center"}>
                <Icon as={<FontAwesomeIcon size={24} color='#004852' icon={faEye} />} />
                <VStack>
                    <Pressable onPress={() => navigation.navigate('ResetPassword')}>
                        <Text fontWeight="bold" fontFamily={"body"} fontStyle="normal" fontSize={19} lineHeight={30} >Password</Text>
                    </Pressable>
                    <Text fontWeight="400" color={"grey.200"} fontFamily={"body"} fontStyle="normal" fontSize={13} lineHeight={19} >Change your Password</Text>
                </VStack>
            </HStack>
            {/* Payment Methods */}
            <HStack mx={10} space={5} alignItems={"center"}>
                <Icon as={<FontAwesomeIcon size={24} color='#004852' icon={faMoneyCheck} />} />
                <VStack>
                    <Text fontWeight="bold" fontFamily={"body"} fontStyle="normal" fontSize={19} lineHeight={30} >Payment Methods</Text>
                    <Text fontWeight="400" color={"grey.200"} fontFamily={"body"} fontStyle="normal" fontSize={13} lineHeight={19} >Add Your Credit / Credit Cards</Text>
                </VStack>
            </HStack>
            {/* Invite Your Friends */}
            <HStack mx={10} space={5} alignItems={"center"}>
                <Icon as={<FontAwesomeIcon size={24} color='#004852' icon={faPencil} />} />
                <VStack>
                    <Pressable onPress={() => navigation.navigate('InviteFriends')}>
                        <Text fontWeight="bold" fontFamily={"body"} fontStyle="normal" fontSize={19} lineHeight={30} >Invite Your Friends</Text>
                    </Pressable>
                    <Text fontWeight="400" color={"grey.200"} fontFamily={"body"} fontStyle="normal" fontSize={13} lineHeight={19} >Get $3 For Each Invitation!</Text>
                </VStack>
            </HStack>
        </VStack>
    );
}
export default Preferences;