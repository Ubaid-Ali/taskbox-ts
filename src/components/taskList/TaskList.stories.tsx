import React from "react";
import { Story, Meta } from '@storybook/react';

import { PureTaskList, TaskListPropsInterface } from "./TaskList";
import * as TaskStories from "../task/Task.stories";

export default {
  component: PureTaskList,
  title: "TaskList",
  decorators: [
    (story: any) => (<div style={{ padding: "3rem" }}> {story()}</div>),
  ],
} as Meta;

const Template: Story<TaskListPropsInterface> = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
if (TaskStories.Default.args?.task) {
  Default.args = {
    tasks: [
      { ...TaskStories.Default.args?.task, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
    ],
  };
}

export const WithPinnedTasks = Template.bind({});
if (Default.args?.tasks) {
  WithPinnedTasks.args = {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  }
}

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
