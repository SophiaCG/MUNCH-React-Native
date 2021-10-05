import React from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RecipeDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const aboutButton = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('About');
  }

  const Item = ({ item }) => (

    <View>
        <Text>{item}</Text>
    </View>

  );
  const renderItem = ({ item }) => (
    <Item item={item.text} />
  );

  return (
    <View style={globalStyles.container}>
      <Text>{ navigation.getParam('title')}</Text>
      <Image style={styles.foodImage} source={{ uri: navigation.getParam('image') }} />
      <Text>{ navigation.getParam('ingredients')}</Text>


  
        <View>

            <FlatList
                data={navigation.getParam('instructions')}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </View>




    </View>
  );
}

const styles = StyleSheet.create({
  foodImage: {
      width: 350,
      height: 220,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignSelf: 'center',

  },
})