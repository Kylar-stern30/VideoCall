import { Typography, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VideoPlayer from './Componentes/VideoPlayer';
import Options from './Componentes/Options';
import Notifications from './Componentes/Notifications';
import './App.css';



const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar}  position="static" color="inherit">
        <Typography variant="h2" align='center'>Video chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
