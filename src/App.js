import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  //data state// storage
  const [ data, setData ]=useState([]);

  useEffect( () => {
    // loadData();
    getData();
  }, []);

  // const loadData = async () => {
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //   .then( respponse => respponse.json())
  //   .then( recivedData => setData(recivedData))
  // }

  //  console.log(data);

  async function getData(){
    const api = "https://jsonplaceholder.typicode.com/users";
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  
  return (
    <div className="App">
      <p>Fetch / Async / Await</p>
      {data.map(record =>(
        <div key={record.id}>{record.name}, {record.userName}</div>

      ))}
    </div>
    
  );
}

export default App;
