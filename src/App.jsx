import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.css';

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
        return savedFeedback || { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbackPercentage = totalFeedback
        ? Math.round((feedback.good / totalFeedback) * 100)
        : 0;

    return (
        <div>
           <Description />
            <Options
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={updateFeedback}
                onReset={resetFeedback}
                showReset={totalFeedback > 0}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    stats={feedback}
                    total={totalFeedback}
                    positivePercentage={positiveFeedbackPercentage}
                />
            ) : (
                <Notification message="No feedback yet" />
            )}
        </div>
    );
};

export default App;