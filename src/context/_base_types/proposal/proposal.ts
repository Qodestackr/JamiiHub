const createActionTypes = (baseType: any) => ({
  LOADING: `${baseType}_LOADING`,
  SUCCESS: `${baseType}_SUCCESS`,
  FAILED: `${baseType}_FAILED`,
});

// DAO Operations
export const CREATE_PROPOSAL = createActionTypes("CREATE_PROPOSAL");
export const VOTE_ON_PROPOSAL = createActionTypes("VOTE_ON_PROPOSAL");
export const EXECUTE_PROPOSAL = createActionTypes("EXECUTE_PROPOSAL");
export const WITHDRAW_FUNDS = createActionTypes("WITHDRAW_FUNDS");

// Example action creators
const createLoadingAction = (type: { LOADING: any; SUCCESS?: string; FAILED?: string; }) => ({
  type: type.LOADING,
});

const createSuccessAction = (type: { LOADING?: string; SUCCESS: any; FAILED?: string; }, data: any) => ({
  type: type.SUCCESS,
  payload: data,
});

const createFailedAction = (type: { LOADING?: string; SUCCESS?: string; FAILED: any; }, error: any) => ({
  type: type.FAILED,
  payload: error,
});

// Usage example for DAO actions
export const createProposalLoading = createLoadingAction(CREATE_PROPOSAL);