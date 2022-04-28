import React from 'react'
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
  const history = useHistory();
  return (
    <div className='center column'>
      <h4>🤞Welcome, user!!!</h4>
      <h3>Try to use every part of my single page application</h3>
      <h3>This page have <span style={{ color: "crimson" }}>"dark-mode"</span> also, try it.</h3>
      <h3>To contact us, visit about page </h3>
      <Fab onClick={() => { history.push("/beast") }} color="primary" aria-label="add">
        <PlayArrowIcon />
      </Fab>
    </div>
  )
}

export default Home