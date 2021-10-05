import React from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RecipeDetails({ navigation }) {

  // const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

  // const pressHandler = () => {
  //   navigation.goBack();
  // }
  // const aboutButton = () => {
  //   //navigation.navigate('ReviewDetails');
  //   navigation.push('About');
  // }

  const Item = ({ item }) => (

    <View>
        <Text style={globalStyles.instructionsText}>{item}</Text>
    </View>

  );
  const renderItem = ({ item }) => (
    <Item item={item.text} />
  );

  return (
  
      <SafeAreaView style={{flex: 1}}>

            <FlatList
                data={navigation.getParam('instructions')}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                  <>
                    <Text style={globalStyles.detailsTitle}>{navigation.getParam('title')}</Text>
                    <Image style={globalStyles.detailsImage} source={{ uri: navigation.getParam('image') }} />
                    <Text style={globalStyles.cardText}>Ingredients:</Text>
                    {navigation.getParam('ingredients').map(info => <View style={globalStyles.ingredientsOutline}><Text style={globalStyles.ingredientsText}>{info}</Text></View>)}
                    <Text style={globalStyles.cardText}>Instructions:</Text>
                  </>
                }
                // ListFooterComponent={

                // }
          
            />

        </SafeAreaView>

  );
}

// const styles = StyleSheet.create({
//   foodImage: {
//       width: 350,
//       height: 220,
//       borderTopLeftRadius: 20,
//       borderTopRightRadius: 20,
//       alignSelf: 'center',

//   },
// })