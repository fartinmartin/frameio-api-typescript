import { CommentRequestPropsBody } from ".";
import { Comment, Put } from "../types";

export interface UpdateCommentRequestProps {
  asset_id: string;
  body: CommentRequestPropsBody;
}

export type UpdateCommentResponse = Comment;

// https://developer.frame.io/api/reference/operation/updateComment/
/** @internal */
export const updateComment = (put: Put) => (props: UpdateCommentRequestProps) => {
  // REQUEST BODY SCHEMA: application/json
  const { asset_id, body } = props;
  const s = Object.fromEntries(Object.entries(body).map(([k, v]) => [k, `${v}`]));

  return put<UpdateCommentResponse>(`assets/${asset_id}/comments`, new URLSearchParams(s));
};
