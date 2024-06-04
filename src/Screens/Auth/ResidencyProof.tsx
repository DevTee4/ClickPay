import { Center, VStack, Button, Box, Text, HStack, Icon, Circle, Square } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React from 'react';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const ResidencyProof = ({ navigation }: RouterProps) => {
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
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36}>
                    Proof Of Residency
                </Text>
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
export default ResidencyProof;