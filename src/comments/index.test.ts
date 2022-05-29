import * as comment from ".";

const get = jest.fn();
const post = jest.fn();

describe("comment", () => {
  const api = new comment.CommentsAPI(get, post);
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
});
