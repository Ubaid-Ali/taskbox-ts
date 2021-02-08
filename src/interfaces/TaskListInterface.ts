import { TaskInterface } from './Task.interface';

export interface TaskListInterface {
    loading: boolean;
    tasks?: Array<TaskInterface>;
    onPinTask: any;
    onArchiveTask: any;
}