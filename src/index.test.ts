import axios from "axios";
import { FrameIOClient, AssetType } from ".";

jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;
axiosMock.get.mockResolvedValue({ data: {} });
axiosMock.post.mockResolvedValue({ data: {} });
axiosMock.put.mockResolvedValue({ data: {} });

describe("library", () => {
  const client = new FrameIOClient("");

  it("exports a client object", () => {
    expect(client).toBeDefined();
  });

  it("exports apis", () => {
    expect(client).toHaveProperty("assets");
    expect(client).toHaveProperty("accounts");
    expect(client).toHaveProperty("comments");
  });

  it("calls axios for GET requests", () => {
    client.assets.getAsset({ asset_id: "" });
    expect(axiosMock.get).toBeCalled();
  });

  it("calls axios for POST requests", () => {
    client.comments.createComment({ asset_id: "", body: { text: "" } });
    expect(axiosMock.post).toBeCalled();
  });

  it("calls axios for PUT requests", () => {
    client.comments.updateComment({ comment_id: "", body: { text: "" } });
    expect(axiosMock.put).toBeCalled();
  });

  it("exports enums", () => {
    const enumOption = AssetType.FILE;
    expect(enumOption).toBeDefined();
  });
});
