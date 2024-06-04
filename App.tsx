import React from "react";
import { NativeBaseProvider, Box, extendTheme, Center, HStack, Icon, Pressable, Text } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Router from "./src/Navigations";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSquareCheck, faEyeSlash)
const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#004852",
      },
      secondary: {
        50: "#e8f54b"
      },
      // Redefining only one shade, rest of the color will remain same.
      grey: {
        50: "#efefef",
        100: "#CBCBCB",
        200: "#EFF4F6",
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
      initialColorMode: "light"
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