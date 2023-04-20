import { useState } from "react";

type TitreProps = {
    rouge: boolean
}

export const Titre= ({rouge}: TitreProps) => {
    return (<h1 className={rouge ? "text-blue-500":"text-red-500"}>BONJOUR</h1>);
};