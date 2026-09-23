import Card from "../Card/Card";

import { MainContainer, CardBox, TextMain, Boody } from "./Main.styled";

function PageBoard({ cardsInfoArray }) {
  return (
    <Boody>
    <MainContainer>
      <TextMain>24th Core Worlds Coalition Conference</TextMain>

      <CardBox>
        {cardsInfoArray.map((card) => {
          return (
            <Card
              name={card.name}
              location={card.location}
              speaker={card.speaker}
              time={card.time}
            ></Card>
          );
        })}
      </CardBox>
    </MainContainer>
    </Boody>
  );
}

export default PageBoard;
