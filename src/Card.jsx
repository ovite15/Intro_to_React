import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Sivakorn Wangwon</h2>
            <p className="card-text">I'm a cs student who learning in everything I want.</p>
        </div>
    );

}

export default Card