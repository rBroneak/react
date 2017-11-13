import React from "react";

function ListMaker(props){
    return (
        <section className="align-left-top primary-content">
            <div className="flex-wrap">
            {
                props.list.map((listValue, index) => {
                    return <div className="card" key={index}>{listValue}</div>;
                })
            }
            </div>
        </section>
    )

};
export default ListMaker