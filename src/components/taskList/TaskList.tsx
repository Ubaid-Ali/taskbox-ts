import React from "react";

import Task from "../task/Task";

import { TaskInterface } from '../../interfaces/Task.interface'

import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../../lib/redux';
import { TaskListInterface } from "../../interfaces/TaskListInterface";


export interface TaskListPropsInterface {
    loading: boolean;
    tasks: TaskInterface[];
    onPinTask: any;
    onArchiveTask: any;
}

export const PureTaskList: React.FC<TaskListPropsInterface> = ({
    loading,
    tasks,
    onPinTask,
    onArchiveTask,
}) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    const loadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span>
                <span>cool</span>
                <span>staTaskInterface[]te</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const tasksInOrder = [
        ...tasks.filter((tsk: TaskInterface) => (tsk.state === "TASK_PINNED")),
        ...tasks.filter((tsk: TaskInterface) => (tsk.state !== "TASK_PINNED")),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map((tsk) => (
                <Task key={tsk.id} task={tsk} {...events} />
            ))}
        </div>
    );
};

PureTaskList.defaultProps = {
    loading: false,
};

// // // // // // // // // // // // 
export default connect(
    ({ tasks }: any) => ({
        tasks: tasks.filter((t: any) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }),
    dispatch => ({
        onArchiveTask: (id: any) => dispatch(archiveTask(id)),
        onPinTask: (id: any) => dispatch(pinTask(id)),
    })
)(PureTaskList);
