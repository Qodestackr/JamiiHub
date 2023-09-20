export const JAMII_DAO_BASE_URL = "/api/jamii-dao";
export const FONBANK_WALLET = `https://pay.fonbnk.com/wallet`
export const FONBANK_PHONE_PAGE = `https://pay.fonbnk.com/phone`

export const FONBANK_OTP_PAGE = `https://pay.fonbnk.com/otp`

export const DONATE_URL = "https://pay.fonbnk.com/?freezeWallet=1&network=POLYGON&address=0xa6dBAE6239E2B18A8c60E8F0EC2eE84ca623e5c2";
export const FONBANK_MAIN_URL = `https://pay.fonbnk.com/?freezeWallet=1&network=POLYGON&address=0xa6dBAE6239E2B18A8c60E8F0EC2eE84ca623e5c2`

// Members and Requests
export const GET_MEMBERS_URL = `${JAMII_DAO_BASE_URL}/members`;
export const ADD_MEMBER_URL = `${JAMII_DAO_BASE_URL}/members/add`;
export const GET_MEMBER_DETAILS_URL = (memberId: string) =>
  `${JAMII_DAO_BASE_URL}/members/${memberId}`;
export const MEMBER_REQUESTS_URL = `${JAMII_DAO_BASE_URL}/member-requests`;

// Proposals
export const GET_PROPOSALS_URL = `${JAMII_DAO_BASE_URL}/proposals`;
export const ADD_PROPOSAL_URL = `${JAMII_DAO_BASE_URL}/proposals/add`;
export const GET_PROPOSAL_DETAILS_URL = (proposalId: string) =>
  `${JAMII_DAO_BASE_URL}/proposals/${proposalId}`;

// Voting
export const VOTE_ON_PROPOSAL_URL = (proposalId: string) =>
  `${JAMII_DAO_BASE_URL}/proposals/${proposalId}/vote`;

// Crowdfunding
export const GET_CAMPAIGNS_URL = `${JAMII_DAO_BASE_URL}/campaigns`;
export const CREATE_CAMPAIGN_URL = `${JAMII_DAO_BASE_URL}/campaigns/create`;
export const CONTRIBUTE_TO_CAMPAIGN_URL = (campaignId: string) =>
  `${JAMII_DAO_BASE_URL}/campaigns/${campaignId}/contribute`;

// Notifications
export const GET_NOTIFICATIONS_URL = `${JAMII_DAO_BASE_URL}/notifications`;
export const MARK_NOTIFICATION_READ_URL = (notificationId: string) =>
  `${JAMII_DAO_BASE_URL}/notifications/${notificationId}/mark-read`;

// Settings
export const GET_SETTINGS_URL = `${JAMII_DAO_BASE_URL}/settings`;
export const UPDATE_SETTINGS_URL = `${JAMII_DAO_BASE_URL}/settings/update`;
