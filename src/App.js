import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from '@material-ui/core'
import Stars from './assets/stars.png'
import Moon from './assets/moon.png'
import MountainsBehind from './assets/mountains_behind.png'
import MountainsFront from './assets/mountains_front.png'
import Comet from './assets/comet.png'
import Light from './assets/light.jpg'

function App() {
    const animation = () => {
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
                <section className='d-flex justify-content-center align-content-center'>
                    <img src={Stars} alt='stars' id='stars'/>
                    <img src={Moon} alt='moon' id='moon'/>
                    <img src={MountainsBehind} alt='mountains behind' id='mountainsBehind'/>
                    <img src={Comet} id='comet' alt={'comet'} />
                    <button id='button' onClick={animation} className='button-style'>Experience</button>
                    <img src={MountainsFront} alt='mountains front' id='mountainsFront'/>
                </section>

            <div className='content-wrapper d-flex justify-content-center flex-column' id='sec'>
                <div className='d-flex flex-column justify-content-center content'>
                    <h2>What is Create?</h2>
                    <p>Create isn't just a digital media company. Create allows you creatively entice your target market
                        with cutting edge technology, stunning media, and new ways to bring your story home.</p>
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