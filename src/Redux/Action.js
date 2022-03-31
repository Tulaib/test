export const Addtodo = (data) => {
    return {
      type: "ADD_TODO",
      payload: {
        id:Math.floor(Math.random()*10-1),
        itemData: data,
      },
    };
  };
  
export const DeleteTodo = (data) => {
    return {
      type: "DEL_TODO",
      payload: data
  };
}
  