# reactjs-tutorials


npx create-react-app my-app
npm start

# React
- React is a JavaScript library for rendering user interfaces (UI). 
- UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. 
- From web sites to phone apps, everything on the screen can be broken down into components. 

### React: A declarative UI library
- As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.

## Getting Started with React
To use React in your project, you can load two React scripts from an external website called unpkg.com:
1. 'react' is the core React library.
2. 'react-dom' provides DOM-specific methods that enable you to use React with the DOM.

## JSX
- JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. 
- The nice thing about JSX is that apart from following three JSX rules, you don’t need to learn any new symbols or syntax outside of HTML and JavaScript.
- NOTE : browsers don’t understand JSX out of the box, so they need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.

<table>
	<tr>
		<td><img src="/.images/imperative1.png" height=300/></td>
		<td><img src="/.images/imperative2.png" height=300/></td>
	</tr>
</table>
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
export function Profile(){
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

## State
- component-specific memory 
- To update a component with new data, two things need to happen:
  1. Retain the data between renders.
  2. Trigger React to render the component with new data (re-rendering).
- The useState Hook provides those two things:
  1. A state variable to retain the data between renders.
  2. A state setter function to update the variable and trigger React to render the component 

### useState:
- In React, useState, as well as any other function starting with ”use”, is called a Hook.
- Hooks are special functions that are only available while React is rendering
- Every time your component renders, useState gives you an array containing two values:
  1. The state variable (index) with the value you stored.
  2. The state setter function (setIndex) which can update the state variable and trigger React to render the component again.

#### State is isolated and private 
- State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state!
- Any screen update in a React app happens in three steps:
  1. Trigger
  2. Render
  3. Commit
- You can use Strict Mode to find mistakes in your components
- React does not touch the DOM if the rendering result is the same as last time

#### Batch updates
- if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like setNumber(number + 1), 
  - you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(n => n + 1). 
- It is a way to tell React to “do something with the state value” instead of just replacing it.

```
//Increments by 6
<buttonon Click={ () => {
  setNumber(number+ 5);
  setNumber(n=>n+ 1);
}} >
```

### Updating Objects in State:
- you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy
- <b>treat any JavaScript object that you put into state as read-only</b>.

```
onPointerMove = {e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}
```
- You can use the ... object spread syntax so that you don’t need to copy every property separately.
```
setPerson({
  ...person, // Copy the old fields
  firstName : e.target.value // But override this one
});
```

- Updating a nested Object:
```
setPerson({
  ...person,            // Copy other fields
  artwork : {           // but replace the artwork
    ...person.artwork, // with the same one
    city:'New Delhi'   // but in New Delhi!
  }
});
```

#### Write concise update logic with Immer :
- Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. 
- With Immer, the code you write looks like you are “breaking the rules” and mutating an object:

```
import { useImmer } from 'use-immer';

updatePerson(draft=>{
  draft.artwork.city= 'Lagos';
});
```

### Updating Arrays in State
- Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

|-----|avoid (mutates the array)|prefer (returns a new array)|
|-----|:---------------------   | --------------------------:|
|adding|push, unshift|concat, [...arr] spread syntax|
|removing|pop, shift, splice|filter, slice|
|replacing|splice, arr[i] = ... assignment|map|
|sorting|reverse, sort|copy the array first|

##### Add
```
setArtists([
  {id:nextId++,name:name},
  ...artists// Put old items at the end
]);
```

##### Remove:
```
setArtists(
  artists.filter(a=>a.id!== artist.id)
);
```

##### Transform/replace
- Using map function

##### Insert
```
//Copy & slice
const nextArtists = [
    // Items before the insertion point:
    ...artists.slice(0, insertAt),
    // New item:
    { id: nextId++, name: name },
    // Items after the insertion point:
    ...artists.slice(insertAt)
];
setArtists(nextArtists);
```

### Declarative vs Imperative UI:
- In React, you don’t directly manipulate the UI—meaning you don’t enable, disable, show, or hide components directly. 
- Intead, you declare what you want to show, and React figures out how to update the UI. 
- Think of getting into a taxi and telling the driver where you want to go instead of telling them exactly where to turn. It’s the driver’s job to get you there, and they might even know some shortcuts you haven’t considered!

#### Thinking about UI declaratively 
1. Identify your component’s different visual states
2. Determine what triggers those state changes
   - Human inputs, like clicking a button, typing in a field, navigating a link.
   - Computer inputs, like a network response arriving, a timeout completing, an image loading

<p align="center"> 
	<img src="/.images/thinking-state.png" height=300/>
</p>

3. Represent the state in memory using useState
4. Remove any non-essential state variables
5. Connect the event handlers to set the state

#### State Structure:
#### Principles for structuring state 
1. Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
2. Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
3. Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
4. Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
5. Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

#### Sharing State between components:
- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

### What are Controlled and uncontrolled components ???

#### Preserving and Resetting State
- State is isolated between components. React keeps track of which state belongs to which component based on their place in the UI tree. 
- You can control when to preserve state and when to reset it between re-renders.

- React keeps state for as long as the same component is rendered at the same position.
- State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
- You can force a subtree to reset its state by giving it a different key.
- Don’t nest component definitions, or you’ll reset state by accident.

#### Extracting State Logic into a Reducer
- Components with many state updates spread across many event handlers can get overwhelming. 
- For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:
1. Move from setting state to dispatching actions.
2. Write a reducer function.
3. Use the reducer from your component.

Ex: https://codesandbox.io/s/s6uocy?file=%2FApp.js&utm_medium=sandpack

Tips:
- Reducers must be pure
- Each action describes a single user interaction, even if that leads to multiple changes in the data

### Passing Data Deeply with Context
- Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
- But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop.

You will do it in three steps:
1. Create a context. (You can call it LevelContext, since it’s for the heading level.)
2. Use that context from the component that needs the data. (Heading will use LevelContext.)
3. Provide that context from the component that specifies the data. (Section will provide LevelContext.)
