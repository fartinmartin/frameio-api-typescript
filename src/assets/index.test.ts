import * as assets from ".";

const get = jest.fn();
const post = jest.fn();

describe("assets file", () => {
  const api = new assets.AssetsAPI(get, post);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it("has callable getAsset method that uses get", () => {
    api.getAsset({ asset_id: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable search method that uses get", () => {
    api.search({ query: "", parameters: { account_id: "" } });
    expect(get).toBeCalledTimes(1);
  });
});
