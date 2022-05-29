import { Account, Get } from "../types";

export interface GetAccountRequestProps {
  account_id: string;
}

export type GetAccountResponse = Account;

// https://developer.frame.io/api/reference/operation/getAccount/
/** @internal */
export const getAccount = (get: Get) => (props: GetAccountRequestProps) => {
  const { account_id } = props;
  return get<GetAccountResponse>(`accounts/${account_id}`);
};
