import React, { FC, useState, ComponentPropsWithoutRef, PropsWithChildren } from "react";

type props = PropsWithChildren<{
    id: number;
    style: React.CSSProperties;
    children: ComponentPropsWithoutRef<"p">;
}>;

interface CircleButtonProps {
    icon: string;
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const GameCircle: FC<props> = ({ id, style, children }) => {
    const [hidden, setDisplay] = useState(false);
    const toggleVisibility = (event: React.MouseEvent<HTMLElement>, id: number): void => {
        hidden===true?setDisplay(false)
            :setDisplay(true);
    }

    return (
        <button style={style} onClick={(event) => toggleVisibility(event,id)}>
            <p hidden={hidden}>{children} {id}</p>
        </button>
    );
};

export default GameCircle;