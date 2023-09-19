import {ReactElement, FC} from "react";

type topicListingProps = {
  children: ReactElement[];
}

const TopicListing: FC<topicListingProps> = ({children}) => {
  return (
    <>
      <div className='flex justify-center text-white mt-8 mb-16 mx-4'>
        <h1 className='text-mobileH1 lg:text-h1'>Topics</h1>
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
