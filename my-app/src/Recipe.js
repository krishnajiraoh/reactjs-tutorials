export default function Recipe({id, name, ingredients}){
    return (
        <div>
            <h2 key={id}>{name}</h2>
            <ul>
                { ingredients.map(ing => 
                    <li>{ing}</li>
                )}
            </ul>
        </div>
    )
}