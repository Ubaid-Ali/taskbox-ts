import React from "react";

import Task from "../task/Task";
import { taskPropsInterface } from "../task/Task";

export interface TaskListPropsInterface {
    loading: boolean;
    tasks: any[];
    onPinTask: any;
    onArchiveTask: any;
}

const TaskList: React.FC<TaskListPropsInterface> = ({
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
                <span>state</span>
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
        ...tasks.filter((tsk) => tsk.state === "TASK_PINNED"),
        ...tasks.filter((tsk) => tsk.state !== "TASK_PINNED"),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map((tsk) => (
                <Task key={tsk.id} task={tsk} {...events} />
            ))}
        </div>
    );
};

export default TaskList;
