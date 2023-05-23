export default function StoryTray({ stories }) {
    let localstories = [...stories]
    localstories.push({
      id: 'create',
      label: 'Create Story'
    });
  
    return (
      <ul>
        {localstories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }
  