import { useEffect, useState } from "react";
import { Text, View, ScrollView} from "react-native";
import PokemonCard from "../components/PokemonCard"; 
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


interface Pokemon {
  name: string;
  url: string;
}



export default function Index() {
    const [result, setResult] = useState<Pokemon[]>([]);
    useEffect(() => {
    console.log("Entre en pantalla");
    getPokemon();
  }, []);


  const getPokemon = async () => {
    try {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const response = await fetch(URL, {
    method: "GET",
  });


  if (response.ok) {
    const data = await response.json();
    setResult(data.results);
    }else {
      console.log("bard request");
    } 
  } catch (error) {
    console.log("error en la consulta");
  };
}

  return (
    <ScrollView>
      {result.map((item)=> {
        return <PokemonCard 
        key = {item.name}
        name={item.name} 
        url={item.url}
        />;
      })}
    </ScrollView>
  );
  }
