export interface IDepartmentManager {
  departmentManagerId: string;
  name: string;
}

export interface IDepartment {
  departmentId?: string;
  departmentName: string;
  departmentManager: IDepartmentManager;
  subDepartments?: IDepartment[]; // Optional array of sub-departments
  employees?: IEmployee[]; // Optional array of employees within the department
}

export interface IEmployee {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  hireDate: Date;
}

// Example usage:
const departmentManager: IDepartmentManager = {
  departmentManagerId: "manager123",
  name: "John Doe",
};

const department: IDepartment = {
  departmentId: "dept123",
  departmentName: "Sales",
  departmentManager: departmentManager,
  subDepartments: [
    {
      departmentId: "dept124",
      departmentName: "Sales Team 1",
      departmentManager: {
        departmentManagerId: "manager456",
        name: "Jane Smith",
      },
    },
    {
      departmentId: "dept125",
      departmentName: "Sales Team 2",
      departmentManager: {
        departmentManagerId: "manager789",
        name: "Mike Johnson",
      },
    },
  ],
  employees: [
    {
      employeeId: "emp1",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      position: "Sales Executive",
      hireDate: new Date("2023-08-01"),
    },
    {
      employeeId: "emp2",
      firstName: "Bob",
      lastName: "Smith",
      email: "bob@example.com",
      position: "Sales Manager",
      hireDate: new Date("2022-05-15"),
    },
  ],
};
