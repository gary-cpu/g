import React, { useState, useRef, useEffect } from 'react';
import { Camera, ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CircleMeasureApp = () => {
  const [imageData, setImageData] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streamActive, setStreamActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreamActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStreamActive(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      setImageData(canvas.toDataURL('image/jpeg'));
      measureCircle(ctx, canvas.width, canvas.height);
      stopCamera();
    }
  };

  const measureCircle = (ctx, width, height) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    // Find dark pixels (assuming circle is darker than background)
    let minX = width, maxX = 0, minY = height, maxY = 0;
    const threshold = 128; // Adjust based on image contrast

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
        
        if (brightness < threshold) {
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
        }
      }
    }

    // Calculate diameter (average of width and height)
    const diameterX = maxX - minX;
    const diameterY = maxY - minY;
    const avgDiameter = Math.round((diameterX + diameterY) / 2);
    setDiameter(avgDiameter);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Circle Measurement App</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {!streamActive && !imageData && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
            )}
            {streamActive && (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            {imageData && (
              <img
                src={imageData}
                alt="Captured"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />

          <div className="flex gap-4 justify-center">
            {!streamActive && !imageData && (
              <button
                onClick={startCamera}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                Start Camera
              </button>
            )}
            {streamActive && (
              <button
                onClick={captureImage}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Capture
              </button>
            )}
            {imageData && (
              <button
                onClick={() => {
                  setImageData(null);
                  setDiameter(null);
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Reset
              </button>
            )}
          </div>

          {diameter && (
            <div className="text-center p-4 bg-gray-100 rounded-lg">
              <p className="text-lg font-semibold">
                Measured Diameter: {diameter} pixels
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CircleMeasureApp;
