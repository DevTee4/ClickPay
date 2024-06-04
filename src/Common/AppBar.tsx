import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, HStack, IconButton, Icon, Badge, VStack, Button } from "native-base";


type AppBarProps = {
    title: string;
};
const AppBar = (options: AppBarProps) => {

    return <>
        <HStack mx={10} pb={2} pt={10} justifyContent="space-between" alignItems="center" borderBottomColor={"grey.100"} borderBottomWidth={1}>
            <HStack alignItems="center">
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={23}>
                    {options.title}
                </Text>
            </HStack>
            <VStack>
                {/* <Badge bg={"primary.50"} rounded="full" mb={-4} zIndex={1} variant="solid" alignSelf="flex-end">1</Badge> */}
                <IconButton icon={<FontAwesomeIcon icon={faBell} size={24} />} />
            </VStack>
        </HStack>
    </>;
}
export default AppBar;