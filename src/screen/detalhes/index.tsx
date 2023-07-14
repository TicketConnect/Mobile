import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Detalhes() {    
  return ( 
    <View>
        <Stack.Screen options={{ title: 'detalhes' }}/>
        <Text> Detalhes </Text>
    </View>
  );
}
