import React from "react";

const Keypad = (props) =>{
    const buttons = [1,2,3,4,5,6,7,8,9,"C","%","/","*","=","-","+",".","0"];

        
    return(
        <div>
            {buttons.map((button)=>(
                <button 
                key={button} 
                onClick={() => props.onClickButton(button)}
                style={{ margin: "5px", padding: "10px", minWidth: "40px" }}
                >
                    {button}
                </button>
            ))}

        </div>
    );
};

export default Keypad