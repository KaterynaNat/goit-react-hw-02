import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, showReset }) => (
    <div className={styles.container}>
        {options.map((option) => (
            <button
                key={option}
                onClick={() => onLeaveFeedback(option)}
                className={styles.button}
            >
                {option}
            </button>
        ))}
        {showReset && (
            <button onClick={onReset} className={styles.resetButton}>
                Reset
            </button>
        )}
    </div>
);

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    onReset: PropTypes.func,
    showReset: PropTypes.bool,
};

export default Options;
