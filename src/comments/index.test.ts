import * as comment from ".";

const get = jest.fn();
const post = jest.fn();
const put = jest.fn();

describe("comment", () => {
  const api = new comment.CommentsAPI(get, post, put);
  afterEach(() => {
    get.mockReset();
    // post.mockReset();
  });

  it("has callable getComment method that uses get", () => {
    api.getComment({ comment_id: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable getComments method that uses get", () => {
    api.getComments({ asset_id: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable createComment method that uses post", () => {
    api.createComment({ asset_id: "", body: { text: "" } });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable updateComment method that uses put", () => {
    api.updateComment({ comment_id: "", body: { text: "" } });
    expect(put).toBeCalledTimes(1);
  });
});
