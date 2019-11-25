/**
 * @format
 */

import { articlesService } from '../ArticlesService'

jest.useFakeTimers()

describe('test article service', () => {
  it('resolves fetchArticles', async () => {
    await expect(articlesService.fetchArticles()).resolves.toBeDefined()
  })
})
