import React from 'react';

const Display = ({ soundName, activeKit, currentVol }) => {
    return (
        <div id='display' className='display'>
            <div className='display__secondary'>
                <div id='activekit-display' className='display__activekit'>{ activeKit }</div>
                <div className='display__volume'>Vol: { Math.floor(currentVol * 100) }</div>
            </div>
            <div id="display-sound-name" className='display__primary'>{ soundName }</div>
        </div>
    )
}

export default Display;