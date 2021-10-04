import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function RecipeBox ({ recipes }) {
    
    const {
        title,
        image,
    } = recipes

    return (
        <View style={styles.recipeBox}>
            <Image style={styles.foodImage} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
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
})