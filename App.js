// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// -----------------------------------------------
/**
 * <div>
 * <div>
 * <h1>I am in Heading-1</h1>
 * </div>
 * </div>
 */

const heading=React.createElement("div",{id:"parent"},

[
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am in heading-1"),React.createElement("h2",{},"I am in heading-2")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"C I am in heading-1"),React.createElement("h2",{},"C I am in heading-2")])
]

)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)