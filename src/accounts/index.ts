import { Get } from "../types";
import { getAccount, GetAccountRequestProps, GetAccountResponse } from "./getAccount";

export class AccountsAPI {
  /** [Frame.io API Reference](https://developer.frame.io/api/reference/operation/getAccount/) */
  getAccount: (props: GetAccountRequestProps) => Promise<GetAccountResponse>;

  /** @internal */
  constructor(get: Get) {
    this.getAccount = getAccount(get);
  }
}
