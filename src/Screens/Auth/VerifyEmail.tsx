import { Center, VStack, Button, Box, Text } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import PinCode from '../../Common/PinCode';
import { RouterProps } from '../../../App';


const VerifyEmail = ({ navigation }: RouterProps) => {
    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"start"}
        >
            <VStack w={"100%"} p={10} >
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} mb={2}>
                    Verify Email
                </Text>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={18} color={"grey.100"}>
                    Code Send To Your Email
                </Text>
            </VStack>
            <Box safeArea w="100%" px={10} mb={2}>
                <VStack mt="5" space={8} w="100%" >
                    <PinCode/>
                    <Button onPress={() => navigation.navigate('ResetPassword')} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                        VERIFY
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}
export default VerifyEmail;