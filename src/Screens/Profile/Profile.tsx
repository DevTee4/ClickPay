import { Center, VStack, Button, Box, Text } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import PinCode from '../../Common/PinCode';
import { RouterProps } from '../../../App';


const Profile = ({ navigation }: RouterProps) => {
    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"start"}
        >
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} mb={2}>
                    This is Profile
                </Text>
                
        </Center>
    );
}
export default Profile;