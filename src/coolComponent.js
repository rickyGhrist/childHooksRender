import { CoolComponentChild } from "./coolComponentChild";

export const CoolComponent = () => {
    console.log("rerendering coolComponent.js")
    return (
        <div>

            <CoolComponentChild />
            <CoolComponentChild />
            <CoolComponentChild />
            <CoolComponentChild />
            <CoolComponentChild />
            <CoolComponentChild />

        </div>
    );
}