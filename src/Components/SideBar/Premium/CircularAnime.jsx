import React, { useEffect } from 'react'
import './CircularAnime.css';
function CircularAnime() {
    let circularProgress = document.querySelector('.circular-progress');
    let progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;
    useEffect(()=>{
        let progress = setInterval(()=>{
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`
            circularProgress.style.background = `conic-gradient(blue ${progressStartValue*3.6}deg, pink 0deg)`
            if(progressStartValue === progressEndValue){
                clearInterval(progress);
            }
        },speed);
    })
    
    

  return (
    <div className='container'>
        <div className='circular-progress'>
            <span className='progress-value'>0%</span>
        </div>
        <span className='text'>abc</span>
    </div>
  )
}

export default CircularAnime