import { Image } from 'react-native';
import { Center, VStack, HStack, AspectRatio, ArrowForwardIcon, Button } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import { RouterProps } from '../../../App';



export function SplashScreen({ navigation }: RouterProps) {
  const logoUri = Image.resolveAssetSource(require('./../../Assets/Images/Logo.png')).uri;

  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      justifyContent="center"
    >
      <VStack alignItems="center" space="md">
        <AspectRatio w={100} ratio={1}>
          <Image source={{ uri: logoUri }} resizeMode="contain" />
        </AspectRatio>
      </VStack>
      <HStack
        position="absolute"
        bottom={0}
        right={0}
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Button bg="primary.50" onPress={() => navigation.navigate('Onboarding')} pl={5} pr={5} mr={5} mb={5}>
          <ArrowForwardIcon size="2xl" color="secondary.50"/>
        </Button>
      </HStack>
    </Center>
  );
}