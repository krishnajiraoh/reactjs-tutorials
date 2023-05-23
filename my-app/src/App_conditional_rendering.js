//Challenge 1
/* function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked? name + '✔' : name + '❌'}
    </li>
  );
} */

//Challenge2
function Item({ name, importance }) {
  let imp = <i> 
    (Importance : {importance})
  </i>
  return (
    <li className="item">
       {name} {importance > 0 && imp}
    </li>
  );
}

function Drink({ name }) {
  let plantName, cafContent, age;
  if(name=='tea'){
    plantName = 'leaf';
    cafContent = '15–70 mg/cup';
    age = '4,000+ years'
  }
  else{
    plantName = 'bean';
    cafContent = '80–185 mg/cup';
    age = '1,000+ years'
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plantName}</dd>
        <dt>Caffeine content</dt>
        <dd>{cafContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}


export function PackingList() { //default
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
  }
