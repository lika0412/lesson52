export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completeMark = completed ? "[COMP!!]" : "[Ny]";
  return <p>{`${completeMark} ${title}(ユーザー:${userid})`}</p>;
};
