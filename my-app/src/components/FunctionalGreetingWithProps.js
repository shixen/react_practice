import React from "react";

const FunctionalGreeingWithProps = (props) => {
console.log(props);
return <h1> howdy!, {props.greeting} my name is {props.name} and im {props.age} yeard old </h1>;
}

export default FunctionalGreeingWithProps;