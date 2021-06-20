import React from 'react'
import {storiesOf } from '@storybook/react'

// import QuantityPicker from '../src/component/QuantityPicker';
import QuantityPicker from '../src/component/QuantityPicker/QuantityPicker';
const stories = storiesOf('App Test', module);
stories.add('QuantityPicker',()=>{
    return (<QuantityPicker value={5} min={4} max={30}/>);
})
