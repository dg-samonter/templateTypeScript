import React from 'react'
import { shallow } from 'enzyme'
import ListItem from 'components/listItem'

describe('Tests to select item ', () => {
  test('should has input to write task', () => {
       const myValue = 'myValue';
        const selectedIndex = jest.fn();
        const onClick = jest.fn();
        const wrapper = shallow(<ListItem selected={selectedIndex} onClick={onClick} />);
        const button = wrapper.find('ListItemMaterial').first();
        button.simulate('click');
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toBeCalledWith(100);
        expect(selectedIndex).toBeCalledWith(myValue);
  })
})
