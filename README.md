# frameio-api-typescript

[![codecov](https://codecov.io/gh/fartinmartin/frameio-api-typescript/branch/main/graph/badge.svg?token=T2G2GO9T9K)](https://codecov.io/gh/fartinmartin/frameio-api-typescript)
[![npm version](https://badge.fury.io/js/frameio-api-typescript.svg)](https://www.npmjs.com/package/frameio-api-typescript)

This is the unofficial Node.js library to access the [Frame.io API](https://developer.frame.io/api/reference/).

## Notice

This library should be considered as Work In Progress. There is no official `frameio-api` library, so I "created" this one that is more convenient to use thanks to typings and promises. "Created", because this is shamelessly ripped from @piotrekwitkowski's [`quip-api-typescript`](https://github.com/piotrekwitkowski/quip-api-typescript) 😃

## Installation

`npm i frameio-api-typescript`

## Usage

For now, the library supports only access token auth (no OAuth).

```ts
import { FrameIOClient } from "frameio-api-typescript";

const ACCESS_TOKEN = "your-access-token";
const client = new FrameIOClient(ACCESS_TOKEN);

// use like this
client.assets
  .getAsset({ asset_id: "" })
  .then((response) => doSomething(response));

// or this
client.accounts
  .getAccount({ account_id: "eefb57e0-79f2-4bc7-9b70-99fbc175175c" })
  .then((response) => doSomething(response));
```

## Documentation

More methods, request and response types can be found in the [documentation](https://fartinmartin.github.io/frameio-api-typescript/).

## Official Frame.io API Docs

- [Frame.io API Reference](https://developer.frame.io/api/reference)
- [Get a API Access Token](https://developer.frame.io/app/tokens)

## Contributing

PRs are welcome! Please feel encouraged to star this repo too!
