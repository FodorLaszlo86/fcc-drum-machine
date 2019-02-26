import React from 'react';

const Tab = props => {
    let { tabSound, audioPlayOnClick, loudness } = props;
    return (
        <div className='drum-pad' id={ tabSound.name } onClick={ audioPlayOnClick }>
            {  props.title }
            <audio 
                src={ tabSound.url }
                id={ props.id } 
                className='clip' 
                muted={ false }
                volume={ loudness } 
                type='audio/mpeg'
                autoPlay={ false }
                loop={ false } 
            />
        </div>
    )
}

export default Tab;