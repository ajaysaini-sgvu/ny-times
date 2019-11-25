/**
 * @format
 */

import 'react-native'
import React from 'react'
import ArticleDetail from '../ArticleDetailScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.useFakeTimers()

it('renders correctly', async () => {
  const props = {
    navigation: {
      getParam: jest.fn,
    },
  }
  renderer.create(<ArticleDetail {...props} />)
})
