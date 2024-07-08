import { Image } from 'react-native';
import { Center, VStack, HStack, AspectRatio, ArrowForwardIcon, Button, Column, Icon } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React from 'react';
import { RouterProps } from '../../../App';
const Onboarding3Screen = ({ navigation }: RouterProps) => {
  const onboard3 = Image.resolveAssetSource(require('./../../Assets/Images/On-BoardingIllustration3.png')).uri;
  const content3 = Image.resolveAssetSource(require('./../../Assets/Images/Content3.png')).uri;

  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      justifyContent={"space-between"}
    >
      <VStack space="md" justifyContent={"flex-end"} alignItems={"flex-end"}>
        <AspectRatio w={400} ratio={1}>
          <Image source={{ uri: onboard3 }} resizeMode="contain" />
        </AspectRatio>
        <AspectRatio w={400} ratio={1}>
          <Image source={{ uri: content3 }} resizeMode="contain" />
        </AspectRatio>
      </VStack>
      <HStack space={48} justifyContent={"space-between"}>
        <Button borderRadius={10} pl={5} pr={5} mb={5} bg="grey.50" _text={{ color: "primary.50" }} onPress={() => {navigation.navigate('SignUp')}}>
          Skip
        </Button>
        <Button _text={{ color: "primary.50" }} borderRadius={10} bg="secondary.50" onPress={() => navigation.navigate('SignUp')} pl={10} pr={10} mb={5}
          endIcon={<ArrowForwardIcon color="primary.50"/>}>
          Next
        </Button>
      </HStack>
    </Center>
  );
}
export default Onboarding3Screen;