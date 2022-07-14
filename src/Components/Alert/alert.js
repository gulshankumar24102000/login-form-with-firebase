import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function AlertBox({visible,severity,message}) {
    return (
        <>
            {visible &&
                <Alert severity={severity} >
               {message}
            </Alert>}
           
        </>
   
  );
}
