import { Name } from "./Person.type";
type PersonListProps = {
  name: Name[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
