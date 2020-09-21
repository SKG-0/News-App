import { AsyncStorage } from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import NewsScreen from './screens/NewsScreen'
import SearchScreen from './screens/SearchScreen'
import SearchedNews from './screens/SearchedNews'
import SearchBarScreen from './screens/SearchBarScreen'
import LoadingScreen from './screens/LoadingScreen'
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:{screen:LoadingScreen},
      Home:{screen:HomeScreen},
      News:{screen:NewsScreen},
      Search:{screen:SearchScreen},
      SearchedNews:{screen:SearchedNews},
      SearchBarScreen:{screen:SearchBarScreen}
    },
    {
      initialRouteName:'Loading'
    }
  )
)
