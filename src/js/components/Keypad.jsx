import React from "react";

const Keypad = (props) => {
    const buttons = [
        "C", "%", "÷", "⌫",
        "7", "8", "9", "X",
        "4", "5", "6", "-",
        "1", "2", "3","+",
        "0",".", "="
    ];


    return (
        <div className="keypad">
            {buttons.map((button) => {
                let className = "";

                if (button === "=") {
                    className = "equals";
                }

                return (
                    <button
                        key={button}
                        className={className}
                        onClick={() => props.onClickButton(button)}
                    >
                        {button}
                    </button>
                );
            })}

        </div>
    );
};

export default Keypad;