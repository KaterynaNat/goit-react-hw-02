import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ stats, total, positivePercentage }) => (
    <div className={styles.feedback}>
        <p>Good: {stats.good}</p>
        <p>Neutral: {stats.neutral}</p>
        <p>Bad: {stats.bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
    </div>
);

Feedback.propTypes = {
    stats: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;