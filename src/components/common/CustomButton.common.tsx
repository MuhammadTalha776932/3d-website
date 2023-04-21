import * as React from "react";

import state from "../../store/index.store";
import { useSnapshot } from "valtio";

interface ICustomeButtonProps {
    type: string
    title: string;
    handleClick: () => boolean;
    customStyles: string
}

const CustomButton = ({ type, title, customStyles, handleClick }: ICustomeButtonProps) => {

    // ? Access the valtio state color here
    const snap = useSnapshot(state);
    // ? generateStyle function create the style object based on type value

    const generateStyle = (type: string) => {
        if (type === "filled") {
            const CustomButtonStyling: React.CSSProperties = {
                backgroundColor: snap.color,
                color: "#fff",
            }

            return {
                ...CustomButtonStyling
            }
        }
    }


    return (
        <button
            className={`px-4 py-2.5  rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {
                title
            }
        </button>
    )
}

export default CustomButton