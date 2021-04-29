import PropTypes from 'prop-types';

const Button = ({color, text}) => {
    const addTask = e => {
        console.log(e);
    }

    return (
        <button onClick={addTask} className={`bg-${color}-500 rounded shadow-md text-white px-3 py-1`}>
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
