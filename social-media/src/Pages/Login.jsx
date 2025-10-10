import { Alert, Box, TextField, Typography, Button } from "@mui/material"

const Login = () => {
  return (
   <Box>
        <Typography variant="h3">Login</Typography>
        <Alert severity="warning" sx={{marginY: 2}}>username and password required</Alert>
        <form>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                <TextField placeholder="Username" fullWidth/>
                <TextField type="password" placeholder="Password" fullWidth/>
                <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Box>
        </form>
   </Box>
  )
}

export default Login