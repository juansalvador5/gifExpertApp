import React from 'react'
import {mount} from 'enzyme'
import App from '../App'

describe('<App />', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(<App />)
    })

    it('debe mostrar <App />', () => {
        expect(wrapper.exists()).toEqual(true)
    })
    afterEach(()=>{
        wrapper.unmount();
    })
})