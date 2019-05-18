import React from "react";
import "./App.css";
import useUser from "./use-user";
import useCounter from "./use-counter";
import useFilesList from "./use-files-list";

function App() {
  const user = useUser();
  const counter = useCounter();
  const files = useFilesList();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {user.data ? user.data.name + " " : "[no user]"}
          {user.data ? (
            <button onClick={user.logout}>Log Out</button>
          ) : (
            <button onClick={user.login}>Log In</button>
          )}
        </p>
      </header>
      <p>
        <pre>{counter.data}</pre>
        <button onClick={counter.decrement}>--</button>
        <button onClick={counter.increment}>++</button>
      </p>
      {files.data.length > 0 && (
        <table
          style={{
            margin: "0 auto",
            borderCollapse: "collapse",
            fontFamily: "Menlo"
          }}
        >
          <tbody>
            {files.data.map(({ name, path, modified }) => (
              <tr>
                <td style={{ textAlign: "left" }}>{name}</td>
                <td>{path}</td>
                <td style={{ textAlign: "right" }}>
                  {modified.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={files.fetch}>Fetch Data</button>
    </div>
  );
}

export default App;
