import React from 'react';
import TextField from 'material-ui/TextField';
import { v4 } from 'uuid';


const InputField = (props) => (
    <TextField
        type={props.type}
        name={props.name}
        id={v4()}
        floatingLabelText={props.label}
        value={props.value || ''}
        onChange={(e) => props.onChange(props.keyType, e)}
        margin="normal"
        style={{ width: '100%' }}
        autoComplete="off"
    />
);
 

export default InputField;