import React, {useState} from "react";
import Point from "./point";
import Hint from "./indice";

function checkRow(row, valid) {
    let correctCount = 0;
    let misplacedCount = 0;

    const frequencyValid = {};
    const frequencyUser = {};

    //Vérifier les couleurs bien placés
    for (let i = 0; i < 4; i++) {
        if (row[i] === valid[i]) {
            correctCount++;
        } else {
            frequencyValid[row[i]] = (frequencyValid[row[i]] || 0) + 1;
            frequencyUser[valid[i]] = (frequencyUser[valid[i]] || 0) + 1;
        }
    }

    //Vérifier les couleurs correct mais mal places
    for (const color in frequencyValid) {
        if (frequencyUser[color] && frequencyUser[color] > 0) {
            frequencyUser[color]--;
            misplacedCount++;
        }
    }

    let hintColors = [];
    for (let i = 0; i < 4; i++) {
        if(correctCount > 0) {
            hintColors.push("black");
            correctCount--;
        } else if(misplacedCount > 0) {
            hintColors.push("red");
            misplacedCount--;
        } else {
            hintColors.push("empty");
        }
    }

    return hintColors;
}

export default function Row({colors, validRow}) {
    const [pointsColors, setPointsColors] = useState(["empty", "empty", "empty", "empty"]);
    const [locked, setLocked] = useState(false);
    const [hintColors, setHintColors] = useState(["empty", "empty", "empty", "empty"]);

    const setRowPointColor = (index, color) => {
        setPointsColors(pointsColors => {
            const newPointsColors = [...pointsColors];
            newPointsColors[index] = color;
            return newPointsColors;
        });
    }

    return (
        <>
            <div className={"grid-row"}>
                <Point colors={colors} rowIndex={0} locked={locked} setRowPointColor={setRowPointColor}/>
                <Point colors={colors} rowIndex={1} locked={locked} setRowPointColor={setRowPointColor}/>
                <Point colors={colors} rowIndex={2} locked={locked} setRowPointColor={setRowPointColor}/>
                <Point colors={colors} rowIndex={3} locked={locked} setRowPointColor={setRowPointColor}/>

                <div className={"part-right"}>
                    <div className={"hint-container"}>
                        <Hint colors={hintColors} />
                    </div>
                    <div>
                        <button onClick={()=>{setLocked(true); setHintColors(checkRow(pointsColors, validRow));}}>Check</button>
                    </div>
                </div>
            </div>
        </>
    );
}