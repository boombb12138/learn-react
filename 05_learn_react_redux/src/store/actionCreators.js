const { CHANGE_NAME, ADD_NUMBER } = require("./Constants");

// actionCreators帮助我们创建action
const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    name,
  };
};

const addNumberAction = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  };
};
module.exports = { changeNameAction, addNumberAction };
