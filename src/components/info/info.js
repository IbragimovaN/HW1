import { PLAYER_ACTION, PLAYER_NAME, STATUS } from "../../constants";
import { InfoLayout } from "./info-layout";

export const Info = ({ status, currentPlayer }) => {
  const playerAction = PLAYER_ACTION[status];
  const playerName = PLAYER_NAME[currentPlayer];
  const info =
    status === STATUS.DRAW ? "Ничья" : `${playerAction}: ${playerName}`;
  return <InfoLayout info={info} />;
};
