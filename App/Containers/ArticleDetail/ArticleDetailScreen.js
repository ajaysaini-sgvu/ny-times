import React from 'react'
import { HeaderBackButton } from 'react-navigation'
import { View, Text } from 'react-native'
import CONSTANTS from './Labels'
import NavigationService from 'App/Services/NavigationService'
import Style from './ArticleDetailStyle'

/**
 * Article Detail Screen - To display a article detail
 */

class ArticleDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: CONSTANTS.LBL_NAVIGATION_TITLE,
    headerStyle: {
      backgroundColor: '#34ebd2',
    },
    headerTintColor: '#fff',
    headerLeft: <HeaderBackButton tintColor="#fff" onPress={() => navigation.goBack(null)} />,
  })

  render() {
    const { navigation } = this.props
    const article = navigation.getParam('article')
    return (
      <View style={Style.container}>
        <Text>{article.abstract}</Text>
      </View>
    )
  }
}

export default ArticleDetailScreen
