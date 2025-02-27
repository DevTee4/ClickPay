import React from "react";
import { NativeBaseProvider, extendTheme} from "native-base";
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import Router from "./src/Navigations";
import { Dimensions } from "react-native";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  routeName?: string;
}
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#004852",
        100: "#e5edee",
      },
      secondary: {
        50: "#e8f54b"
      },
      // Redefining only one shade, rest of the color will remain same.
      grey: {
        50: "#efefef",
        100: "#CBCBCB",
        200: "#969696",
        // 200: "#EFF4F6",
        300: "#A8A8A8",
        400: "#323142",
        500: "#666666",

      }
    },
    fontConfig: {
      Poppins: {
        100: {
          normal: 'PoppinsThin-8KoZ',
          italic: 'PoppinsThinItalic-0bXH',
        },
        200: {
          normal: 'PoppinsExtraLight-jfZ1',
          italic: 'PoppinsExtraLightItalic-8Qp5',
        },
        300: {
          normal: 'PoppinsLight-l4Zw',
          italic: 'PoppinsLightItalic-nexO',
        },
        400: {
          normal: 'PoppinsRegular-B2Bw',
        },
        500: {
          normal: 'PoppinsMedium-1JPv',
          italic: 'PoppinsMediumItalic-REKE',
        },
        600: {
          normal: 'PoppinsSemiBold-8l8n',
          italic: 'PoppinsSemiBoldItalic-Y132',
        },
        700: {
          normal: 'PoppinsBold-GdJA',
          italic: 'PoppinsBoldItalic-jgZy',
        },
        800: {
          normal: 'PoppinsExtraBold-zDdL',
          italic: 'PoppinsExtraBoldItalic-5J8v',
        },
        900: {
          normal: 'PoppinsBlack-VxOe',
          italic: 'PoppinsBlackItalic-JXmK',
        },
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
      disableTransitionOnChange: false,
      cssVarPrefix: "nativebase",

    },
    components: {
      Text: {
        baseStyle: {
          fontFamily: "Poppins",
        },
      },
    }
  });
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;