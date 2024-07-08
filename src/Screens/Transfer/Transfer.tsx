import React from 'react';
import { RouterProps, SCREEN_WIDTH } from '../../../App';
import { Avatar, Box, Button, Center, FlatList, HStack, Icon, ScrollView, Text, VStack } from 'native-base';
import { faCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import AppBar from '../../Common/AppBar';
import { Image, Pressable } from 'react-native';

const CardList = [
    {
        expiryDate: "11/22",
        amount: "$10,000.00",
        cardNo: "4576 5321 0255 7854",
        avatar: Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri
    },
    {
        expiryDate: "01/24",
        amount: "£30,000.00",
        cardNo: "4576 5321 0255 7854",
        avatar: Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri
    },
    {
        expiryDate: "06/20",
        amount: "₦1,000,000.00",
        cardNo: "4576 5321 0255 7854",
        avatar: Image.resolveAssetSource(require('./../../Assets/Images/Avatar3.png')).uri
    }, {
        expiryDate: "01/24",
        amount: "£30,000.00",
        cardNo: "4576 5321 0255 7854",
        avatar: Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri
    }
]
const Transfer = ({ navigation }: RouterProps) => {
    // const avatar = Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri;
    // const avatar2 = Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri;
    // const avatar3 = Image.resolveAssetSource(require('./../../Assets/Images/Avatar3.png')).uri;
    const [selectedRecipient, setSelectedRecipient] = React.useState(-1);
    const [selectedCard, setSelectedCard] = React.useState(-1);
    return (
        <VStack space={10}>
            <AppBar title='Transfer' route={navigation} useBackIcon />
            <Box mx={10}>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={16} lineHeight={30}>
                    Choose Card
                </Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    maxW={400}
                    minW={400}
                    ListEmptyComponent={<Text fontSize={18} fontWeight={"700"} color={"grey.200"}>No transactions found</Text>}
                    data={CardList}
                    renderItem={({ item, index }) =>
                        <Pressable onPress={() => setSelectedCard(index)}>
                            <Box
                                maxW="331px"
                                w="331px"
                                rounded="3xl"
                                overflow="hidden"
                                mr={5}
                                my={5}
                                h={"209px"}
                            // style={{ elevation: 5, shadowRadius: 10, shadowColor: 'black' }}
                            >
                                <VStack bg="primary.50" justifyContent={"space-between"}>
                                    <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                                        <Icon as={<FontAwesomeIcon size={24} color='white' icon={faCreditCard} />} />
                                        <Icon as={<FontAwesomeIcon size={20} color='white' icon={faCcMastercard} />} />
                                    </HStack>
                                    <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                                        <Text color={"white"}>{item.cardNo}</Text>
                                        <Text color={"grey.100"}>{item.expiryDate}</Text>
                                    </HStack>
                                </VStack>
                                <HStack p={5} bg={"secondary.50"} alignItems="center" space={4} justifyContent="space-between">
                                    <Text
                                        color="black"
                                        _dark={{
                                            color: "warmGray.200"
                                        }}
                                        fontFamily="body"
                                        fontWeight="500"
                                        fontStyle="normal"
                                        fontSize={26}
                                    >
                                        {item.amount}
                                    </Text>
                                    {index==selectedCard?<Icon as={<FontAwesomeIcon size={20} color='black' icon={faCheck} />} />:null}
                                </HStack>
                            </Box>
                        </Pressable>
                    }
                />
            </Box>
            <Box mx={10}>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={16} lineHeight={30}>
                    Choose Recipient
                </Text>
                <FlatList
                    // keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    maxW={400}
                    minW={400}
                    ListEmptyComponent={<Text fontSize={18} fontWeight={"700"} color={"grey.200"}>No transactions found</Text>}
                    data={CardList}
                    renderItem={({ item, index }) =>
                        <Pressable onPress={() => setSelectedRecipient(index)}>
                            <VStack mr={5} borderWidth={1} borderRadius={15} pb={5} pt={2} px={2} borderColor={index === selectedRecipient ? "primary.50" : "grey.100"}>
                                <Icon alignSelf={"flex-end"} color={index === selectedRecipient ? "primary.50" : "transparent"} as={<FontAwesomeIcon size={16} icon={faCheck} />} />
                                <Avatar alignSelf={"center"} m={2} source={{
                                    uri: item.avatar
                                }}>
                                </Avatar>
                                <Text w={100} textAlign={"center"} flexWrap={"wrap"} lineHeight={20} fontWeight="500" fontStyle="normal" fontSize={14}>
                                    Maria
                                    Sevchenko
                                </Text>
                            </VStack>
                        </Pressable>
                    }
                />
            </Box>
            <Button onPress={() => navigation.navigate('AmountTransfer')} p={3} mx={10} bg={"secondary.50"} _text={{ color: "black", fontWeight: "bold" }} borderRadius={10}>
                CONTINUE
            </Button>
        </VStack>
    );
}
export default Transfer;