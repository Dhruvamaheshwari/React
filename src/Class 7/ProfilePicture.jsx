function ProfilePicture()
{
    const ImageURL = '/img1.jpg';
    const handleClick = (e) => e.target.style.height = "280px";

    return(<img onClick= {(e) => handleClick(e)} src={ImageURL}></img>);



}

export default ProfilePicture;