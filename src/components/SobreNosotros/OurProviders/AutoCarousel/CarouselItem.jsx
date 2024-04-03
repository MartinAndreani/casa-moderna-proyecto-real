import PropTypes from 'prop-types'

const CarouselItem = ({ imgUrl, imgTitle }) => {
  return (
    <div className='flex justify-center items-center w-full h-full hover:scale-90 hover:shadow-lg transform transition duration-300 ease-in-out rounded-lg bg-gray-800'>
      <img className="h-80 w-80 rounded-lg" src={imgUrl} alt={imgTitle}></img>
    </div>
  )
}

CarouselItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgTitle: PropTypes.string
}

export default CarouselItem