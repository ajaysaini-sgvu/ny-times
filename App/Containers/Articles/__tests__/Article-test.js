/**
 * @format
 */

import 'react-native'
import React from 'react'
import { ArticlesScreen } from '../ArticlesScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.useFakeTimers()

it('renders correctly', async () => {
  const props = {
    fetchArticles: jest.fn,
  }
  renderer.create(<ArticlesScreen {...props} />)
})
