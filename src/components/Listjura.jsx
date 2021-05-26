import { useState } from 'react';
import List from "./List";
import TodoList from "./TodoList";
import ListAdder from "./ListAdder";



const ListJura = () => {
    const [lists, setLists] = useState([
        'Cascade des tufs',
        'Cascade du herisson',
        'Cascade de la billaude',
        'Gorge de la langouette',
        'Cascade des combes',
        'Cascade de flumen',
        'Gorge de l abime',
        'Baume les messieurs'
    ]);

    const addList = (newList) => {  //Ajouter une nouvelle liste
        setLists([...lists, newList])
    }

    const deleteList = (listToDelete) => {
        setLists(lists.filter(l => l !== listToDelete))  //Supprimer une liste
    }
    return (
        <div className="card">
            <h2>Le Jura</h2>
            <ListAdder addList={addList} />
            <TodoList>
                {lists.map(l => <List deleteList={deleteList} listName={l} />)}
            </TodoList>
        </div>
    );
}
export default ListJura;