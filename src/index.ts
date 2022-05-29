import axios from "axios";

import { AccountsAPI } from "./accounts";
import { AssetType, AssetsAPI } from "./assets";
import { CommentsAPI } from "./comments";

export class FrameIOClient {
  accounts: AccountsAPI;
  assets: AssetsAPI;
  comments: CommentsAPI;

  constructor(accessToken: string, urlBase = "https://api.frame.io/v2/") {
    const axiosConfig = { headers: { Authorization: "Bearer " + accessToken } };
    const get = <T>(path: string) =>
      axios
        .get<T>(urlBase + path, axiosConfig)
        .then((response) => response.data);
    const post = <T>(path: string, data: any) =>
      axios
        .post<T>(urlBase + path, data, axiosConfig)
        .then((response) => response.data);

    this.accounts = new AccountsAPI(get);
    this.assets = new AssetsAPI(get, post);
    this.comments = new CommentsAPI(get, post);
  }
}

// re-export enums
export { AssetType };
