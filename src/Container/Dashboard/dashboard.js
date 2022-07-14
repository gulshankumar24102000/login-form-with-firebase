import { Button, Typography } from '@mui/material'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase'

export default function Dashboard() {

    const router = useNavigate();
    useEffect(() => {
        const authentication = onAuthStateChanged(auth,(user) => {
            if (user) {
               
            } else {
                router('/login')
           }
        }) 
        
        return authentication
    },[])

    const handleChange = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signout");
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
      <>
        <Typography variant='h3'>Welcome to Dashboard</Typography>
        <Button onClick={handleChange}>Logout</Button>
      </>
  )
}