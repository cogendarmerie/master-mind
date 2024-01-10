import React from "react";
import Point from "./point";
import Hint from "./indice";

export default function Row({colors}) {
    return (
        <>
            <div className={"grid-row"}>
                <Point />
                <Point />
                <Point  />
                <Point />
                <div className={"hint-container"}>
                    <div>
                        <Hint />
                        <Hint />
                    </div>
                    <div>
                        <Hint />
                        <Hint />
                    </div>
                </div>
            </div>
        </>
    );
}