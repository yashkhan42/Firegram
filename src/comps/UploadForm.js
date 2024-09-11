import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    function handleChange(e) {
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div className='file'>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile} collection='images' /> }
            </div>
        </form>
    );
}

export default UploadForm;