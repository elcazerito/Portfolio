import { useRef, useState } from "react";
import "./Card.css";

function VideoCard({ title, society, text, video, bg = false }) {
    const [currentVideo, setCurrentVideo] = useState(video);
    const videoRef = useRef(null);

    function changeBackground() {
        setCurrentVideo((prev) => {
            if (prev.includes("white")) {
                return prev.replace("white", "black");
            } else {
                return prev.replace("black", "white");
            }
        });
    }

    return (
        <div className='rounded-lg shadow-2xl flex flex-col items-center'>
            <h4 className='text-xl font-bold mb-2'>{title}</h4>
            <h5 className='text-xl font-bold mb-2'>{society}</h5>
            <p className='mb-2'>{text}</p>
            {bg && (
                <button
                    className="blue-bg text-white px-4 py-2 rounded-xl transform transition-transform duration-300 hover:scale-110 w-auto"
                    onClick={changeBackground}
                >
                    Changer l'arrière-plan
                </button>
            )}
            <div className='flex justify-center items-center my-8'>
                <div className='w-3/4 max-w-lg mx-auto'>
                    <div id='video'>
                        <video
                            key={currentVideo}
                            ref={videoRef}
                            className="w-full rounded-lg shadow-md"
                            src={`medias/${currentVideo}`}
                        />
                    </div>
                    <div className='flex justify-center mt-4 space-x-4'>
                        <button onClick={() => videoRef.current.play()}
                            className='blue-bg text-white px-4 py-2 rounded-lg'>
                            Lecture
                        </button>
                        <button onClick={() => videoRef.current.pause()}
                            className='red-bg text-white px-4 py-2 rounded-lg'>
                            Pause
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard