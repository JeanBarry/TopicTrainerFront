import {FC, useState} from "react";
import TopicModal from "./TopicModal.tsx";

type TopicProps = {
  technology: string,
  name: string,
  description: string,
  difficulty: string,
  logoUrl: string
}

const backgroundColors = {
  easy: '#6EE4CF',
  medium: '#7CE3FA',
  hard: '#FF9C9C'
}

const Topic: FC<TopicProps> = (
  {
    technology,
    name,
    description,
    difficulty,
    logoUrl
  }
) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={`h-[175px] w-[175px] 
        xl:h-[300px] xl:w-[300px] 
        flex flex-col justify-center items-center 
        cursor-pointer rounded
        text-center hover:opacity-75`}
           style={{backgroundColor: backgroundColors[difficulty]}}
           onClick={() => setOpenModal(true)}
      >
        <img
          className={'w-5/12 h-auto'}
          src={`${API_URL}${logoUrl}`}
          alt={`${technology} logo`}
        />
        <p className={'text-mobileCardTitle xl:text-desktopCardTitle'}>{technology}</p>
        <p className={'text-mobileCardSubtitle xl:text-desktopCardSubtitle'}>{name}</p>
      </div>
      {openModal && <TopicModal name={name} description={description} technology={technology} difficulty={difficulty} closeModal={() => setOpenModal(false)} />
      }
    </>
  )
};

export default Topic;
