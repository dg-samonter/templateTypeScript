import React from 'react'
import { shallow } from 'enzyme'
import ListItem from 'components/listItem'

describe('Tests to select item ', () => {
  test('should has input to write task', () => {
    const wrapper = shallow(<ListItem />)
    const inputs = wrapper.find('div')
    expect(inputs.length).toBe(1)
  })
})
