import React, {useState} from "react";

export default function Point({colors, rowIndex, locked, setRowPointColor}){
    colors = ['empty', ...colors];
    const [index, setIndex] = useState(0);

    const changeColor = () => {
        if (!locked){
            setIndex(index < colors.length - 1 ? index+1 : 1);
            setRowPointColor(rowIndex, colors[index+1]);
        }
    }

    return (
        <>
            <div onClick={changeColor} data-color={colors[index]} className={"bullet-point-dest"}>
                <div></div>
            </div>
        </>
    );
}