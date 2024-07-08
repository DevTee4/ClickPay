import { AspectRatio, Box, FormControl, HStack, Heading, Icon, Input, Select, Switch, Text, VStack } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCreditCard, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";
import { color } from "native-base/lib/typescript/theme/styled-system";

const NewCard = ({ navigation }: RouterProps) => {
    const masterCard = Image.resolveAssetSource(require('./../../Assets/Images/masterCard.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Add New Card' route={navigation} useBackIcon />
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
            <Heading lineHeight={28} mx={10} fontSize="20" fontStyle="normal" fontFamily="body" fontWeight="medium">Enter Information</Heading>
            <VStack mx={10} space={10}>
                <FormControl >
                    <FormControl.Label color="#111827" fontSize="14" fontStyle="normal" fontFamily="body" fontWeight="medium">Card Number</FormControl.Label>
                    <Input borderRadius={10}
                        _input={{ color: "primary.50" }}
                        _focus={{ focusOutlineColor: 'primary.50' }} borderColor={'primary.50'} type={"text"} borderWidth={1}
                        InputRightElement={
                            <AspectRatio mr={5} ratio={1} w={"29px"} h={"29px"} maxW={"29px"} maxH={"29px"}>
                                <Image source={{ uri: masterCard }} />
                            </AspectRatio>
                        }
                    />
                </FormControl>
                <FormControl >
                    <FormControl.Label color="#111827" fontSize="14" fontStyle="normal" fontFamily="body" fontWeight="medium">Card Holder</FormControl.Label>
                    <Input borderRadius={10}
                        _input={{ color: "primary.50" }}
                        _focus={{ focusOutlineColor: 'primary.50' }} borderColor={'primary.50'} type={"text"} borderWidth={1}
                    />
                </FormControl>
                <HStack w={"50%"}>
                    <FormControl >
                        <FormControl.Label color="#111827" fontSize="14" fontStyle="normal" fontFamily="body" fontWeight="medium">Expiration Date</FormControl.Label>
                        <HStack space={5}>
                            <Select w={"100%"} borderRadius={10} borderColor={'primary.50'}
                            />
                            <Select w={"100%"} borderRadius={10} borderColor={'primary.50'}
                            />
                        </HStack>
                    </FormControl>
                    <FormControl >
                        <FormControl.Label color="#111827" fontSize="14" fontStyle="normal" fontFamily="body" fontWeight="medium">CVC</FormControl.Label>
                        <Input borderRadius={10}
                            _input={{ color: "primary.50" }}
                            _focus={{ focusOutlineColor: 'primary.50' }} borderColor={'primary.50'} type={"text"} borderWidth={1}
                        />
                    </FormControl>
                </HStack>
                <HStack alignItems={"center"}>
                    <Switch offTrackColor={"grey.100"} onTrackColor="primary.50" />
                    <Text color="#AAAAAA" fontFamily="body" fontStyle="normal" fontSize={12} fontWeight="medium">Mark as default card</Text>
                </HStack>
            </VStack>
        </VStack>
    );
}
export default NewCard;