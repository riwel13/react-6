import { SmallLi } from "./List.styled";

function List({ info, icon }) {
  return (
    <SmallLi>{icon}{info}</SmallLi>
  )
}

export default List;
