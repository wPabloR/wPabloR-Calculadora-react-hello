import React from "react";

const Display = (props) => {
    return (
        <div
            style={{
                textAlign: "right",
                padding: "10px",
                fontSize: "2rem",
                border: "1px solid #ccc",
                minHeight: "50px",
                backgroundColor: "#f5f5f5"
            }}
        >
            {props.value || "0"}
        </div>
    );
};



export default Display;