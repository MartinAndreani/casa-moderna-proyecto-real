/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'

const ButtonGetInfo = ({msg, addStyle}) => {
  let cn;

  cn = "bg-cursomGreen hover:bg-lime-900 w-80 text-white py-4 rounded-lg text-2xl";
  if(addStyle) {
    if(cn.includes(addStyle.split("-")[0])) {
      cn = cn.replace(new RegExp(`\\b${addStyle.split("-")[0]}-\\S*\\b`), addStyle);
    } else {
      cn += addStyle
    }
  }

  return (
    <>
      <button className={cn}>
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