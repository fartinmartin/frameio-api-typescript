import { Get, Post } from "../types";
import { AssetType, getAsset, GetAssetRequestProps, GetAssetResponse } from "./getAsset";

export class AssetsAPI {
  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getThreadV2) */
  getAsset: (props: GetAssetRequestProps) => Promise<GetAssetResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.getAsset = getAsset(get);
  }
}

export { AssetType, GetAssetResponse };
