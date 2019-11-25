import { put, takeLatest } from 'redux-saga/effects'
import { fetchArticles } from '../ArticlesSaga'
import ArticlesActions from 'App/Stores/Articles/Actions'

describe('Article saga', () => {
  let generator
  beforeEach(() => {
    generator = fetchArticles()
    generator.next()
  })

  it('should dispatch fetchArticlesFailure action', () => {
    generator.next()
    expect(generator.next().value).toEqual(
      put(ArticlesActions.fetchArticlesFailure('There was an error while fetching articles.'))
    )
  })

  it('should dispatch fetchArticlesSuccess action', () => {
    const articles = {
      copyright: '',
      num_results: 1,
      results: [{}],
      status: 'OK',
    }
    generator.next()
    const actual = generator.next(articles)
    expect(actual.value).toEqual(put(ArticlesActions.fetchArticlesSuccess(articles)))
  })
})
