const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3 text-xl	">
    {mean.map((val) =>
      val.meanings.map((means) =>
        means.antonyms?.map((Ant) => <li>{Ant}</li>)
      )
    )}
  </div>
  );
};

export default Antonym;