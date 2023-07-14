import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { selecionaNome } from "../../store/reducers/usuario/usuarioSlice";
import { useAppSelector } from "../../store/hooks";

export default function Detalhes() {
  const Router = useRouter()
  const usuario = useAppSelector(selecionaNome);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Detalhes - {usuario} </Text>
      <Text onPress={Router.back}> Detalhes </Text>
    </View>
  );
}
