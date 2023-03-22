import { CoolComponentChild } from "./coolComponentChild";

export const CoolComponent = () => {
    console.log("rerendering coolComponent.js")
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>

            {numbers.map(() =>
                    <CoolComponentChild />
            )}

        </div>
    );
}