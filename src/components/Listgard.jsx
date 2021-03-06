import { useState } from 'react';
import List from "./List";
import TodoList from "./TodoList";
import ListAdder from "./ListAdder";



const ListGard = () => {
  const [lists, setLists] = useState([
    'Cascade de Sautadet',
    'St laurent de Minier: cascade',
    'Les Concluses de Lussan: Gorge',
    'Gorge de Toulourenc: gorge',
    'Les petites Aiguières: cascade'
  ]);

  const addList = (newList) => {  //Ajouter une nouvelle liste
    setLists([...lists, newList])
  }

  const deleteList = (listToDelete) => {
    setLists(lists.filter(l => l !== listToDelete))  //Supprimer une liste
  }
  return (
    <div className="card">
      <h2>Le Gard</h2>
      <ListAdder addList={addList} />
      <TodoList>
        {lists.map(l => <List deleteList={deleteList} listName={l} />)}
      </TodoList>
    </div>
  );
}
export default ListGard;
