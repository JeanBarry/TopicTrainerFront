import {FC} from "react";

type TopicProps = {
  technology: string,
  name: string,
  difficulty: string,
  logoUrl: string
}

const Topic: FC<TopicProps> = (
  {
    technology,
    name,
    difficulty,
    logoUrl
  }
) => {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <div className={`h-[175px] w-[175px] 
      xl:h-[300px] xl:w-[300px] 
      flex flex-col justify-center items-center 
      text-center bg-${difficulty}`}
    >
      <img
        className={'w-[78px] xl:w-[150px] h-auto'}
        src={`${API_URL}${logoUrl}`}
        alt={`${technology} logo`}
      />
      <p className={'text-mobileCardTitle xl:text-desktopCardTitle'}>{technology}</p>
      <p className={'text-mobileCardSubtitle xl:text-desktopCardSubtitle'}>{name}</p>
    </div>
  )
};

export default Topic;
