import { Comment, Get } from "../types";

export interface GetCommentRequestProps {
  comment_id: string;
  parameters?: {
    include: string;
  };
}

export type GetCommentResponse = Comment;

// https://developer.frame.io/api/reference/operation/getComment/
/** @internal */
export const getComment = (get: Get) => (props: GetCommentRequestProps) => {
  const { comment_id, parameters } = props;
  const query = new URLSearchParams(parameters).toString();

  return get<GetCommentResponse>(`comments/${comment_id}?${query}`);
};
