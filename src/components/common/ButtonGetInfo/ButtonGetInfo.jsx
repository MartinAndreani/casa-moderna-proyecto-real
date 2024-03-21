import PropTypes from 'prop-types'

const ButtonGetInfo = ({msg}) => {
  return (
    <>
      <button className="bg-cursomGreen hover:bg-lime-900 min-w-80 text-white py-4 rounded-lg text-2xl">
				{msg}
			</button>
    </>
  )
}

ButtonGetInfo.propTypes = {
  msg: PropTypes.string
}


export default ButtonGetInfo