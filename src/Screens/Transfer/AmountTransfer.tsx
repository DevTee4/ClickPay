import React from 'react';
import { RouterProps } from '../../../App';
import { Avatar, Box, Button, FormControl, Icon, Input, Text, VStack } from 'native-base';
import AppBar from '../../Common/AppBar';
import { Image } from 'react-native';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const AmountTransfer = ({ navigation }: RouterProps) => {
    const avatar = Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Transfer' route={navigation} useBackIcon />
            <VStack mx={10} w={"130px"} h={"154px"} mr={5} borderWidth={1} borderRadius={15} py={4} px={2} borderColor={"primary.50"}>
                {/* <Icon alignSelf={"flex-end"} color={index === selectedRecipient ? "primary.50" : "transparent"} as={<FontAwesomeIcon size={16} icon={faCheck} />} /> */}
                <Avatar alignSelf={"center"} m={2} source={{
                    uri: avatar
                }}>
                </Avatar>
                <Text w={100} textAlign={"center"} flexWrap={"wrap"} lineHeight={20} fontWeight="500" fontStyle="normal" fontSize={14}>
                    Maria
                    Sevchenko
                </Text>
            </VStack>
            <Box mx={10}>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={16} lineHeight={30}>
                    Amount
                </Text>
                <FormControl >
                    <Input borderRadius={10} p={3} inputMode='numeric' textContentType='none'
                        _focus={{ focusOutlineColor: 'grey.100'}}
                        _input={{ fontSize:30, fontWeight: "bold", color: "black" }}
                        InputLeftElement=
                            {<VStack pl={4}>
                                <Icon as={<FontAwesomeIcon size={34} color='#A8A8A8' icon={faDollarSign} />}/>
                            </VStack>} 
                        bgColor={'grey.100'} borderColor={'grey.100'}/>
                </FormControl>
            </Box>
            <Button onPress={() => navigation.navigate('ConfirmTransfer')} p={3} mx={10} bg={"secondary.50"} _text={{ color: "black", fontWeight: "bold" }} borderRadius={10}>
                CONTINUE
            </Button>
        </VStack>
    );
}
export default AmountTransfer;