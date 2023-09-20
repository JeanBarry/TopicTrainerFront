import {ReactElement, FC} from "react";

type topicListingProps = {
  children: ReactElement[];
}

const TopicListing: FC<topicListingProps> = ({children}) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-white pt-8 mb-16 mx-4'>
        <h1 className='text-mobileH1 lg:text-h1'>Topics</h1>
        <p className={'hidden lg:block max-w-prose text-center text-h4 text-gray-text mt-4'}>Welcome to Topic Trainer, explore out collection of topics,
          each designed to test your expertise and boost your understanding.
          Are you ready to challenge your skills?
        </p>
      </div>
      <div
        className={`mx-3 grid gap-3 justify-items-center grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        md:gap-y-8 lg:gap-y-12`}
      >
        {children}
      </div>
    </>
  )
}
export default TopicListing;
