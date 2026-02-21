function ProfileCard(name, email) {
    return(
    <>
        <div className="profile-card">
            <h2>User Profile</h2>
            <img src="https://example.com/user-photo.jpg" alt="User Photo" className="photo"/>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <a href="mailto:jane.doe@example.com">Send Email</a>
        </div>
    </>
)}
export default ProfileCard;