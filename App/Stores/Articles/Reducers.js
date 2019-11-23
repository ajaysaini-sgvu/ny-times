/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ArticlesTypes } from './Actions'

export const fetchArticlesLoading = (state) => ({
  ...state,
  articlesIsLoading: true,
  articlesErrorMessage: null,
})

export const fetchArticlesSuccess = (state, { articles }) => ({
  ...state,
  articles,
  articlesIsLoading: false,
  articlesErrorMessage: null,
})

export const fetchArticlesFailure = (state, { errorMessage }) => ({
  ...state,
  articles: {},
  articlesIsLoading: false,
  articlesErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ArticlesTypes.FETCH_ARTICLES_LOADING]: fetchArticlesLoading,
  [ArticlesTypes.FETCH_ARTICLES_SUCCESS]: fetchArticlesSuccess,
  [ArticlesTypes.FETCH_ARTICLES_FAILURE]: fetchArticlesFailure,
})
