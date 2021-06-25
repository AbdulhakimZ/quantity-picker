import React,{ useState, useEffect}  from 'react';
import './index.css'
import './smooth.css'
export const  QuantityPicker = props => {

const [value, setValue] = useState(props.value?props.value:0)

const handleChange = (nm) => (event)=>{
  const plusValue  = Number(value) + 1;
  const minusValue = Number(value) - 1;
  switch(nm){
      case 'increment':{
          if(props.max === undefined){
              setValue(plusValue);
              props.onChange && props.onChange(plusValue);
          }
          else if(plusValue <= Number(props.max)){
              setValue(plusValue);
              props.onChange && props.onChange(plusValue)
          }        
          break;
      }
      case 'decrement':{
        if(props.min === undefined){
          setValue(minusValue);
          props.onChange && props.onChange(minusValue)
        }
        else if(minusValue >= Number(props.min)){
            setValue(minusValue);
            props.onChange && props.onChange(minusValue)
          }
        break;
      }
      case 'input':{
        if(props.min === undefined && props.max === undefined){
          if(!isNaN(event.target.value)){
            setValue(event.target.value)
            props.onChange && props.onChange(event.target.value)
          }
        }
        else if(event.target.value >= Number(props.min) && event.target.value <= Number(props.max)){
          if(!isNaN(event.target.value)){
              setValue(event.target.value)
              props.onChange && props.onChange(event.target.value)
          }

        }
        }
        break
      }
}
useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  // if(props.value !== undefined){
  //   if(!isNaN(props.value))
  //     setValue(props.value)
  //   else if(props.min !== undefined){
  //     setValue(props.min)
  //     }
  // }else if(props.min !== undefined){
  //   setValue(props.min)
  // }
  return function cleanup() {
    abortController.abort();
  };
}, []);

    return (
      props.smooth ? 
      <div style={{width:props.width?props.width:'10rem'}} data-quantity="">
        <button onClick={handleChange('decrement')} type="button" 
                title="Down" className="sub">Down</button>
        <input  style={{width:props.width?props.width:'10rem'}}  
                value={value} type="number" name="quantity" pattern="[0-9]+"  
                onChange={handleChange('input')}/>
        <button type="button" title="Up" 
                className="add" onClick={handleChange('increment')}>Up</button>
      </div>
       :
       <span className="quantity-picker">
        <button className={`${props.disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} 
        onClick={handleChange('decrement')}>&ndash;</button>
        <input style={{width:props.width?props.width:'4rem'}} className="quantity-display" type="text" 
        value={value} onChange={handleChange('input')} />
        <button className={`${props.disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} 
        onClick={handleChange('increment')}>&#xff0b;</button>
      </span>
      
    );
}