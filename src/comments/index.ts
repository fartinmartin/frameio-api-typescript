import { Get, Post } from "../types";

import {
  getComment,
  GetCommentRequestProps,
  GetCommentResponse,
} from "./getComment";

import {
  getComments,
  GetCommentsRequestProps,
  GetCommentsResponse,
} from "./getComments";

import {
  createComment,
  CreateCommentRequestProps,
  CreateCommentResponse,
} from "./createComment";

export class CommentsAPI {
  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getComment) */
  getComment: (props: GetCommentRequestProps) => Promise<GetCommentResponse>;

  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/getComments) */
  getComments: (props: GetCommentsRequestProps) => Promise<GetCommentsResponse>;

  /** [Frame.io API Reference](https://frameio.com/dev/automation/documentation/current#operation/createComment) */
  createComment: (
    props: CreateCommentRequestProps
  ) => Promise<CreateCommentResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.getComment = getComment(get);
    this.getComments = getComments(get);
    this.createComment = createComment(post);
  }
}
