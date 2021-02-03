import React from "react";

import TaskList, { TaskListPropsInterface } from "./TaskList";
import * as TaskStories from "../task/Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>, //fix later
  ],
};

const Template = (args: TaskListPropsInterface) => <TaskList {...args} />; //fix later

export const Default: any = Template.bind({}); //fix later
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ],
};

export const WithPinnedTasks = Template.bind<any>({}); //fix later
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind<any>({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind<any>({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
