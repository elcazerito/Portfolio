import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='justify-center flex flex-col items-center'>
          <h4 className='text-xl font-bold mb-2'>Title</h4>
          <h5 className='text-xl font-bold mb-2'>Society</h5>
          <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse natus officia rem repellendus nesciunt voluptas tempore tenetur aspernatur consequuntur sint nihil deleniti hic, explicabo, nisi impedit deserunt, repudiandae minima!</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-xl transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700 w-auto'
            id='switch-video'>Changer l'arrière-plan</button>
          <div className='flex justify-center items-center my-8'>
            <div className='w-3/4 max-w-lg mx-auto'>
              <div id='video'>
                <video id='video-element' className='w-full rounded-lg shadow-md'
                  src='medias/RM Bestmedia white background format 10801920.mp4'></video>
              </div>
              <div className='flex justify-center mt-4 space-x-4'>
                <button id='play-button'
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                  Lecture
                </button>
                <button id='pause-button'
                  className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>
                  Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
