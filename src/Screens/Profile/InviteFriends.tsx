import { AspectRatio, Center, HStack, Icon, Text, VStack } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

const InviteFriends = ({ navigation }: RouterProps) => {
    const illustration = Image.resolveAssetSource(require('./../../Assets/Images/Illustration.png')).uri;
    return (
        <VStack space={10}>
            <AppBar title='Invite Your Friend' route={navigation} useBackIcon />
            <Center mx={10}>
                <AspectRatio w={250} ratio={1} m={16}>
                    <Image source={{ uri: illustration }} resizeMode="contain" />
                </AspectRatio>
                <Text fontFamily="body" fontStyle="normal" fontSize={24} lineHeight={32} fontWeight={"bold"}>Refer A Friend</Text>
                <Text textAlign={"center"} px={10} color={"grey.200"} fontFamily="body" fontStyle="normal" fontSize={17} lineHeight={24} fontWeight={400}>Share Your Promo Code & Get $3 For Each Friend</Text>
            </Center>
            <HStack borderColor={"primary.50"} borderWidth={1} borderRadius={10} mx={10} justifyContent={"space-between"} p={5} bg={"primary.100"}>
                <Text color={"primary.50"} fontFamily="body" fontStyle="normal" fontSize={17} fontWeight={500}>EatlyPartnerMR</Text>
                <Icon as={<FontAwesomeIcon color={'#004852'} icon={faCopy} />} />
            </HStack>
        </VStack>
    );
}
export default InviteFriends;