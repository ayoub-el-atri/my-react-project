import * as React from "react";
const list =[
  {
    title: "react",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    point: 4,
    objectID: 0,
  },
  {
    title: "reacct",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    point: 5,
    objectID: 1, 
  },
];
cd <source />gfunction App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">search:</label>
      <input id="search" type="text" /> 
      <hr />
      <ul>
        {list.map(function (item){
          return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>;
          );
        })}
      </ul>
    </div>
  );
}
export default App;
