import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Detalhes() { 
  const Router = useRouter()
   
  return ( 
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Detalhes </Text>
        <Text onPress={Router.back}> Detalhes </Text>
    </View>
  );
}
