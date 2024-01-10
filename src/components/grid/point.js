import React from "react";

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
function changeColor(){

}

export default function Point(){
    return (
        <>
            <div data-color={colors[Math.floor(Math.random() * colors.length)]} className={"bullet-point-dest"}>
                <div></div>
            </div>
        </>
    );
}