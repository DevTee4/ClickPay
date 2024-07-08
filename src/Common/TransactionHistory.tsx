import { IconDefinition, faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { HStack, Select, Icon, Box, VStack, Text, FlatList } from "native-base"
import React from "react"
import { Pressable } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { RouterProps } from "../../App"
export type TransactionProps = {
    iconName: IconDefinition,
    transactionType: string,
    transactionLabel: string,
    iconColor: string,
    iconBgColor: string,
    amount: string
}
type TransactionHistoryProps = {
    route?: RouterProps,
    transactionHistory: TransactionProps[],
    listHeight: number,
    mx?: number
}
const TransactionHistory = (options: TransactionHistoryProps) => {
    const [period, setPeriod] = React.useState<string>();
    return (<VStack mx={options.mx ? options.mx : 0}>
        <HStack space={1} justifyContent={"space-between"} alignItems={"center"}>
            {options.route ?
                <Pressable android_ripple={{ color: "primary.50" }} onPress={() => options.route.navigation.navigate(options.route.routeName)}>
                    <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={21}>Transactions History</Text>
                </Pressable> :
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={21}>Transactions History</Text>}
            <Select placeholder="Today" color={"grey.200"} mt={1.5} _selectedItem={{ endIcon: <Icon as={<FontAwesomeIcon color='#52525b' icon={faCheck} />} /> }} size={"container"} dropdownIcon={<Icon bg={"transparent"} size={"xs"} as={<FontAwesomeIcon color='#969696' icon={faChevronDown} />} />} selectedValue={period} minWidth="120" onValueChange={itemValue => setPeriod(itemValue)} variant='unstyled'>
                <Select.Item label="Today" value="today" />
                <Select.Item label="Yesterday" value="yesterday" />
                <Select.Item label="Last week" value="last week" />
                <Select.Item label="Last month" value="last month" />
                <Select.Item label="Last year" value="last year" />
            </Select>
        </HStack>
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            maxH={options.listHeight}
            minH={options.listHeight}
            maxW={"100%"}
            ListEmptyComponent={<Text fontSize={18} fontWeight={"700"} color={"grey.200"}>No transactions found</Text>}
            data={options.transactionHistory}
            renderItem={({ item, index }) =>
                <HStack my={2} maxH="60px" key={index} justifyContent={"space-between"} alignItems={"center"}>
                    <HStack justifyContent={"space-between"} alignItems={"center"} space={4}>
                        <Box _text={{ opacity: 5 }} bgColor={item.iconBgColor} p={5} borderRadius={"2xl"}>
                            <Icon _important={{ opacity: 95, color: item.iconColor }} as={<FontAwesomeIcon size={20} color={item.iconColor} icon={item.iconName} />} />
                        </Box>
                        <VStack justifyContent={"space-around"} space={1}>
                            <Text fontWeight={500} fontSize={18} lineHeight={28}>{item.transactionLabel}</Text>
                            <Text fontWeight={500} fontSize={11} lineHeight={28}>{item.transactionType}</Text>
                        </VStack>
                    </HStack>
                    <Text fontWeight={"700"} fontSize={18}>{item.amount}</Text>
                </HStack>
            }
        />
    </VStack>)
}
export default TransactionHistory;