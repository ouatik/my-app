import { Button } from "@/components/Button";
import { Titre } from "@/components/Titre";
import { useState } from "react";

export default function Tp5() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
      <Titre rouge={clicked} />
      <Button oneClick={handleClick} />
    </div>
  );
}
