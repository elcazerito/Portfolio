import "./Card.css";

function IFrameCard({ title, text, link }) {
    return (
        <div className='rounded-lg shadow-2xl flex flex-col items-center'>
            <h1 className='text-xl font-bold mb-2'>{title}</h1>
            <p className='mb-2'>{text}</p>
            <button
                className="text-center text-white red-bg p-0.5 px-4 m-2 rounded-lg"
                onClick={() => window.location.href =  link }>
                Y aller
            </button>
            <iframe
                className="w-full aspect-2/3 rounded-lg shadow-b-r-2xl"
                src={link}
            />
        </div>
    );
}

export default IFrameCard;