/* import { useState } from 'react';

export default function SyncedInputs() {

    const [text, setText] = useState('');
    return (
        <>
        <Input label="First input" value={text} onChng={(e) => setText(e.target.value)} />
        <Input label="Second input" value={text} onChng={(e) => setText(e.target.value)}/>
        </>
    );
}

function Input({ label, value, onChng }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChng}
      />
    </label>
  );
}
 */

//Challenge2
import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');

    function handleChange(e) {
        setQuery(e.target.value);
    }
    
    return (
        <>
        <SearchBar onChange={handleChange}/>
        <hr />
        <List items={filterItems(foods,query)} />
        </>
    );
}

function SearchBar({query, onChange}) {

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}