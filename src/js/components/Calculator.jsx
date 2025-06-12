import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import "./calculatorStyle.css"



const Calculator = () => {

	const [input, setInput] = useState("0");

	const handleButtonClick = (value) => {
		if (value === `C`) {
			setInput("0")
		} else if (value === `=`) {
			const tokens = tokenize(input);
			const result = calculate(tokens);
			setInput(result.toString());
		} else if (value === "⌫") {
			deleteLastNum()
		} else if (value === "%") {
			setInput((prev) => {
				const match = prev.match(/(\d+\.?\d*)$/);
				if (!match) return prev;
				const number = match[1];
				const percentage = (parseFloat(number) / 100).toString();
				return prev.slice(0, -number.length) + percentage;
			});
		} else {
			setInput((prev) => {
				if (prev == 0) {
					return value.toString();
				}
				return prev + value
			})
		}
	};

	const deleteLastNum = () => {
		if (input.length == 1) {
			setInput("0")
		} else {
			setInput(input.slice(0, -1))
		}
	}


	const tokenize = (expression) => {
		const tokens = [];
		let current = '';
		for (let i = 0; i < expression.length; i++) {
			const char = expression[i];

			if ("0123456789.".includes(char)) {
				current += char;
			} else if ("+-X÷".includes(char)) {
				// Si es un signo negativo y es el primer carácter o está después de un operador:
				if (char === '-' && (i === 0 || "+-X÷".includes(expression[i - 1]))) {
					current += char; // es parte del número
				} else {
					if (current) {
						tokens.push(current);
						current = '';
					}
					tokens.push(char);
				}
			}
		}
		if (current) {
			tokens.push(current);
		}
		return tokens;
	};




	const calculate = (tokens) => {
		while (tokens.includes("X") || (tokens.includes("÷"))) {
			for (let i = 0; i < tokens.length; i++) {
				if ((tokens[i] == "X") || (tokens[i] == "÷")) {
					let left = parseFloat(tokens[i - 1]);
					let right = parseFloat(tokens[i + 1]);
					let result = tokens[i] == "X" ? left * right : left / right;
					tokens.splice(i - 1, 3, result.toString());
					break;

				}
			}
		}

		while (tokens.includes("+") || tokens.includes("-")) {
			for (let i = 0; i < tokens.length; i++) {
				if ((tokens[i] == "+") || (tokens[i] == "-")) {
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
		<div className="calculator">

			<Display value={input} />
			<Keypad onClickButton={handleButtonClick} />

		</div>
	);
};

export default Calculator;