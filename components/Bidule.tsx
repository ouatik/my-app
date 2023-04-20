type TitreProps = {
  titre?: string | undefined;
  soustitre: string;
};

export const Bidule = ({ titre, soustitre }: TitreProps) => {
  return (
    <div>
      <h1 className="sm:text-red-500 md:text-blue-500 lg:text-green-500 font-bold lg:text-3xl text-2xl bg-slate-400">
        {titre}
      </h1>
      <h2>{soustitre}</h2>
    </div>
  );
};
