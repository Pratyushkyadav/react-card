import profilePic from './assets/Pfp.png'

function Card() {
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Pratyushkyadav</h2>
      <p className="card-text">I study and i suck at it</p>
    </div>
  );
}

export default Card;