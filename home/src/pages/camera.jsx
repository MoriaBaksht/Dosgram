import React, { useRef, useState } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isImageApproved, setIsImageApproved] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (err) {
      console.error('Error accessing the camera:', err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    setIsCameraOn(false);
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const capturedDataURL = canvas.toDataURL('image/png');
    setCapturedImage(capturedDataURL);
    stopCamera();
  };

  const handleKeepImage = () => {
    setIsImageApproved(true);
  };

  const handleRetakeImage = () => {
    setCapturedImage(null);
    setIsImageApproved(false);
    startCamera();
  };

  return (
    <div>
      {!capturedImage && !isCameraOn && (
        <button onClick={startCamera}>Turn on Camera</button>
      )}
      {!capturedImage && isCameraOn && (
        <button onClick={captureImage}>Capture Image</button>
      )}
      {capturedImage && !isImageApproved && (
        <>
          <button onClick={handleKeepImage}>Keep Image</button>
          <button onClick={handleRetakeImage}>Retake Image</button>
          <img src={capturedImage} alt="Captured" />
        </>
      )}
      {isImageApproved && <span>Approved Icon Here</span>}
      {isCameraOn && (
        <button onClick={stopCamera}>Turn off Camera</button>
      )}
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default CameraComponent;