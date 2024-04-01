/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'

const ButtonGetInfo = ({msg, addStyle}) => {
  let className;

  className = "bg-cursomGreen hover:bg-lime-900 w-80 text-white py-4 rounded-lg text-[1.4rem]";
  if(addStyle) {
    if(className.includes(addStyle.split("-")[0])) {
      className = className.replace(new RegExp(`\\b${addStyle.split("-")[0]}-\\S*\\b`), addStyle);
    } else {
      className += addStyle
    }
  }

  return (
    <>
      <button className={className}>
				{msg}
			</button>
    </>
  )
}

ButtonGetInfo.propTypes = {
  msg: PropTypes.string.isRequired,
  addStyle: PropTypes.string

}


export default ButtonGetInfo