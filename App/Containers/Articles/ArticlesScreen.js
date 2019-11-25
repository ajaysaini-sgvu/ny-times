import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import ArticlesActions from 'App/Stores/Articles/Actions'
import Style from './ArticlesScreenStyle'
import CONSTANTS from './Labels'
import Article from 'App/Components/Article'
import NavigationService from 'App/Services/NavigationService'

/**
 * Articles Screen - To display a list of articles
 */

export class ArticlesScreen extends React.Component {
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

  onArticleClick = (article) => {
    NavigationService.navigateAndReset('ArticleDetailScreen', { article })
  }

  render() {
    const { articles, articlesIsLoading } = this.props
    return (
      <View style={Style.container}>
        {articlesIsLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        <FlatList
          data={articles}
          renderItem={({ item }) => <Article article={item} onArticleClick={this.onArticleClick} />}
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
    articlesIsLoading: state.articles.articlesIsLoading,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesScreen)
