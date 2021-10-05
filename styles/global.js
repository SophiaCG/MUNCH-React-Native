import { StyleSheet } from 'react-native';

// const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export const globalStyles = StyleSheet.create({
    cardOutline: {
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 20,
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    cardImage: {
        width: 350,
        height: 220,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'center',
    },
    cardText: {
        fontSize: 20,
        color: '#002651',
        fontWeight: '800',
        margin: 10,
        alignSelf: 'flex-start',
    },
    
    detailsTitle: {
        fontSize: 28,
        color: '#002651',
        fontWeight: '700',
        margin: 15,
        alignSelf: 'flex-start',
    },
    detailsImage: {
        width: '100%',
        height: 280,
        alignSelf: 'center',
        // borderRadius: 30,
        marginBottom: 30,
    },
    ingredientsOutline: {
        width: 350,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 5,
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    ingredientsText: {
        fontSize: 16,
        color: '#002651',
        fontWeight: '400',
        margin: 8,
        alignSelf: 'flex-start',

    },

    instructionsText: {
        fontSize: 14,
        color: '#002651',
        fontWeight: '500',
        marginVertical: 12,
        marginHorizontal: 14,
        alignSelf: 'flex-start',
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
  }

});
