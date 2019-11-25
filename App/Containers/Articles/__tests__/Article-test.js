/**
 * @format
 */

import React from 'react'
import { ArticlesScreen } from '../ArticlesScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.useFakeTimers()

describe('test article screen', () => {
  const props = {
    fetchArticles: jest.fn,
  }

  it('renders correctly', () => {
    renderer.create(<ArticlesScreen {...props} />)
  })
})
