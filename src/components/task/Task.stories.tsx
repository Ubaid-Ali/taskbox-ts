import React from 'react';
import { Meta, Story } from '@storybook/react';

import Task from './Task';
import { taskPropsInterface } from './Task';

export default {
  component: Task,
  title: 'Task',
} as Meta;

const Template: Story<taskPropsInterface> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date().toDateString(),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind<any>({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};