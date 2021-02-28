import React from 'react';
import { mount } from "enzyme";
import Gif from '../../components/Gif/index' 

describe('<Gif />', () =>{
    const image = <img />;
    const title = 'batman'
    let wrapper;
    beforeEach(() =>{
        wrapper = mount(
                <Gif 
                    image={image}
                    title={title}  
                />)
    })
  
    it('Should be show component correctly', () => {
        expect(wrapper.exists()).toEqual(true)
    })

    it('debe tener una imagen igual al prop', () => {
        const img = wrapper.find('img');
        //console.log(img.props().alt);
        expect(img.props().alt).toBe(title)
        
    })

    afterEach(() => {
        wrapper.unmount();
    })
})