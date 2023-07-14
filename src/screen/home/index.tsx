import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { TouchableOpacity } from 'react-native';
import { useAppDispatch } from "../../store/hooks";
import { alterarNome } from "../../store/reducers/usuario/usuarioSlice";


export default function Home() {
    const dispatch = useAppDispatch();

  return ( 
    <View>
      <Stack.Screen options={{ title: 'Home' }}/>
      <Text> teste home </Text>
      <TouchableOpacity
            onPress={() =>
              dispatch(alterarNome('teste'))
            }>
            <Text>Add Amount</Text>
        </TouchableOpacity>
      <Link href={"/detalhes"}> Detalhes </Link>
    </View>
  );
}
