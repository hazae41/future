<div align="center">
<img src="https://user-images.githubusercontent.com/4405263/222455728-e8d51c2a-e192-4df6-be04-1f0d12575929.png" />
</div>

Like a Promise but you can manually fulfill or reject it

```bash
npm i @hazae41/future
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/future)

## Features

### Current features
- 100% TypeScript and ESM
- No external dependencies
- Unit-tested

## Usage

```typescript
const future = new Future<void, unknown>()

const okTimeout = setTimeout(() => future.ok(), 1000)
const errTimeout = setTimeout(() => future.err(), 2000)

try {
  await future.promise
} finally {
  clearTimeout(okTimeout)
  clearTimeout(errTimeout)
}
```
