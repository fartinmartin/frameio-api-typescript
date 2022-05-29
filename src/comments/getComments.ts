import { Comment, Get } from "../types";

export interface GetCommentsRequestProps {
  asset_id: string;
  parameters?: {
    include: string;
  };
}

export type GetCommentsResponse = Comment[];

// https://developer.frame.io/api/reference/operation/getComments/
/** @internal */
export const getComments = (get: Get) => (props: GetCommentsRequestProps) => {
  const { asset_id, parameters } = props;
  const query = new URLSearchParams(parameters).toString();

  return get<GetCommentsResponse>(`assets/${asset_id}/comments?${query}`);
};
