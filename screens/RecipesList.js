import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { colors } from '../utils/index'
import { StatusBar } from 'expo-status-bar';
import ReloadIcon from '../components/ReloadIcon'
import { apikey } from '@env'
// import Navigator from '../routes/homeStack'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function RecipesList ({ navigation }) {
    
    const detailsScreen = () => {
        navigation.push('RecipeDetails');
      }
    
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
          console.log(response[0].instructions)
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
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', item)} style={styles.recipeBox}>
                <View>
                    <Image style={styles.foodImage} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item item={item} />
    );
  
    return (
        <View style={styles.container}>

            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <ReloadIcon load={getRecipes} />

        </View>


    );
  }

const styles = StyleSheet.create({
    recipeBox: {
        marginVertical: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 20,
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    foodImage: {
        width: 350,
        height: 220,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'center',

    },
    title: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '800',
        margin: 10,
        alignSelf: 'flex-start',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      },
    //   title: {
    //     fontSize: 35,
    //     color: '#fff'
    //   },
      button: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#0645AD'
      },
      buttonText: {
        color: '#fff'
      }, quote: {
        fontSize: 17,
        textAlign: 'center',
        fontStyle: 'italic'
      },
      source: {
        textAlign: 'right',
        marginTop: 15
      },
      quoteContainer: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5
      }
    
})