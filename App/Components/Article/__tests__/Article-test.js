/**
 * @format
 */

import 'react-native'
import React from 'react'
import Article from '../Article'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.useFakeTimers()

const props = {
  article: {
    title: '',
    byline: '',
    published_date: '',
    onArticleClick: jest.fn,
  },
}

it('renders correctly', async () => {
  renderer.create(<Article {...props} />)
})

it('simulate onPress article', async () => {
  const testRenderer = renderer.create(<Article {...props} />)
  const testInstance = testRenderer.root
  expect(testInstance.findByType(TouchableOpacity)).toBe('bar')
})
