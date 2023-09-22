import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ value }) => {
    const [values, setValues] = useState([50]);

    useEffect(() => {
        setValues([value])
    }, [value])


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "0 2em",
                alignItems: 'center',
                width: "96%"
            }}
        >
            <Range
                values={values}
                step={0.1}
                min={0}
                max={100}
                onChange={(newValues) => setValues(newValues)}
                renderTrack={({ props, children }) => (
                    <div
                        className="helloRange"
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div
                            className="trackLine"
                            ref={props.ref}
                            style={{
                                width: "100%",
                                borderRadius: "50px",
                                background: getTrackBackground({
                                    values,
                                    colors: ["#4A4A4A", "transparent"],
                                    min: 1,
                                    max: 100
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "50px",
                            width: "70px",
                            borderRadius: "50px",
                            backgroundColor: "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "5px",
                            backgroundColor: "#4A4A4A",
                            border: '10px solid #fff'
                        }}
                    >
                        <div
                            style={{
                                height: "16px",
                                width: "4px",
                                backgroundColor: "#6e6e6e"
                            }}
                        />
                        <div
                            style={{
                                height: "16px",
                                width: "4px",
                                backgroundColor: "#6e6e6e"
                            }}
                        />
                        <div
                            style={{
                                height: "16px",
                                width: "4px",
                                backgroundColor: "#6e6e6e"
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default CustomRange;