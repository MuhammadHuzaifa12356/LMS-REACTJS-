
import * as React from 'react';
import Button from '@mui/material/Button';



export default function SMButton(props){
    const{color,variant,disabled,label}=props;
    return(
   <>
    <Button
     variant={variant}
     color={color}
     disabled={disabled}
     label={label}
    
    />
  </>
    );
    
}