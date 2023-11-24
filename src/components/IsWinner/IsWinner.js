import PropTypes from "prop-types";
export const IsWinner = ({ btns, setInfo, setIsGameOver }) => {
  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let isDeadHeat = btns.every((item) => {
    return item !== "";
  });

  for (let comb of combination) {
    if (
      btns[comb[0]] === btns[comb[1]] &&
      btns[comb[1]] === btns[comb[2]] &&
      btns[comb[0]] !== ""
    ) {
      if (btns[comb[0]] === "X") {
        setInfo("Крестики победили");
      } else if (btns[comb[0]] === "0") {
        setInfo("Нолики победили");
      }
      setIsGameOver(true);
    } else if (isDeadHeat) {
      setInfo("Победила дружба");
      setIsGameOver(true);
    }
  }
};

IsWinner.propTypes = {
  btns: PropTypes.array,
  setIsGameOver: PropTypes.func,
  setInfo: PropTypes.func,
};
