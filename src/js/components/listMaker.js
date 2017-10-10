import React from "react";

function ListMaker(props){
    return (
        <ul style={props.listSpace}>
            {
                props.list.map((listValue, index) => {
                    return <li key={index}>{listValue}</li>;
                })
            }

        </ul>
    )

};
export default ListMaker