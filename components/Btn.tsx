type BtnProps = {
    label?: string | undefined;
    
   };
export const Btn = ({label} :BtnProps) => {
    return (
        <h1>
          <button className="btn w-[200px] h-[50px] bg-red-500">{label}</button>
        </h1>
    );
   };
   