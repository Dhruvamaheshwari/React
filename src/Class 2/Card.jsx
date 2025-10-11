
import image from '../img/img1.jpg'

function Card()
{
    return(
        <div className="card">
            <img className='card-image'   src={image} alt="profile picture" />
            <h2 className='card-title'>Bro code</h2>
            <p className='card-text'>I am learing the react</p>
        </div> 
    );
}

export default Card 