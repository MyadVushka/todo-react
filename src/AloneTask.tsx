import './AloneTask.css'
import {useState} from 'react';
import TodoListCompleteStatus from './assets/to-do-list-svgrepo-com.svg'
import TrashIcon from './assets/trash-icon.svg'

function AloneTask({title, deleteElement} : {readonly title: string, readonly deleteElement : () => void}) {

    const [isCompleted, setIsCompleted] = useState<boolean>(false);


    return (
        <div className={isCompleted ? 'completed' : 'uncompleted'}>
            <p>{title}</p>
            <div className="alone-task-imgs">
                <img onClick={() => setIsCompleted(!isCompleted)}
                 src={TodoListCompleteStatus} alt="to-make-complete" />
                <img onClick={deleteElement} src={TrashIcon} alt="trash-icon" />
            </div>
        </div>
    )
}

export default AloneTask;