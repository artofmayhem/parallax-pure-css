import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from '@material-ui/core'
import Stars from './assets/stars.png'
import Moon from './assets/moon.png'
import MountainsBehind from './assets/mountains_behind.png'
import MountainsFront from './assets/mountains_front.png'
import Comet from './assets/comet.png'
import Light from './assets/light.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal'
import React from 'react'

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand(); 
  
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
    
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '0 auto'
  },
}));
function App() {
    const animation = () => {
       // alert("Welcome to Digirest sleep tracker")
        handleOpen()
        const stars = document.getElementById('stars');
        //console.log(stars)
        const moon = document.getElementById('moon');
        const mountainsBehind = document.getElementById('mountainsBehind');
        const comet = document.getElementById('comet');
        const button = document.getElementById('button');
        const mountainsFront = document.getElementById('mountainsFront');
        const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
            const value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountainsBehind.style.top = value * 0.5 + 'px';
            mountainsFront.style.top = value + 'px';
            comet.style.marginLeft = value * 3 + 'px';
            button.style.top = value * 1.5 + 'px';
            header.style.top = value * 0.04 + 'px';
        })
    }

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    //const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={{ textAlign: 'center', opacity: '0.7', boxShadow: '0 0 2vh white', borderRadius: '50px', padding: '3vh 1vw', justifyItems: 'center', alignItems: 'center'}} className={classes.paper}>
        <h2 id="simple-modal-title">Welcome to Digirest</h2>
        <p id="simple-modal-description">
         Continue to scroll and learn how to take control of your sleep habits.
        </p>
        <SimpleModal/>
      </div>
    );
    //animation()
    return (
        <div>
            <header className='d-flex flex-row flex-wrap justify-content-between' id='header'
                    style={{backgroundColor: '#222', color: 'white', opacity: '0.6'}}>
                <div className='d-flex flex-row flex-wrap justify-content-between'>
                    <h1 style={{fontSize: '10vh'}}>Digirest</h1>
                    <h5>Sleep Tracker</h5>
                </div>
                <div className='d-flex flex-row flex-wrap links'>
                    <Button className='btn btn-light' color='inherit' size='large'>Home</Button>
                    <Button className='btn btn-light' color='inherit' size='large'>Intro</Button>
                    <Button className='btn btn-light' color='inherit' size='large'>Mindset</Button>
                    <Button className='btn btn-light' color='inherit' size='large'>Connect</Button>
                </div>
            </header>
                <section className='d-flex justify-content-center align-content-center' style={{width: '100vw'}}>
                    <img src={Stars} alt='stars' id='stars'/>
                    <img src={Moon} alt='moon' id='moon'/>
                    <img src={MountainsBehind} alt='mountains behind' id='mountainsBehind'/>
                    <img src={Comet} id='comet' alt={'comet'} />
                    <button id='button' onClick={animation} className='button-style'>Experience</button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ margin: '30vh 36vw'}}
      >
        {body}
      </Modal>
                    <img src={MountainsFront} alt='mountains front' id='mountainsFront'/>
                </section>

            <div className='content-wrapper d-flex justify-content-center flex-column' id='sec'>
                <div className='d-flex flex-column justify-content-center content'>
                    <h2>Improve your sleeping habits with Digirest</h2>
                    <p>Digirest isn't just a digital sleep tracker. Digirest allows you track your sleep habits
                        with cutting edge technology, stunning media, and new ways to ensure you have the best sleep of your life.</p>
                    <br/>
                    <p>Create isn't just an idea. It's a way of life.</p>
                    <h2 style={{padding: '7vh 0'}}>How do we create....?</h2>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start align-content-start'
                 style={{backgroundColor: 'yellow', zIndex: '10', textAlign:'center'}}>
                <h2 style={{
                    margin: 'auto auto',
                    fontSize: '8vh',
                    color: '#222',
                    padding: '50vh 0',
                    boxShadow: '0 0 5vh yellow'
                }}>In Vivid Detail</h2>
            </div>
            <div id={'color'}/>
            <div className='content-wrapper d-flex justify-content-center flex-column' id='sec'>
                <div className='d-flex flex-column justify-content-center content' style={{backgroundColor: 'black', border: 'none'}}>
                    <h2 style={{padding: '30vh 35vw'}}>Why do we Create?</h2>
                </div>
            </div>
            <div id={'splash'}/>
            <div className='content-wrapper d-flex justify-content-center flex-column'
                 style={{backgroundColor: '#f15bb5'}}>
                <div className='d-flex flex-column justify-content-center content align-content-center'
                     style={{padding: '30vh 0', color: 'white', textAlign: 'center', backgroundColor: '#000', opacity: '0.95', border:'1px solid #444'}}>
                    <h2 id={'bold'}>To bring your products...</h2>
                </div>
            </div>
            <div id={'bolder'}/>
            <div className='content-wrapper d-flex justify-content-center flex-column'
                 style={{backgroundColor: 'white'}}>
                <div className='d-flex flex-column justify-content-center content align-content-center'
                     style={{padding: '30vh 0', color: 'black', textAlign: 'center', backgroundColor: '#fff', opacity: '0.95', boxShadow:'none'}}>
                    <h2 id={'bold2'}>To Life</h2>
                </div>
            </div>
            <div id={'light'}/>
            <div id={'dark'}>
                <div className='d-flex flex-row flex-wrap justify-content-between align-content-center'>
                    <h1 style={{fontSize: '20vh', marginTop: '40vh', marginLeft: '10vw', textShadow: '0 0 1vh #fff'}}>Create</h1>
                    <img src={Light} alt={'light'} style={{maxWidth: '100vw', marginTop: '10vh', boxShadow: '0 0 5vh orange'}}/>
                    <h5 style={{fontSize: '10vh', marginLeft: '60vw' }}>Digital Media</h5>
                    <h6 style={{fontSize: '5vh', marginLeft: '60vw', marginBottom: '5vh'}}>Honolulu 96822</h6>
                </div>
            </div>

        </div>
    );

}


export default App;