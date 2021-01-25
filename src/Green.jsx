import React from 'react';

function Green(props) {
    return (
        <nav>
            <div className="Button" >
                <button 
                onClick = {props.green}
                    >
                        Green 
                </button>
            </div>
        </nav>
    );
    
}

export default Green;