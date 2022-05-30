import { Get, Post, Put } from "../types";

import { getComment, GetCommentRequestProps, GetCommentResponse } from "./getComment";
import { getComments, GetCommentsRequestProps, GetCommentsResponse } from "./getComments";
import { createComment, CreateCommentRequestProps, CreateCommentResponse } from "./createComment";
import { updateComment, UpdateCommentRequestProps, UpdateCommentResponse } from "./updateComment";

export class CommentsAPI {
  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getComment) */
  getComment: (props: GetCommentRequestProps) => Promise<GetCommentResponse>;

  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getComments) */
  getComments: (props: GetCommentsRequestProps) => Promise<GetCommentsResponse>;

  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/createComment) */
  createComment: (props: CreateCommentRequestProps) => Promise<CreateCommentResponse>;

  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/createComment) */
  updateComment: (props: UpdateCommentRequestProps) => Promise<UpdateCommentResponse>;

  /** @internal */
  constructor(get: Get, post: Post, put: Put) {
    this.getComment = getComment(get);
    this.getComments = getComments(get);
    this.createComment = createComment(post);
    this.updateComment = updateComment(put);
  }
}

export interface CommentRequestPropsBody {
  text: string;
  annotation?: string;
  page?: number;
  pitch?: number;
  timestamp?: Frames;
  yaw?: number;
  duration?: Frames;
  private?: boolean;
}

export type Frames = number;
