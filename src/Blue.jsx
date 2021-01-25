import React from 'react';

function Blue(props) {
    return (
        <nav>
            <div className="Button" >
                <button 
                onClick = {props.blue}
                    >
                        Blue
                </button>
            </div>
        </nav>
    );
    
}

export default Blue;