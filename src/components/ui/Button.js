import styled from "styled-components";



const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props){
        if (props.variant === "primary") {
            return "linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516)";
        } 

        else if (props.variant === "secondary") {
            return "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)";
        } 

        else {
            return "#4361ee";
        }
    }}
`


export default Button;