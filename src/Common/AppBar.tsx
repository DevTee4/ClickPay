import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { NavigationProp } from "@react-navigation/native";
import { Text, HStack, IconButton, Icon, Badge, VStack, Button } from "native-base";
import { Pressable } from "react-native";


type AppBarProps = {
    route?: NavigationProp<any, any>;
    title: string;
    useNotifyIcon?: boolean;
    useBackIcon?: boolean;
};
const AppBar = (options: AppBarProps) => {
    return (
        <>
            <HStack
                mx={10} // Spacing for the left and right of the container.
                pb={2} // Spacing for the bottom of the container.
                pt={10} // Spacing for the top of the container.
                justifyContent={options.useNotifyIcon ? "space-between" : "center"} // Aligns the items in the container horizontally.
                alignItems="center" // Aligns the items in the container vertically.
                borderBottomColor={"grey.100"} // Color of the bottom border.
                borderBottomWidth={1} // Width of the bottom border.
            >
                {options.useBackIcon ?
                    <Pressable onPress={() => options.route.goBack()}>
                        <Icon as={<FontAwesomeIcon size={24} icon={faArrowLeftLong} />} />
                    </Pressable> : null}
                {/* The title of the application bar. */}
                <HStack w={options.useBackIcon?"95%":"null"} alignItems="center" justifyContent={"center"}>

                    <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={23}>
                        {options.title}
                    </Text>
                </HStack>
                {/* The notification icon. */}
                {options.useNotifyIcon ?
                    <VStack>
                        <IconButton icon={<FontAwesomeIcon icon={faBell} size={24} />} />
                    </VStack> : null}
            </HStack>
        </>
    );
}
export default AppBar;