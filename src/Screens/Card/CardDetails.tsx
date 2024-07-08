import { AspectRatio, Avatar, Box, FlatList, FormControl, HStack, Heading, Icon, Input, Select, Switch, Text, VStack } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCreditCard, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, ListRenderItemInfo, TouchableOpacity } from "react-native";
import { ReactElement, JSXElementConstructor } from "react";

type DataProps = {
    imageUri: string,
    date: string,
    amount: string,
    name: string
}
const transactionData: DataProps[] = [
    {
        imageUri: Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri,
        date: "26 .11 .2021  -  5:15 AM",
        amount: "-0.056",
        name:"Avicii Ronaldo"
    },
    {
        imageUri: Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri,
        date: "21 .11 .2021  -  2:15 PM",
        amount: "-0.066",
        name:"Netia Horaan"
    },
    {
        imageUri: Image.resolveAssetSource(require('./../../Assets/Images/Avatar3.png')).uri,
        date: "19 .11 .2021  -  4:35 AM",
        amount: "-0.076",
        name:"Segam Holland"
    },
    {
        imageUri: Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri,
        date: "13 .11 .2021  -  1:13 PM",
        amount: "-0.026",
        name:"Avicii Ronaldo"
    },
    {
        imageUri: Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri,
        date: "21 .11 .2021  -  2:15 PM",
        amount: "-0.066",
        name:"Netia Horaan"
    }
]

const CardDetails = ({ navigation }: RouterProps) => {
    const masterCard = Image.resolveAssetSource(require('./../../Assets/Images/masterCard.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Card Details' route={navigation} useBackIcon />
            <VStack space={10}
                borderRadius={"3xl"}
                overflow="hidden"
                bg="primary.50" maxH={"209px"} h={"209px"}
                p={5}
                mx={10}
                style={{ elevation: 5, shadowColor: 'black' }}
            >
                <VStack space={5} >
                    <HStack justifyContent={"space-between"}>
                        <Icon as={<FontAwesomeIcon size={24} color='white' icon={faCreditCard} />} />
                        <Icon as={<FontAwesomeIcon size={30} color='white' icon={faEllipsisH} />} />
                    </HStack>
                    <Text color={"grey.100"}>5698    56254    6786    9979</Text>
                </VStack>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <VStack>
                        <Text color={"grey.100"} fontSize="12" fontStyle="normal" fontFamily="body" fontWeight="500">Card Holder</Text>
                        <Text bold color={"grey.50"} fontSize="17" fontStyle="normal" fontFamily="body" fontWeight="500">Name Here</Text>
                    </VStack>
                    <AspectRatio ratio={1} w={"51px"} h={"51px"} maxW={"51px"} maxH={"51px"}>
                        <Image source={{ uri: masterCard }} />
                    </AspectRatio>
                </HStack>
            </VStack>
            <Heading lineHeight={30} mx={10} fontSize="20" fontStyle="normal" fontFamily="body" fontWeight="bold">Transactions</Heading>
            <FlatList
                maxH={"400px"}
                minH={""}
                // my={5}
                // p={2}
                ListEmptyComponent={<Text fontSize={18} fontWeight={"700"} color={"grey.200"}>No transactions found</Text>}
                data={transactionData}
                renderItem={({ item, index }) =>
                    <HStack mx={10} mb={5} opacity={2} bg={"grey.50"} p={4} justifyContent={"space-between"} alignItems={"center"} borderRadius={"2xl"} shadow={3}>
                        <HStack space={2} alignItems={"center"}>
                            <AspectRatio p={1} ratio={0.9} w={"45px"} h={"48px"} maxW={"45px"} maxH={"48px"}>
                                <Image source={{ uri: item.imageUri }} />
                            </AspectRatio>
                            <VStack>
                                <Text fontSize="15" fontStyle="normal" fontFamily="body" fontWeight="bold">{item.name}</Text>
                                <Text color={"grey.100"} fontSize="13.5" fontStyle="normal" fontFamily="body" fontWeight="medium">{item.date}</Text>
                            </VStack>
                        </HStack>
                        <Text color={"primary.50"} fontSize="15" fontStyle="normal" fontFamily="body" fontWeight="medium">{item.amount}</Text>
                    </HStack>
                }
            />
        </VStack>
    );
}
export default CardDetails;