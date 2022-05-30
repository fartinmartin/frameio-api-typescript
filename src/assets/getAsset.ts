import { Asset, Get } from "../types";

export interface GetAssetRequestProps {
  asset_id: string;
  parameters?: {
    include_deleted: boolean;
    type: AssetType | AssetType[];
  };
}

export type GetAssetResponse = Asset;

// https://developer.frame.io/api/reference/operation/getAsset/
/** @internal */
export const getAsset = (get: Get) => (props: GetAssetRequestProps) => {
  const { asset_id, parameters } = props;

  const p = parameters || { include_deleted: "true", type: "file" };
  const params = Object.fromEntries(Object.entries(p).map(([k, v]) => [k, `${v}`]));
  const query = new URLSearchParams(params).toString();

  return get<GetAssetResponse>(`assets/${asset_id}?${query}`);
};

export enum AssetType {
  FILE = "file",
  FOLDER = "folder",
  VERSIONSTACK = "version_stack",
  BUNDLE = "bundle",
}
