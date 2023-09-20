import { FC, useState } from "react";
import backIcon from "../../assets/images/back_button.svg";
import Button from "../atoms/Button";
import {capitalizeWord} from "../../utils/string.js";

type TopicModalProps = {
  technology: string,
  name: string,
  description: string,
  difficulty: string,
  closeModal: () => void,
};

const TopicModal: FC<TopicModalProps>= ({technology, name, description, difficulty, closeModal}) => {
  const [closeAnimation, setCloseAnimation] = useState(false);

  return (
    <div className={'absolute top-0 left-0'}>
      <div className={`hidden lg:flex w-screen h-screen justify-end backdrop-blur-sm bg-black/30 overflow-x-hidden 
      ${closeAnimation ? 'animate-fade-out' : 'animate-fade-in'}`}>
        <div className={'w-2/3'} onClick={() => {
          setCloseAnimation(true);
          setTimeout(() => {
            closeModal();
          }, 500);
        }}></div>
        <div className={`text-white bg-dark-background w-1/3 h-full text-center py-8 px-8 flex flex-col justify-between ${closeAnimation ? 'animate-move-out-to-right' : 'animate-move-in-from-right'}`}>
          <div>
            <div className={'text-h2'}>{technology}</div>
            <div className={'text-h3 mt-4'}>{name}</div>
            {description.split('.').map((phrase, index) => {
              return <p
                key={index}
                className={'my-4 text-mobileParagraph ' +
                  'break-words hyphens-auto ' +
                  'max-w-prose text-justify'}
              >
                {phrase}.
              </p>
            })}
          </div>
          <div className={'w-full text-center mb-6'}>
          <p className={'text-mobileH3'}>Difficulty: {capitalizeWord(difficulty)}</p>
          <div className={'w-full h-auto mt-2'}>
            <Button text={'Start'} disabled/>
          </div>
        </div>
        </div>
      </div>
      <div className={`h-screen w-screen py-8 px-5 flex flex-col justify-between text-white lg:hidden bg-dark-background relative ${closeAnimation ? 'animate-move-out-to-left' : 'animate-move-in-from-left'}`}>
        <img className={'absolute top-4 left-4 hover:opacity-75'} src={backIcon} width={'40px'} onClick={() => {
          setCloseAnimation(true);
          setTimeout(() => {
            closeModal();
          }, 500);
        }}/>
        <div className={'text-center'}>
          <div className={'text-mobileH1'}>{technology}</div>
          <div className={'text-mobileH2'}>{name}</div>
          {description.split('.').slice(0, 2).map((phrase, index) => {
            return <p
              key={index}
              className={'my-4 text-mobileParagraph ' +
                'break-words hyphens-auto ' +
                'max-w-prose text-justify'}
            >
              {phrase}.
            </p>
          })}
        </div>
        <div className={'w-full text-center'}>
          <p className={'text-mobileH3'}>Difficulty: {capitalizeWord(difficulty)}</p>
          <div className={'w-full h-auto mt-2'}>
            <Button text={'Start'} disabled/>
          </div>
        </div>

      </div>
    </div>
  )
};

export default TopicModal;
