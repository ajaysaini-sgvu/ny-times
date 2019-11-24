import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ArticlesActions from 'App/Stores/Articles/Actions'
import Style from './ArticlesScreenStyle'
import CONSTANTS from './Labels'
import Article from 'App/Components/Article'

/**
 * Articles Screen - To display a list of articles
 */

class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: CONSTANTS.LBL_NAVIGATION_TITLE,
    headerStyle: {
      backgroundColor: '#34ebd2',
    },
    headerTintColor: '#fff',
  }

  componentDidMount() {
    const { fetchArticles } = this.props
    fetchArticles()
  }

  render() {
    const { articles } = this.props
    return (
      <View style={Style.container}>
        <FlatList
          data={articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(ArticlesActions.fetchArticles()),
})

const mapStateToProps = (state) => {
  return {
    articles: state.articles.results,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesScreen)
