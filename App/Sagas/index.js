import { takeLatest, all } from 'redux-saga/effects'
import { ArticlesTypes } from 'App/Stores/Articles/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchArticles } from './ArticlesSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchArticles()` when a `FETCH_ARTICLES` action is triggered
    takeLatest(ArticlesTypes.FETCH_ARTICLES, fetchArticles),
  ])
}
