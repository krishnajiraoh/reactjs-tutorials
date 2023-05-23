import { getImageUrl } from './utils.js';

export default function Profile({Name, Id, Profession, AwardsCount=0, Awards, Discovered, imageSize=100}){
    return ( 
    <section className="profile">
        <h2>{Name}</h2>
        <img
          className="avatar"
          src={getImageUrl(Id, imageSize)}
          alt={Name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {Profession}
          </li>
          <li>
            <b>Awards: {AwardsCount} </b> 
            {Awards}
          </li>
          <li>
            <b>Discovered: </b>
            {Discovered}
          </li>
        </ul>
      </section>
    )
}