import Button from './Button';

const List = ({ listName, deleteList }) => {
  return (
    <li>
      <a href>{listName}</a>
      <Button handleClick={() => deleteList(listName)} />
    </li>
  );
};

export default List;
