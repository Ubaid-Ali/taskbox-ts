import React, { FC } from 'react'
import { connect } from 'react-redux';

import TaskList, { PureTaskList } from '../taskList/TaskList';

export interface inboxScreenPropsInterface {
    error: string
}

export const PureInboxScreen: FC<inboxScreenPropsInterface> = ({ error }) => { // any? fix later
    if (error) {
        return (
            <div className="page lists-show" >
                <div className="wrapper-message" >
                    <span className="icon-face-sad" />
                    <div className="title-message" >Oh no!</div>
                    <div className="subtitle-message" >Something went wrong</div>
                </div>
            </div>
        )
    }


    return (
        <div className="page lists-show" >
            <nav>
                <h1 className="title-page" >
                    <span className="title-wrapper" >Taskbox</span>
                </h1>
            </nav>
            <TaskList {...TaskList.arguments} />
        </div>
    )
}



export default connect(({ error }: inboxScreenPropsInterface) => ({ error }))(PureTaskList)