import { Center, VStack, Button, Box, AspectRatio, Stack } from 'native-base';
import { NavigationProp } from "@react-navigation/native";
import React from 'react';
import {
    ImagePickerResponse,
    launchCamera,
    ImageLibraryOptions,
    launchImageLibrary,
} from 'react-native-image-picker';
import { Image } from 'react-native';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}
var imageOptions: ImageLibraryOptions = {
    mediaType: 'photo',
    maxHeight: 2000,
    maxWidth: 2000,
};


const YourPhoto = ({ navigation }: RouterProps) => {
    const photo = Image.resolveAssetSource(require('./../../Assets/Images/ScanningPhoto.png')).uri;
    const [selectedImage, setSelectedImage] = React.useState<string>("");
    const handleCameraLaunch = () => {
        launchCamera(imageOptions, async (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorMessage);
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };
    return (
        <Stack
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent="flex-end"
        >
            <VStack >
                <AspectRatio h={800} maxW={496}>
                    <Image 
                        source={{
                            uri: `${selectedImage ? selectedImage : photo}`,
                        }}
                    />
                </AspectRatio>
            </VStack>
            <Box position={"absolute"} safeArea w="100%" p={10}>
                <VStack >
                    <Button onPress={() => handleCameraLaunch()} p={4} bg="secondary.50" borderRadius={10} _text={{ color: "black", style: { fontWeight: 'bold' } }}>
                        TAKE PHOTO
                    </Button>
                </VStack>
            </Box>
        </Stack>
    );
}
export default YourPhoto;
