import { CommentRequestPropsBody } from ".";
import { Comment, Post } from "../types";

export interface CreateCommentRequestProps {
  asset_id: string;
  body: CommentRequestPropsBody;
}

export type CreateCommentResponse = Comment;

// https://developer.frame.io/api/reference/operation/createComment/
/** @internal */
export const createComment =
  (post: Post) => (props: CreateCommentRequestProps) => {
    // REQUEST BODY SCHEMA: application/json
    const { asset_id, body } = props;

    const s = Object.fromEntries(
      Object.entries(body).map(([k, v]) => [k, `${v}`])
    );

    return post<CreateCommentResponse>(
      `assets/${asset_id}/comments`,
      new URLSearchParams(s)
    );
  };

export type Frames = number;
