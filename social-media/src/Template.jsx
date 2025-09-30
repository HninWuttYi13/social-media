import { Container, Box } from '@mui/material';
import Header from './components/Header'
import AppDrawer from './components/AppDrawer'
import { Outlet } from "react-router-dom";
const Template = () => {
  return (
    <Box>
        <Header/>
        <AppDrawer/>
        <Container maxWidth="sm" sx={{mt: 4}}>
            <Outlet/>
        </Container>
    </Box>
  )
}

export default Template