import { Stack, Typography } from '@mui/material'; // Stack arranges items one dimensionally as a column or row
import { Link } from 'react-router-dom';

const Navbar = () => (
    // p = padding. With sx you can provide any styles to your material ui component
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ 
        position: 'sticky', 
        zIndex: 1,
        height: '90px',
        backgroundColor: 'black',
        opacity: 0.9,
        top: 0, 
        justifyContent: 'space-between',
        boxShadow: '0px 0.5px 10px rgba(255, 255, 255, 0.8)', // Add the boxShadow property for a subtle glow effect
      }}> 
      
      <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Hello</Typography>
        <img src="src/Screenshot_2023-07-02_at_6.35.50_pm-removebg-preview.png" alt="logo" height={45}/>
      </Link>
    </Stack>
)

export default Navbar