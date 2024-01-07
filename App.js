 import React from 'react';
import ReactDOM from 'react-dom';

const elem=<span>React Element</span>;

const title=(
    <h1 className='head' tabIndex="5">
     {elem}----   
     Namaste React using JSX......
    </h1>
);

const HeadingComponent=()=>(
    <div id="container">
    {title}
    <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
