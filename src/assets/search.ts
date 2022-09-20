import { Asset, ID, Get, StreamAsset } from "../types";

export interface AssetSearchRequestProps {
  query: string;
  parameters: {
    account_id: string;
    project_id?: string;
    include?: string;
    include_deleted?: boolean;
    page?: number;
    page_size?: number;
    shared_projects?: boolean;
    sort?: string;
    type?: string;
  };
}

export type AssetSearchResponse = (Asset | StreamAsset)[]; // TODO: ImageAsset | DocumentAsset

// https://developer.frame.io/api/reference/operation/getAsset/
/** @internal */
export const search = (get: Get) => (props: AssetSearchRequestProps) => {
  const { query: q, parameters } = props;

  const p = parameters;
  const params = Object.fromEntries(Object.entries(p).map(([k, v]) => [k, `${v}`]));
  const query = new URLSearchParams(params).toString();

  return get<AssetSearchResponse>(`search/assets?${query}&q=${q}`);
};

export enum AssetType {
  FILE = "file",
  FOLDER = "folder",
  VERSIONSTACK = "version_stack",
  BUNDLE = "bundle",
}
