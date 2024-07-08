import { Box, Text, HStack, Heading, Icon, VStack, View, Avatar, CheckIcon, Select, Input, Center, Stack, ScrollView, FlatList } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from 'react';
import AppBar from '../../Common/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faCcMastercard, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions, Image, LayoutChangeEvent, Pressable, StyleSheet } from 'react-native';
import { IconDefinition, faArrowDown, faBagShopping, faBolt, faCheck, faChevronDown, faEllipsisH, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import TransactionHistory, { TransactionProps } from '../../Common/TransactionHistory';
import { RouterProps } from '../../../App';
type DataProps = {
    iconName: IconDefinition,
    expiryDate: string,
    amount: string,
    cardNo: string
}

const SLIDER_WIDTH = Dimensions.get('window').width + 0;
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const CarouselData: DataProps[] = [
    {
        iconName: faCcMastercard,
        expiryDate: "11/22",
        amount: "$10,000.00",
        cardNo: "4576 5321 0255 7854"
    },
    {
        iconName: faCcVisa,
        expiryDate: "01/24",
        amount: "£30,000.00",
        cardNo: "4576 5321 0255 7854"
    },
    {
        iconName: faCcStripe,
        expiryDate: "06/20",
        amount: "₦1,000,000.00",
        cardNo: "4576 5321 0255 7854"
    }
]
const CarouselCardItem = ({ item, index }) => {
    return (
        <Box
            maxW="full"
            rounded="3xl"
            overflow="hidden"
            mx={10}
            my={5}
            style={{ elevation: 5, shadowRadius: 10, shadowColor: 'black' }}
        >
            <VStack bg="primary.50" maxH={"209px"} justifyContent={"space-between"}>
                <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                    <Icon as={<FontAwesomeIcon size={24} color='white' icon={faCreditCard} />} />
                    <Icon as={<FontAwesomeIcon size={20} color='white' icon={item.iconName} />} />
                </HStack>
                <HStack p={5} w={"100%"} justifyContent={"space-between"}>
                    <Text color={"white"}>{item.cardNo}</Text>
                    <Text color={"grey.100"}>{item.expiryDate}</Text>
                </HStack>
            </VStack>
            <HStack bg={"secondary.50"} alignItems="center" space={4} justifyContent="space-between">
                <Text
                    p={5}
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
            </HStack>
        </Box>
    )
}

const CarouselCards = () => {
    const isCarousel = React.useRef<null>();
    const [index, setIndex] = React.useState<number>();
    return (
        <View>
            <Carousel
                layout="default"
                // onLayout={e => { }}
                vertical={false}
                // layoutCardOffset={200}
                ref={isCarousel}
                data={CarouselData}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                onSnapToItem={e => setIndex(e)}
            />
            <Pagination
                dotsLength={CarouselData.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: '#004852'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

export const Avatars = () => {
    const avatar = Image.resolveAssetSource(require('./../../Assets/Images/Avatar.png')).uri;
    const avatar2 = Image.resolveAssetSource(require('./../../Assets/Images/Avatar2.png')).uri;
    const avatar3 = Image.resolveAssetSource(require('./../../Assets/Images/Avatar3.png')).uri;
    return <Stack ml={-4}>
        <Avatar.Group
            // _image={{ src: avatar,opacity: 25 }}
            space={3}
            _avatar={{ size: "lg" }}
            _hiddenAvatarPlaceholder={{ _image: { src: avatar }, opacity: 50, bg: "primary.50" }}
            max={3}
        >
            <Avatar
                source={{
                    uri: avatar
                }}
            >
                <Avatar.Badge bg="green.500" />
            </Avatar>
            <Avatar bg="cyan.500" source={{
                uri: avatar2
            }}>
                <Avatar.Badge bg="cyan.500" />
            </Avatar>
            <Avatar bg="red.500" source={{
                uri: avatar3
            }}>
                <Avatar.Badge bg="red.500" />
            </Avatar>
            <Avatar opacity={5} bg="red.500" source={{
                uri: avatar
            }}>
                AU
                <Avatar.Badge bg="red.500" />
            </Avatar>
            <Avatar bg="red.500" source={{
                uri: avatar
            }}>
                {/* AU */}
                <Avatar.Badge bg="red.500" />
            </Avatar>
        </Avatar.Group>
    </Stack>;
};
export const transactionHistory: TransactionProps[] = [
    {
        amount: "- 40.99",
        iconName: faBolt,
        iconColor: "#F4A101",
        iconBgColor: "#D08900",
        transactionType: "Payment",
        transactionLabel: "Gym"
    },
    {
        amount: "+ $460.00",
        iconName: faTicketAlt,
        iconColor: "#5ECB6C",
        iconBgColor: "#29B83C",
        transactionType: "Deposit",
        transactionLabel: "AI-Bank"
    },
    {
        amount: "$ 12.50",
        iconName: faBagShopping,
        iconColor: "#F0B9E3",
        iconBgColor: "#DA95CA",
        transactionType: "Payment",
        transactionLabel: "McDonald"
    }
]

const Home = ({ navigation }: RouterProps) => {
    return (
        <Stack bg={"blueGray.50"} h={SCREEN_HEIGHT}>
            <AppBar title='Welcome, Tom!' useNotifyIcon />
            <CarouselCards />
            <VStack mx={10} justifyContent={"space-between"}>
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={21} color={"grey.100"}>
                    Total balance
                </Text>
                <Pressable android_ripple={{ color: "primary.100" }} onPress={() => navigation.navigate('ExpenseDetails')}>
                    <Heading fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} my={5}>
                        $ 13,553.00
                    </Heading>
                </Pressable>
                <Text fontFamily="body" fontWeight="500" fontStyle="normal" fontSize={21}>Recipients</Text>
                <HStack space={3}>
                    <Avatars />
                    <Avatar size={"lg"} bg="grey.100">
                        <Icon as={<FontAwesomeIcon size={20} color='#52525b' icon={faEllipsisH} />} />
                    </Avatar>
                </HStack>
                <TransactionHistory transactionHistory={transactionHistory} listHeight={160} route={{ navigation: navigation, routeName: "Transactions" }} />
            </VStack>
        </Stack>
    );
}
export default Home;