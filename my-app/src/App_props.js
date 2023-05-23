import Profile from './Profile_props.js'

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile Name="Maria Skłodowska-Curie" Id='szV5sdG' Profession='physicist and chemist' 
                AwardsCount={4} Awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" 
                Discovered="polonium (element)" imageSize={100}/>

      <Profile Name="Katsuko Saruhashi" Id='YfeOqp2' Profession='geochemist' 
                AwardsCount={2} Awards="(Miyake Prize for geochemistry, Tanaka Prize)" 
                Discovered="a method for measuring carbon dioxide in seawater" imageSize={70}/>  
    </div>
  );
}