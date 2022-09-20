import { Get, Post } from "../types";
import { AssetType, getAsset, GetAssetRequestProps, GetAssetResponse } from "./getAsset";
import { AssetSearchRequestProps, AssetSearchResponse, search } from "./search";

export class AssetsAPI {
  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getThreadV2) */
  getAsset: (props: GetAssetRequestProps) => Promise<GetAssetResponse>;
  search: (props: AssetSearchRequestProps) => Promise<AssetSearchResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.getAsset = getAsset(get);
    this.search = search(get);
  }
}

export { AssetType, GetAssetResponse };
