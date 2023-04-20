import { useState } from "react";
type TitreProps = {
    oneClick: () => void
}


export const Button = ({oneClick}:TitreProps) => {

  return <button onClick={oneClick}>Cliquez-moi</button>;
};
