import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import ReloadIcon from './components/ReloadIcon'
import { apikey } from '@env'
import RecipesList from './screens/RecipesList';
import Navigator from './routes/homeStack'

export default function App() {
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

  const Item = ({ recipes }) => (
    <View>
      <TouchableOpacity onPress={console.log()} style={[styles.title]}>
        <RecipesList recipes={recipes} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item recipes={item} />
  );

  return (
    <Navigator />
    // <View style={styles.container}>


    //   <FlatList
    //     data={recipes}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    //   <ReloadIcon load={getRecipes} />


    // </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
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
  
});
