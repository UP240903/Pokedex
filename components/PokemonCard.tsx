import { View, Text, Image } from 'react-native'
import React from 'react'

interface PokemonCardProps {
    name: string;
    url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    console.log(id);
    const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
    <View>
        <Image source={{ uri: pokemonImageURL }} 
        style= {{width: 100, height: 100}}
        />
        <Text>{props.name}</Text>
        <Text>{props.url}</Text>
    </View>
    )
}