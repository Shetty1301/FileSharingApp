import React, { useState, useEffect, useRef } from 'react';
import { uploadFile } from '../service/api'; // Make sure you have a service for file uploads
import './Upload.css'
import backgroundVideo from '../video/BackgroundVideo.mp4'

const Upload = () => {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();
 

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        const response = await uploadFile(data); 
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='upload-container'>

        <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        preload="auto"
        playsInline 
        >
            <source src={backgroundVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <div className='content-box'>
          <h1 className='upload-heading'>Upload Your File</h1>
          <button className='upload-button' onClick={onUploadClick}><span>Select File to Upload</span></button>
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {result && (
            <div className='result-div'>
              <p>Your file is ready to download!</p>
              <a href={result} target='_blank' rel='noopener noreferrer'>
                {result}
              </a>
            </div>
          )}
        </div>
        <a className='credits' href="https://www.vecteezy.com/free-videos/rectangle">Rectangle Stock Videos by Vecteezy</a>
    </div>
  );
};

export default Upload;
