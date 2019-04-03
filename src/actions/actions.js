const updateNo = noOfDice => ({
  type: "UPDATE_NO_OF_DICE",
  noOfDice: noOfDice
});

const updateResult = result => ({
  type: "UPDATE_RESULT",
  result
});

const canShow = () => ({
  type: "SHOW_RESULT"
});

export { updateNo, updateResult, canShow };
