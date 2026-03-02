import { useEffect } from "react";
import { Text, View } from "react-native";


export default function Index() {
    useEffect(() => {
    console.log("Entre en pantalla");
    getPokemon();
  }, []);


  const getPokemon = async () => {
    try {
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  const response = await fetch(URL, {
    method: "GET",
  });


  if (response.ok) {
    console.log("request ok ");
    }else {
      console.log("bard request");
    } 
  } catch (error) {
    console.log("error en la consulta");
  };
}

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
  }
