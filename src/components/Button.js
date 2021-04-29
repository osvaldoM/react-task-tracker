import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {

    return (
        <button onClick={onClick} className={`bg-${color}-500 rounded shadow-md text-white px-3 py-1`}>
            {text}
        </button>
    )
}

export default Button

Button.defaultProps = {
    text: 'no text'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
