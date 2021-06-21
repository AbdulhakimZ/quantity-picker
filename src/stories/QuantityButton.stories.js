import React from 'react'
import {storiesOf } from '@storybook/react'

import { QuantityPicker } from '../component/QuantityPicker';

const stories = storiesOf('App Test', module);
let val = 5;
const change = (val) =>{
    console.log(val)
}
stories.add('QuantityPicker',()=>{
    console.log(val)
    return (<QuantityPicker onChange={(valu)=>{console.log(valu)}}/>);
})
