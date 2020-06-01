# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    --> React JS is a library with the main purpose of building out powerful UI in a less painful way than Vanilla JS would allow. One aspect of ease can be found in the JSX syntax, allowing you to create HTML elements the way you would in an actual HTML file.

1. What does it mean to think in react?
    --> I think, in summary, it means to think compartmentally about your projects. Building out small components, which individually do minimal task, but are brought together to form a big picture.

1. Describe state.
    --> State is an object which represents something changeable within a component/app.

1. Describe props.
    --> Properties that pass data from component to component throughout an application.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    --> They are the effects which take place (using the useEffect method) once something has changed within an application. To sync this to changes happening within a specific piece of state, you place the name of that state within a dependency array at the end of the useEffect method.
