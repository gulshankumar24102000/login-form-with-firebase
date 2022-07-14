import { Link } from '@mui/material'
import React from 'react'

export default function CustomLink({handleLink,message}) {
  return (
   <Link onClick={handleLink} href='#'>{message}</Link>
  )
}