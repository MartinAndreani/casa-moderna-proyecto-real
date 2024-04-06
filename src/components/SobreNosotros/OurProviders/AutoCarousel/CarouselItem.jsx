import PropTypes from 'prop-types'

const CarouselItem = ({ imgUrl, imgTitle }) => {
  return (
    <li>
      <img className='max-h-44' src={imgUrl} alt={imgTitle}></img>
    </li>
  )
}

CarouselItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgTitle: PropTypes.string
}

export default CarouselItem