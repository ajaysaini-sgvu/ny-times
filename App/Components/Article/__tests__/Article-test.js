/**
 * @format
 */

import { TouchableOpacity } from 'react-native'
import React from 'react'
import Article from '../Article'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.useFakeTimers()

describe('test article component', () => {
  const props = {
    article: {
      title: '',
      byline: '',
      published_date: '',
    },
  }

  it('renders correctly', () => {
    renderer.create(<Article {...props} />)
  })

  it('simulate onPress article', () => {
    const mockFunction = jest.fn()
    const testRenderer = renderer.create(<Article {...props} onArticleClick={mockFunction} />)
    testRenderer.root.findByType(TouchableOpacity).props.onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
})
