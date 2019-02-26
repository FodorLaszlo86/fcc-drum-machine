import React from 'react';

const VolumeCtrl = props => {
    return (
        <div id="volCtrl">
            <input type='range' min='0' max='1' step='0.01' onChange={ props.volumeCtrl } value={props.volNow} />
        </div>
    )
}

export default VolumeCtrl;