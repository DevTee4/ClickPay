import React from 'react';
import { RouterProps } from '../../../App';
import { Avatar, Box, Button, FormControl, HStack, Icon, Input, Text, VStack } from 'native-base';
import AppBar from '../../Common/AppBar';
import { Image } from 'react-native';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const ConfirmTransfer = ({ navigation }: RouterProps) => {
    const avatar = Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Transfer' route={navigation} useBackIcon />
            <Box mx={10}>
                <Text color={"grey.200"} fontFamily="body" fontWeight="600" fontStyle="normal" fontSize={16} lineHeight={24}>FROM</Text>
                <HStack justifyContent={"space-between"} alignContent={"center"}>
                    <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={24} lineHeight={36} >
                        TOM HILL
                    </Text>
                    <Text color={"grey.200"} alignContent={"center"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={14} lineHeight={22}>
                        **** 7854
                    </Text>
                </HStack>
            </Box>
            <Box mx={10}>
                <Text color={"grey.200"} fontFamily="body" fontWeight="600" fontStyle="normal" fontSize={16} lineHeight={24}>TO</Text>
                <HStack justifyContent={"space-between"} alignContent={"center"}>
                    <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={24} lineHeight={36} >
                        TOM HILL
                    </Text>
                    <Text  color={"grey.200"} alignContent={"center"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={14} lineHeight={22}>
                        **** 7854
                    </Text>
                </HStack>
            </Box>
            <Box mx={10}>
                <Text color={"grey.200"} fontFamily="body" fontWeight="400" fontStyle="normal" fontSize={16} lineHeight={24}>
                    AMOUNT
                </Text>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={24} lineHeight={36}>$100</Text>
            </Box>
            <Button onPress={() => navigation.navigate('')} p={3} mx={10} bg={"secondary.50"} _text={{ color: "black", fontWeight: "bold" }} borderRadius={10}>
                CONTINUE
            </Button>
        </VStack>
    );
}
export default ConfirmTransfer;