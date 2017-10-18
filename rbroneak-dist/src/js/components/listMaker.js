import React from "react";

function ListMaker(props){
    return (
        <ul>
            {
                props.list.map((listValue, index) => {
                    return <li key={index}>{listValue}</li>;
                })
            }

        </ul>
    )

};
export default ListMaker