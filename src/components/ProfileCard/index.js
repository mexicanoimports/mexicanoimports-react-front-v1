import { FaUser } from 'react-icons/fa';
import './style.css'

function ProfileCard() {
    const storedUser = localStorage.getItem('userData');
    const userData = JSON.parse(storedUser);
    return (
        <>
            {userData &&
                <div className='profile-card'>
                    <div className='profile-card-picture'>
                        <FaUser size={40} />
                    </div>
                    <div className='profile-card-infos'>
                        <h1>
                            {userData.fullname}
                        </h1>
                        <h2>
                            {userData.email}
                        </h2>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfileCard;