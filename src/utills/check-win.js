import { WIN_COMBS } from "../constants";
export const checkWin = (field, currentPlayer) => {
  WIN_COMBS.some((item) => {
    return item.every((cellIndex) => field[cellIndex] === currentPlayer);
  });
};
