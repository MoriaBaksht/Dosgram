import React, { useMemo } from 'react'; 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate ,useLocation} from 'react-router-dom';

export default function PostButton() {
    const location = useLocation();
    const  categoryId = location.state.id;

    const nav=useNavigate()

    const boxStyle = useMemo(
        () => ({
          position: 'fixed',
          left: 300,
          top: '55px', 
          marginLeft: '-180px',
          zIndex: 1000, 
        }),
        []
      );
  return (
<>
<Box sx={{ '& > :not(style)': { m: 1 } }} style={boxStyle}>  
  <span>id:{categoryId}</span>
      <Fab variant="extended" onClick={() => nav(`/addPostButton/${categoryId}`)}>
        <NavigationIcon sx={{ mr: 2 }}  />
        add post
      </Fab>
    </Box>
    </>
  );
}