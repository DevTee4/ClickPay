import { AspectRatio, Box, Button, FormControl, HStack, Heading, Icon, Input, Select, Switch, Text, VStack } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCreditCard, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

const CardSettings = ({ navigation }: RouterProps) => {
    const masterCard = Image.resolveAssetSource(require('./../../Assets/Images/masterCard.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Card Setting' route={navigation} useBackIcon />
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
            <VStack space={5} mx={10}>
                <HStack alignItems={"center"}>
                    <Text fontFamily="body" fontStyle="normal" bold fontSize={23} fontWeight={600}>Card</Text>
                    <Text fontFamily="body" fontStyle="normal" fontSize={21} fontWeight={500} color={"grey.100"}> Setting</Text>
                </HStack>
                <HStack justifyContent={"space-between"} w={"75%"}>
                    <Text fontFamily="body" fontStyle="normal" fontSize={16} fontWeight={400}>Online Payment</Text>
                    <Switch offTrackColor={"grey.100"} onTrackColor="#1FCAA5" />
                </HStack>
                <HStack justifyContent={"space-between"} w={"75%"}>
                    <Text fontFamily="body" fontStyle="normal" fontSize={16} fontWeight={400}>ATM WithDraws</Text>
                    <Switch offTrackColor={"grey.100"} onTrackColor="#1FCAA5" />
                </HStack>
                <HStack justifyContent={"space-between"} w={"75%"}>
                    <Text fontFamily="body" fontStyle="normal" fontSize={16} fontWeight={400}>International</Text>
                    <Switch offTrackColor={"grey.100"} onTrackColor="#1FCAA5" />
                </HStack>
            </VStack>
                {/* <HStack alignItems={"center"}> */}
                    <Button mx={10} onPress={() => navigation.navigate('CardDetails')} borderRadius={10} p={3} bg={"primary.50"}>Save Card</Button>
                {/* </HStack> */}
        </VStack>
    );
}
export default CardSettings;