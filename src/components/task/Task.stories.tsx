import React from 'react';

import Task from './Task';
import { propsInterface } from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args: propsInterface) => <Task {...args} />;

export const Default = (args: propsInterface) => <Task {...args} />;
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(),
  },
};

export const Pinned = Template.bind<any>({});
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