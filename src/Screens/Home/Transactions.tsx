import React from "react";
import { RouterProps } from "../../../App";
import { faCheck, faChevronDown, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { VStack, HStack, Select, Icon, Text, Avatar } from "native-base";
import AppBar from "../../Common/AppBar";
import TransactionHistory from "../../Common/TransactionHistory";
import { Avatars, transactionHistory } from "./Home";

const Transactions = ({ navigation }: RouterProps) => {
    const [period, setPeriod] = React.useState("");
    return (
        <VStack space={7}>
            <AppBar title='Transactions' route={navigation} useBackIcon />
            <Text mx={10} fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={21}>Recipients</Text>
            <HStack space={3} mx={10} justifyContent={"center"}>
                    <Avatars />
                    <Avatar size={"lg"} bg="grey.100">
                        <Icon as={<FontAwesomeIcon size={20} color='#52525b' icon={faEllipsisH} />} />
                    </Avatar>
                </HStack>
            <TransactionHistory mx={10} transactionHistory={transactionHistory} listHeight={400} />
        </VStack>
    )
}
export default Transactions;