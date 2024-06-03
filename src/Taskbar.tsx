import './Taskbar.css'
import AloneTask from './AloneTask'

function Taskbar({taskArray, deleteElementToMain} : {readonly taskArray: string[], deleteElementToMain: (idx : number) => void} ) {

    return (
        <main className='taskbar-wrapper'>
            <ul>
                {
                    taskArray.map((task: string, idx: number) => (
                        <AloneTask key={idx} deleteElement={() => deleteElementToMain(idx)} title={task} />
                    ))
                }
            </ul>
        </main>
    )
}

export default Taskbar;