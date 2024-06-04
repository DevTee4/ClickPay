import { FormControl, HStack, Input } from "native-base"
import React from "react"

const PinCode = () => {

    return (
        <FormControl>
            <HStack w="100%" justifyContent={"space-around"}>
                <Input maxLength={1} focusOutlineColor={'primary.50'} borderColor={'grey.100'} size={"2xl"} textAlign={"center"} inputMode='numeric' textContentType='oneTimeCode' width="20%" variant="underlined" />
                <Input maxLength={1} focusOutlineColor={'primary.50'} borderColor={'grey.100'} size={"2xl"} textAlign={"center"} inputMode='numeric' textContentType='oneTimeCode' width="20%" variant="underlined" />
                <Input maxLength={1} focusOutlineColor={'primary.50'} borderColor={'grey.100'} size={"2xl"} textAlign={"center"} inputMode='numeric' textContentType='oneTimeCode' width="20%" variant="underlined" />
                <Input maxLength={1} focusOutlineColor={'primary.50'} borderColor={'grey.100'} size={"2xl"} textAlign={"center"} inputMode='numeric' textContentType='oneTimeCode' width="20%" variant="underlined" />
            </HStack>
        </FormControl>
    );
}
export default PinCode;