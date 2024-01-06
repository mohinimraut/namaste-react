 import React from 'react';
import ReactDOM from 'react-dom';
 const heading=React.createElement("div",{id:"parent"},
[
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am in heading-1 very crazy"),React.createElement("h2",{},"I am in heading-2")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"C I am in heading-1"),React.createElement("h2",{},"C I am in heading-2")])
]
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)