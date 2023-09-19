/**Manages project-related data and functionalities.
Includes features for creating projects, assigning team members, and tracking project progress. */
import React, { createContext, useContext, useState } from "react";

// Define the type for a project
export interface IProject {
  projectId: string;
  name: string;
  description: string;
  teamMembers: string[]; //memberIds
  progress: number; //%
}

// Create the ProjectsContext
const ProjectsContext = createContext<
  | {
    projects: IProject[];
    createProject: (project: IProject) => void;
  }
  | undefined
>(undefined);

// ProjectsContext Provider component
export function ProjectsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState<IProject[]>([]);

  const createProject = (project: IProject) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <ProjectsContext.Provider value={{ projects, createProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}

// Hook to use the ProjectsContext
export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsContextProvider"
    );
  }
  return context;
}
