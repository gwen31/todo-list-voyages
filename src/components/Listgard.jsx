import React from "react";
import { useState } from "react";
import './listgard.css';


function ListGard(){
   const [userInput, setUserInput] = useState("");
    return(
        <div>
            <h1 className="title">Liste des voyages à faire en France</h1>
                <div className = "card">
                    <h2>Département du Gard</h2>
                    <ul className="messages">
                        <li>Cascade de Sautadet</li>
                        <li>St laurent de Minier: cascade</li>
                        <li>Les Concluses de Lussan: Gorge</li>
                        <li>Gorge de Toulourenc: gorge</li>
                        <li>Les petites Aiguières: cascade</li>
                    </ul>
                
            <form>
                <input
                    type="text"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                 />
                <button>Ajouter un lieu</button>
            </form>
        </div>
        </div>
        
  );
}
export default ListGard;
