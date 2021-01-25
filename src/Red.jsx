import React from 'react';

function Red(props) {
    return (
        <nav>
            <div className="Button" >
                <button 
                onClick = {props.red}
                    >
                        Red 
                </button>
            </div>
        </nav>
    )
}

export default Red;