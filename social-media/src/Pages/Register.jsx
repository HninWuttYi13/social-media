import { Alert, Box, Button, TextField, Typography} from '@mui/material'

const Register = () => {
  return (
    <Box>
      <Typography variant="h3">Register</Typography>
      <Alert severity="warning" sx={{ marginY: 3 }}>
        All fields required
      </Alert>
      <form>
        <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
          <TextField placeholder="Name" fullWidth />
          <TextField placeholder="username" fullWidth />
          <TextField placeholder="bio" fullWidth />
          <TextField type="password" placeholder="password" fullWidth />
          <Button type='submit' variant='contained' fullWidth>Register</Button>
        </Box>
      </form>
    </Box>
  );
}

export default Register