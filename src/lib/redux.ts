import { createStore, Reducer } from 'redux';

import { TaskInterface } from '../interfaces/Task.interface'
import { TaskListInterface } from '../interfaces/TaskListInterface'

export const actions = {
    ARCHIVE_TASK: "ARCHIVE_TASK",
    PIN_TASK: "PIN_TASK"
}

export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id })
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id })

function taskStateReducer(taskState: string) {
    return (state: TaskListInterface, action: { id: string; }) => {
        return {
            ...state,
            tasks: state.tasks?.map((task: TaskInterface) => (
                task.id === action.id ? { ...task, state: taskState } : task
            ))
        }
    }
}

export const reducer: Reducer = (state: TaskListInterface, action: any) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer("TASK_ARCHIVE")(state, action)
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action);
        default:
            return state
    }
}

const defaultTasks: Array<TaskInterface> = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
