import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { colors } from '../utils/index'
import { StatusBar } from 'expo-status-bar';
import ReloadIcon from '../components/ReloadIcon'
import { apikey } from '@env'
import { globalStyles } from '../styles/global';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function RecipesList ({ navigation }) {
    
    // const detailsScreen = () => {
    //     navigation.push('RecipeDetails');
    //   }
    
    let [recipes, setRecipes] = React.useState([[]])

    const getRecipes = () => {
      fetch("https://random-recipes.p.rapidapi.com/ai-quotes/5", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "random-recipes.p.rapidapi.com",
          "x-rapidapi-key": apikey
        }
      })
        .then(response => response.json())
        .then(response => {
          // setData(response[0].title);
          setRecipes(response)
          console.log(response[0].title)
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    React.useEffect(() => {
      getRecipes();
    }, []);
  
    const Item = ({ item }) => (
      <View>
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', item)} style={globalStyles.cardOutline}>
                <View>
                    <Image style={globalStyles.cardImage} source={{ uri: item.image }} />
                    <Text style={globalStyles.cardText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item item={item} />
    );
  
    return (
        <View>

            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <ReloadIcon load={getRecipes} />

        </View>


    );
  }

// const styles = StyleSheet.create({
    
// })