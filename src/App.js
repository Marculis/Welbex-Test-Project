import "./App.css";

/* const createJson = () => {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push({
      id: i.toString(),
      date: (i * 25754611 + 1335205592410).toString(),
      distance: (i * 15 * 3).toString(),
      name: `Person${i}`.toString(),
      count: Math.ceil((i * 10) / 3).toString(),
    });
  }

  for (let i = 120; i > 50; i--) {
    arr.push({
      id: i.toString(),
      date: (i * 110123523 + 1335205592410).toString(),
      distance: (i * 12 * 2).toString(),
      name: `Person ${i}`.toString(),
      count: Math.ceil((i * 6) / 3).toString(),
    });
  }

  console.log(JSON.stringify(arr));
  return arr;
  
}; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My test project </h1>
      </header>
    </div>
  );
}

export default App;
