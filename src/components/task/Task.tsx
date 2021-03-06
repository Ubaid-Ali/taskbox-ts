import React from "react";

// interface
export interface taskPropsInterface {
    task: {
        title?: string;
        id?: string;
        state: string;
        updatedAt?: string
    };
    onArchiveTask?: any;
    onPinTask?: any;
}

// component
const Task: React.FC<taskPropsInterface> = ({
    task: { title, id, state },
    onArchiveTask,
    onPinTask,
}) => {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === "TASK_ARCHIVED"}
                    disabled={true}
                    name="check"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>

            <div className="title">
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    placeholder="Input title"
                />
            </div>

            <div className="actions" onClick={(event) => event.stopPropagation()}>
                {state !== "TASK_ARCHIVED" && (
                    <a onClick={() => onPinTask(id)} href="#top">
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Task;
