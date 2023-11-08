import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/theme';
import HomeScreen from '../screens/home/home';
import MovieDetailScreen from '../screens/movie/movie_detail';
import SearchScreen from '../screens/search/search';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
        <Stack.Screen
          name={SCREENS.MovieDetail}
          component={MovieDetailScreen}
        />
        <Stack.Screen
          name={SCREENS.SearchScreen}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
