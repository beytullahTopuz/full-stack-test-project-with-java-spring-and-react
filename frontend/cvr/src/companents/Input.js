import React from "react";

const Input = (props) => {
    const className = props.error ? "form-control is-invalid" : "form-control";
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input name={props.name} className={className} onChange={props.onChange} placeholder={props.placeholder} required></input>
            <div className="invalid-feedback">{props.error}</div>
        </div>
    );
}

export default Input;