import React from 'react';
import tamaEgg from '../assets/images/tamagotchi.png'
import tama from '../assets/images/tama.png'

function Tamagotchi() {

  const egg = {
    marginLeft: '270px',
    marginTop: '270px',
    height: '60%',
    width: '60%',
    position: 'absolute',
    zIndex: '1',
  }

  const character = {
    zIndex: '2',
    marginLeft: '500.5px',
    marginTop: '495px',
    position: 'absolute',
    height: '292px',
    width: '275px',
    borderRadius: '10px',
  }

  const feedButton = {
    zIndex: '4',
    marginLeft: '513px',
    marginTop: '870.25px',
    position: 'absolute',
    height: '20px',
    width: '20px',
    borderRadius: '10px',
    backgroundColor: '#6760A3',
    borderColor: '#6760A3',
  }

  const sleepButton = {
    zIndex: '4',
    marginLeft: '615px',
    marginTop: '882px',
    position: 'absolute',
    height: '45px',
    width: '45px',
    borderRadius: '22.5px',
    border: '1px red',
    backgroundColor: '#6760A3',
    borderColor: '#6760A3',
  }

  const playButton = {
    zIndex: '4',
    marginLeft: '742.5px',
    marginTop: '869.75px',
    position: 'absolute',
    height: '20px',
    width: '20px',
    borderRadius: '10px',
    backgroundColor: '#6760A3',
    borderColor: '#6760A3',
  }




  return (
    <div>
    <img style={egg} src={tamaEgg}/>
    <img style={character} src={tama}/>
    <button style={feedButton} ></button>
    <button style={sleepButton}></button>
    <button style={playButton}></button>
    </div>

  );
}

export default Tamagotchi;
