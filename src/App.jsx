import './App.css'
import VideoCard from './Cards/VideoCard';
import IFrameCard from './Cards/IFrameCard';

function App() {
  const rmtext = (
    <>
      L'entreprise RMBestmedia avait besoin d'une animation 3D de son logo. J'ai d'abord dû
      re-modéliser le logo de l'entreprise, puis j'ai
      fait une animation de rotation simple et j'ai ensuite fait du{" "}
      <span className="italic relative group">
        shading
        <span className="absolute bottom-6 left-0 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg w-80">
          Changement des textures et couleurs pour donner le visuel souhaité.
        </span>
      </span>{" "}
      pour donner cet aspect final.
    </>
  );
  const agtext = (
    <>
      L'entreprise AG Coaching avait besoin d'une animation 3D de son logo. J'ai d'abord du
      re-modéliser le logo de l'entreprise, puis j'ai fait une animation à base de rotations
      et de translations. Dans cette mission je n'ai pas eu a faire de shading pour cette mission.
    </>
  );
  const griffetext = (
    <>
      Concernant cette animation, il s'agissait d'une animation 3D pour fêter l'anniversaire d'un
      homme qui m'a beaucoup aidé pour apprendre la modélisation 3D.
      Ce projet a été réalisé quand j'étais encore débutant en modélisation 3D,
      même si je me considère encore comme débutant.
      J'ai du réaliser ce projet en deux jours seulement car je n'ai appris son anniversaire que
      l'avant-veille, ce qui explique certains problèmes de shading notamment.
    </>
  );
  const obbotext = (
    <>
      Obbo est un site développé en HTML/CSS/JS compatible avec le RGPD qui
      permet d'afficher sa localisation et de prendre des selfies.
      <br />Attention, ce site n'est pas responsive, il est donc vivement conseillé pour
      l'expérience utilisateur de le lancer au format mobile ou sur téléphone.
    </>
  );


  return (
    <>
      <h1 className='text-center text-2xl font-black mb-16'>Développement web</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16'>
        <IFrameCard title="Obbo" text={obbotext} link="https://elcazerito.github.io/Obbo"/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16'></div>
      <h1 className='text-center text-2xl font-black mb-16'>Modélisation 3D</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16'>
        <VideoCard title="Modélisateur & Animateur 3D" society="RM Bestmedia" text={rmtext} bg={true} video="RM Bestmedia white background format 10801920.mp4" />
        <VideoCard title="Modélisateur & Animateur 3D" society="AG.Coaching" text={agtext} video="AG Project.mp4" />
        <VideoCard title="Animation pour un anniversaire" society="GriffeFX" text={griffetext} video="Anniversaire_GriffeFX_2023.mp4" />
      </div>
    </>
  )
}

export default App
