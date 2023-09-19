export interface IMember {
  memberId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  hireDate: Date;
  createMember: (
    memberData: Omit<IMember, "memberId">
  ) => Promise<void>;

  updateMember: (
    memberId: string,
    updatedData: Partial<IMember>
  ) => Promise<void>;

  deleteMember: (memberId: string) => Promise<void>;
  //....
}