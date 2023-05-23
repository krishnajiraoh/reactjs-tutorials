//Challenge 1
/*import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const others = people.filter(person => person.profession !== 'chemist')

  const chemistItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const othersItems = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistItems}</ul>
      <h1>Everyone else</h1>
      <ul>{othersItems}</ul>
    </article>
  );
}
*/

//Challenge 2
/*import { recipes } from './data.js';

export default function RecipeList() {
  const recipesItems = recipes.map(recipe =>
    <div>
      <h2 key={recipe.id}>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ing => 
          <li>{ing}</li>
        )}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Recipes</h1>
      {recipesItems}
    </div>
  );
}*/

//Challenge 3
/*import { recipes } from './data.js';
import Recipe  from "./Recipe.js"

export default function RecipeList() {
  const recipesItems = recipes.map(recipe =>
    <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
  )
  return (
    <div>
      <h1>Recipes</h1>
      {recipesItems}
    </div>
  );
}*/

//Challenge4
/*const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  const poemLines = poem.lines.map((line, index) =>
    <p key={index}>
      {line}
    </p>
  )
  const para = poemLines.join(<hr />)
  return (
    <article>
      {para}
    </article>
  );
}*/


/*import Profile from './Profile.js';

export default function App() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}*/


import { useState, useEffect } from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

