import { AspectRatio, Box, Button, FormControl, HStack, Heading, Icon, Input, ScrollView, Select, Switch, Text, VStack } from "native-base";
import { RouterProps } from "../../../App";
import AppBar from "../../Common/AppBar";
import { faCreditCard, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

/**
 * Renders the NewCard component.
 *
 * @param {RouterProps} navigation - The navigation object for navigating between screens.
 * @return {ReactElement} The rendered NewCard component.
 */
/**
 * The NewCard component is used to add a new card.
 * It contains a form for entering card information.
 * @param {RouterProps} navigation - The navigation object.
 * @returns {JSX.Element} The NewCard component.
 */
const NewCard = ({ navigation }: RouterProps): JSX.Element => {
    // Get the URI of the master card image
    const masterCard = Image.resolveAssetSource(require('./../../Assets/Images/masterCard.png')).uri;
    // Get the URI of the QR code image
    const qrCode = Image.resolveAssetSource(require('./../../Assets/Images/QrCode.png')).uri;
    return (
        <VStack space={5}>
            {/* App bar */}
            <AppBar title='Add New Card' route={navigation} useBackIcon />
            {/* Card container */}
            <VStack space={10}
                borderRadius={"3xl"}
                overflow="hidden"
                bg="primary.50" maxH={"209px"} h={"209px"}
                p={5}
                mx={10}
                style={{ elevation: 5, shadowColor: 'black' }}
            >
                {/* Card information */}
                {/* Other components left out for brevity */}
            </VStack>
            {/* Form container */}
            <Heading lineHeight={28} mx={10} fontSize="20" fontStyle="normal" fontFamily="body" fontWeight="medium">Enter Information</Heading>
            <ScrollView h={"55%"}>
                <VStack mx={10} space={10}>
                    {/* Card number input */}
                    {/* Other form inputs left out for brevity */}
                </VStack>
            </ScrollView>
            {/* Next button */}
            <Button mb={10} onPress={() => navigation.navigate('CardSettings')} borderRadius={10} p={3} bg={"primary.50"}>Next</Button>
        </VStack>
    );
}
export default NewCard;