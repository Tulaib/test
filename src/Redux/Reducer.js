const initialData = {
  list: [
    {
      id: 1,
      itemData: "hello",
    },
    {
      id: 2,
      itemData: "Im new",
    },
  ],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, itemData } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            itemData: itemData,
          },
        ],
      };

    case "DEL_TODO":
      return { list: handleRemoveTodo(action.payload, state.list) };

      break;
    default:
      return state;
  }
};

export default todoReducer;

const handleRemoveTodo = (item, list) => {
  const todoIndex = list.indexOf(item);
  list.splice(todoIndex, 1);
  return list;
};
