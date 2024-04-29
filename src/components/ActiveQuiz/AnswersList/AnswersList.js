import AnswerItem from './AnswersItem/AnswersItem';
import classes from './AnswersList.module.css';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem key={index} answer={answer} />
            )
        })}
    </ul>
)

export default AnswersList;