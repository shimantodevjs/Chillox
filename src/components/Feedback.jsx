import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchRandomUserReviews } from '../Redux/reducers/reviewsSlice'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarRating from './StarRating';


const Feedback = () => {

  const dispatch = useDispatch();
  const { userReviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchRandomUserReviews());
  }, [dispatch]);

  if (status === 'loading') {
    return (
    <div className="flex justify-center items-center h-screen">
      <img
        src='./Infinity.gif' // Replace with the actual URL of your loading GIF
        alt="Loading"
      />
    </div>
  );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
     
  };


  return (
    <div className='bg-[#e7e7e5] mt-[-5rem] pb-[5rem] '>
      <h1 className='section-header pt-[5rem]'>People's Voice</h1>
      <div className='flex justify-center items-start'>
       <Slider {...settings} className='w-[50%] max-sm:w-[80%] '>
        {userReviews.map((review, index) => (
          <div key={index} className='flex justify-center items-center'>
            <div className='bg-white flex flex-col justify-center items-center p-6 gap-4 h-[200px] max-lg:h-[300px]' >
            <div className='flex justify-center items-center gap-4'>
            <img src={review.profilePicture} alt="Profile" className='rounded-full' />
            <strong>{review.name}</strong>
            </div>
            <StarRating stars={review.stars} />
            <p className='text-center w-[80%]'>{review.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
        
        
      </div>
    </div>
  )
}

export default Feedback
