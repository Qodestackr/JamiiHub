export interface IOrganizationTask {
  taskId: string;
  assignee: string;
  dueDate: Date;
  status: "not_started" | "in_progress" | "completed" | "halted" | "abandoned";
  description: string;
}

export interface IProject<T> {
  name: string;
  description: string;
  time_range: Date;
  owner: string; // Name of the project owner or manager
  teamMembers: string[]; // Array of team members involved in the project
  status: "planning" | "in_progress" | "completed";
  budget: number;
  startDate: Date;
  endDate: Date;
  milestones: Array<{ name: string; date: Date }>; // List of project milestones and their dates
  tasks: T[]; // Array of tasks specific to the project, using a generic type T
  addHRTask?: (task: IOrganizationTask) => void;
  removeHRTask?: (taskId: string) => void;
  updateHRTask?: (taskId: string, updatedTask: Partial<IOrganizationTask>) => void;
}