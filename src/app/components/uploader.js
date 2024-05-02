"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';

LR.registerBlocks(LR);

function App() {
  const [files, setFiles] = useState([]);
  const [imageCDN, setUrl] = useState('not still uploaded')
  const ctxProviderRef = useRef(null);


  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      const uploadedFiles = event.detail.allEntries.filter((file) => file.status === 'success');
      
      setFiles(uploadedFiles);

      uploadedFiles.forEach((file) => {
        console.log('Uploaded file:', file.fileInfo.uuid);
        setUrl(`https://ucarecdn.com/${file.fileInfo.uuid}/-/preview/-/filter/sarnar/`)
      });


    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, []); 


  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="a0c09e05ae42395c7d5c"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />

      <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <img
              src={file.cdnUrl}
              alt={file.fileInfo.originalFilename}
            />
          </div>
        ))}
      </div>


      <h1 className='text-xl text-center undeline'>
          <a href={imageCDN}>Show the image !</a>
          <img src={imageCDN} alt="Not uploaded"/>
      </h1>

    </div>
  );
}

export default App;
