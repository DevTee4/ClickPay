import { RouterProps, SCREEN_HEIGHT } from '../../../App';
import React from 'react';
import AppBar from '../../Common/AppBar';
import { VStack, Text, Box, HStack, Icon, View, Button, Radio, Switch } from 'native-base';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCcMastercard, faCcVisa, faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, Pressable } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


type DataProps = {
    iconName: IconDefinition,
    expiryDate: string,
    amount: string,
    cardNo: string
}

const SLIDER_WIDTH = Dimensions.get('window').width * 0.7;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
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

const CarouselCards = ({navigation, routeName}: RouterProps) => {
    const isCarousel = React.useRef<null>();
    const [index, setIndex] = React.useState<number>();
    return (
        <Pressable onPress={()=> navigation.navigate(routeName)} >
            <Carousel
                layout="default"
                vertical={false}
                ref={isCarousel}
                data={CarouselData}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={e => setIndex(e)}
            />
        </Pressable>
    )
}
const Card = ({ navigation }: RouterProps) => {
    return (
        <VStack space={7}>
            <AppBar title='Services' route={navigation} useBackIcon />
            <Text mx={10} lineHeight={40} fontWeight="bold" fontStyle="normal" fontSize={35}>My Cards</Text>
            <HStack mx={10} justifyContent={"space-between"} w={"53%"}>
                <Text borderRadius={10} px={4} py={2} color={"grey.100"} bg={"primary.50"} lineHeight={21} fontWeight="medium" fontStyle="normal" fontSize={14}>Physical Card</Text>
                <Text borderRadius={10} px={4} py={2} color={"grey.200"} bg={"grey.100"} lineHeight={21} fontWeight="medium" fontStyle="normal" fontSize={14}>Virtual Card</Text>
            </HStack>
            <HStack mx={10} alignItems={"center"}>
                <Pressable onPress={()=> navigation.navigate('NewCard')} >
                    <VStack borderColor={"primary.50"} py={10} borderRadius={"xl"} borderWidth={1} borderStyle={"dashed"} alignItems={"center"} space={6} justifyContent={"center"}>
                        <Text fontFamily="body" fontStyle="normal" fontSize={12} fontWeight={400} color={"primary.50"} style={{ transform: [{ rotate: '270deg' }] }} >Add Card</Text>
                        <Icon as={<FontAwesomeIcon size={20} color='#004852' icon={faPlus} />} />
                    </VStack>
                </Pressable>
                <CarouselCards navigation={navigation} routeName='CardDetails' />
            </HStack>
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
        </VStack>
    );
}
export default Card;