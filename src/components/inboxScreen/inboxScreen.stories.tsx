import React from 'react';
import { Story } from '@storybook/react'
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { PureInboxScreen, inboxScreenPropsInterface } from './InboxScreen';
import * as TaskListStories from '../taskList/TaskList.stories';
import { Store } from 'redux';

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args?.tasks,
        }
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
}

export default {
    component: PureInboxScreen,
    title: "InboxScreen",
    decorators: [(story: any) => <Provider store={store as any} >{story()}</Provider>]
}

const Template: Story<inboxScreenPropsInterface> = (args) => <PureInboxScreen {...args} />

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: "Something",
}