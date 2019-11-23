import { put, call } from 'redux-saga/effects'
import ArticlesActions from 'App/Stores/Articles/Actions'
import { articlesService } from 'App/Services/ArticlesService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch articles.
 * Feel free to remove it.
 */
export function* fetchArticles() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ArticlesActions.fetchArticlesLoading())

  // Fetch articles informations from an API
  const articles = yield call(articlesService.fetchArticles)
  if (articles) {
    yield put(ArticlesActions.fetchArticlesSuccess(articles))
  } else {
    yield put(ArticlesActions.fetchArticlesFailure('There was an error while fetching articles.'))
  }
}
