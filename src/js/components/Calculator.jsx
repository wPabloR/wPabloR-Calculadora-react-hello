import React, {useState} from "react";
import Display from "./Display";
import Keypad from "./Keypad";




const Calculator = () => {

	const [input, setInput] = useState("");

	const handleButtonClick = (value) => {
		if (value === `C`){
			setInput(0)
		} else if (value === `=`){
			setInput()
		} else {
			setInput((prev) => prev + value)
		}
	}

	return (
		<div>

			<Display value={input}/>
			<Keypad onClickButton={handleButtonClick}/>
           
		
		</div>
	);
};

export default Calculator;