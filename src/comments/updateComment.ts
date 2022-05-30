import { CommentRequestPropsBody } from ".";
import { Comment, Put } from "../types";

export interface UpdateCommentRequestProps {
  comment_id: string;
  body: CommentRequestPropsBody;
}

export type UpdateCommentResponse = Comment;

// https://developer.frame.io/api/reference/operation/updateComment/
/** @internal */
export const updateComment = (put: Put) => (props: UpdateCommentRequestProps) => {
  // REQUEST BODY SCHEMA: application/json
  const { comment_id, body } = props;
  const params = Object.fromEntries(Object.entries(body).map(([k, v]) => [k, `${v}`]));

  return put<UpdateCommentResponse>(`comments/${comment_id}`, new URLSearchParams(params));
};
