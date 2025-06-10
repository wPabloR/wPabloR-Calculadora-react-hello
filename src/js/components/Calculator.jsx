import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";




const Calculator = () => {

	const [input, setInput] = useState("0");

	const handleButtonClick = (value) => {
		if (value === `C`) {
			setInput("0")
		} else if (value === `=`) {
			const tokens = tokenize(input);
			const result = calculate(tokens);
			setInput(result.toString());
		} else {
			setInput((prev) => {
				if (prev == 0){
					return value.toString();
				}
				return prev + value
			})
		}
	};


	const tokenize = (expresion) => {
		return expresion.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
	};

	const calculate = (tokens) => {
		while (tokens.includes("*") || (tokens.includes("/"))) {
			for (let i = 0; i < tokens.length; i++) {
				if ((tokens[i] == "*") || (tokens[i] == "/")) {
					let left = parseFloat(tokens[i - 1]);
					let right = parseFloat(tokens[i + 1]);
					let result = tokens[i] == "*" ? left * right : left / right; 
					tokens.splice(i - 1, 3, result.toString());
					break;					
					
				}	
			}
		}

		while (tokens.includes("+") || tokens.includes("-")) {
			for (let i = 0; i < tokens.length; i++){
				if ((tokens[i] == "+") || (tokens[i] == "-")){
					let left = parseFloat(tokens[i - 1]);
					let right = parseFloat(tokens[i + 1]);
					let result = tokens[i] == "+" ? left + right : left - right;
					tokens.splice(i - 1, 3, result.toString());
					break;
				}
			}	
		}
		return tokens[0]
	}

	return (
		<div>

			<Display value={input} />
			<Keypad onClickButton={handleButtonClick} />

		</div>
	);
};

export default Calculator;