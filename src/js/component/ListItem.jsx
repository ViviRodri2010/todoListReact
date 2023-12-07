import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    task: PropTypes.string,
    index: PropTypes.number
}
const ListItem=(props)=>{
    const returnTask =()=>{
        return props.task;
    }
    const handleRemove =()=>{

    };
    return(
        <>
            <li>
                <p>{returnTask()}</p>
                <button onClick={handleRemove}>X</button>
            </li>
        </>
    );
};
export default ListItem;