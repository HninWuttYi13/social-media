import { Typography, Box } from '@mui/material'
import React from 'react'
import UserList from '../components/UserList'

const Likes = () => {
  return (
    <Box>
      <Typography variant="h4">Likes</Typography>
      <UserList key={1} />
    </Box>
  );
}

export default Likes