import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RecipesList from '../screens/RecipesList';
import RecipeDetails from '../screens/RecipeDetails';
import About from '../screens/about';

const screens = {
    
  RecipesList: {
    screen: RecipesList,
  },
  RecipeDetails: {
    screen: RecipeDetails,
  },
  About: {
    screen: About,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
