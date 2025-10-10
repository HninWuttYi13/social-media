import { Avatar, Card, Typography } from '@mui/material'
import React from 'react'

const UserList = () => {
  return (
    <Card sx={{display: "flex", alignItems: "center", gap: 2, padding: 1, marginY: 2}}>
        <Avatar/>
        <Typography variant='h5'>Alice</Typography>
    </Card>
  )
}

export default UserList