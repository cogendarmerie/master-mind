import React from "react";

export default function Hint({colors}) {
    return (
        <>
            <div className={"hint"} data-color={colors[0]}>
                <div>

                </div>
            </div>
            <div className={"hint"} data-color={colors[1]}>
                <div>

                </div>
            </div>
            <div className={"hint"} data-color={colors[2]}>
                <div>

                </div>
            </div>
            <div className={"hint"} data-color={colors[3]}>
                <div>

                </div>
            </div>
        </>
    );
}