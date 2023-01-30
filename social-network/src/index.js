import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let posts = [
  { message: "Hi how are u", id: 1, likesCount: 10 },
  { message: "I`m fine, thanks", id: 2, likesCount: 5 },
  { message: "Hi guys", id: 3, likesCount: 33 },
];
let dialogs = [
  { name: "Ilya", id: 1 },
  { name: "Katya", id: 2 },
  { name: "Sasha", id: 3 },
  { name: "Jenya", id: 4 },
  { name: "Dasha", id: 5 },
  { name: "Denis", id: 6 },
];

let messages = [
  { message: "Hi", id: 1 },
  { message: "How are u", id: 1 },
  { message: "Everything is fine", id: 1 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
