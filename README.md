# reactjs-tutorials


npx create-react-app my-app
npm start

# React
- React is a JavaScript library for rendering user interfaces (UI). 
- UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. 
- From web sites to phone apps, everything on the screen can be broken down into components. 

### Imperative vs Declearive UI
- React: A declarative UI library
- As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.

## Getting Started with React
- To use React in your project, you can load two React scripts from an external website called unpkg.com:
    1. react is the core React library.
    2. react-dom provides DOM-specific methods that enable you to use React with the DOM.

## JSX
- JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. 
- The nice thing about JSX is that apart from following three JSX rules, you don’t need to learn any new symbols or syntax outside of HTML and JavaScript.
- NOTE : browsers don’t understand JSX out of the box, so they need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.

## The Rules of JSX 
1. Return a single root element 
2. Close all the tags 
3. camelCase all/most of the things! 

# React Core Concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:
- Components
- Props
- State

## Components:
- In React, components are functions. 
- A component is a function that returns UI elements.
- To render this component to the DOM, you can pass it as the first argument in the ReactDOM.render() method:

```
function Header(){
	return<h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage(){
	return (
        <div>
        {/* Nesting the Header component */}
            <Header/>
        </div>
        );
    }

ReactDOM.render(<Header/>,app);
```

#### Exporting & Importing multiple components:
- A file can only have one default export, but it can have numerous named exports!

|Syntax|Export statement|Import statement|
|-----|:-----------------------------------| ------------------------------:|
|Default|export default function Button() {}|import Button from './Button.js';|
|Named|export function Button() {}|import { Button } from './Button.js';|

```
export functionProfile(){
  // ...
}
```

## Props
- React components use props to communicate with each other. 
- Every parent component can pass some information to its child components by giving them props.

### Passing Props to Components
#### Step 1: Pass props to the child component 
- First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):

```
export default function Profile(){
  return(
    <Avatar
      person={{name:'Lin Lanying',imageId:'1bX5QH6'}}
      size={100}
    />
  );
}
```

#### Step 2: Read props inside the child component 
You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

```
function Avatar({person,size}){
  // person and size are available here
}
```

Destructuring:
- Usually you don’t need the whole props object itself, so you destructure it into individual props.

```
function Avatar(props){
  let person= props.person;
  let size= props.size;
  // ...
}

function Avatar( {person,size} ){
  // ...
}
```

##### Forwarding props with the JSX spread syntax 
```
function Profile(props){
  return(
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

##### Conditional (ternary) operator (? :) 

```
// Instead of:
if(isPacked){
  return <li className="item"> {name} ✔</li>;
}
return <li className="item"> {name} </li>;

// Use:
return (
  <li className="item">
    {isPacked? name + ' ✔' : name}
  </li>
);
```

##### Logical AND operator (&&) 
- A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. 
- But if the condition is false, the whole expression becomes false. 
- React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.

```
return(
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

### Event handler functions:
- Are usually defined inside your components.
- Have names that start with handle, followed by the name of the event.
  - e.stopPropagation() stops the event handlers attached to the tags above from firing.
  - e.preventDefault() prevents the default browser behavior for the few events that have it.
