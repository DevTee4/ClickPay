import { Center, VStack, Button, Box, Text } from 'native-base';
import { RouterProps } from '../../../App';

const Card = ({ navigation }: RouterProps) => {
    return (
        <Center
            flex={1}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            justifyContent={"start"}
        >
                <Text fontFamily="body" fontWeight="700" fontStyle="normal" fontSize={36} mb={2}>
                    This is Card
                </Text>
                
        </Center>
    );
}
export default Card;