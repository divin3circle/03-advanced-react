import { Person } from "./Person";
import { people } from "../../../data";

const Lists = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};

export default Lists;
