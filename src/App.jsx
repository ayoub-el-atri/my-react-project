import * as React from "react";
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h1>hello {getTitle("React")}</h1>
      <label htmlFor="search">search:</label>
      <input id="search" type="text" /> 
    </div>
  );
}
export default App;
