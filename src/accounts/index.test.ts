import * as accounts from ".";

const get = jest.fn();
// const post = jest.fn();

describe("accounts file", () => {
  const api = new accounts.AccountsAPI(get);
  afterEach(() => {
    get.mockReset();
    // post.mockReset();
  });

  it("has callable getUser method that uses get", () => {
    api.getAccount({ account_id: "" });
    expect(get).toBeCalledTimes(1);
  });
});
