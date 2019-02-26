import React from 'react';

const BankSwitch = ({ changeKit }) => {
    return (
        <div className="bank-switch__panel" onClick={ changeKit } >

            <button
                 id='bankOne' 
                 className='bank__btn'
                >
                Bank One
            </button>

            <button
                id='bankTwo' 
                className='bank__btn'
                >
                Bank Two
            </button>

        </div>
    )
}

export default BankSwitch;