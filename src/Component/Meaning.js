const Meaning = ({ mean }) => {
  return (
    <div>
      {mean.map(val => val.meanings.map(mean => mean.definitions.map(def => (
        <div  key={def.definition}>
          <ul class="text-dark list-disc text-2xl	">
            
          <li>{def.definition}</li>
          </ul>
          <br />
        </div>
      ))))}
    </div>
  );
}
export default Meaning;

