import React, { useState } from 'react';
import avatar from '../assets/Screenshot 2024-07-07 at 10.18.09 AM.png';
import useFirestore from '../hooks/useFirestore';
import ProgressBar  from './ProgressBar';

function ProfilePic() {

    const { docs } = useFirestore('profile-pic'); 
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    function handleChange(e) {
        const selected = e.target.files[0];
        console.log(selected);
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg) >:(');
        }
    };

    return (
        <form className="profilepic-container">
            {docs.length < 1 && (
            <div>
                <div className="profilepic-empty-avatar">
                    <img src={avatar} alt="empty-avatar"/>
                    <label>
                        <input type="file" onChange={handleChange} />
                        <span>+</span>
                    </label>
                    { error && <div className="error">{error}</div> }
                </div>
                { file && <ProgressBar file={file} setFile={setFile} collection='profile-pic' /> }
            </div>)}
            {docs.length > 0 && (
            <div>
                <div className="profilepic" key={docs[0].id}>
                    <img src={docs[0].url} alt="pp" />
                    <label>
                        <input type="file" onChange={handleChange} />
                        <span>+</span>
                    </label>
                    { error && <div className="error">{error}</div> }
                </div>
                { file && <ProgressBar file={file} setFile={setFile} collection='profile-pic' /> }
            </div>)}
        </form>
    );
}

export default ProfilePic;