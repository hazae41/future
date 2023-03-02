<div align="center">
<img src="https://user-images.githubusercontent.com/4405263/219944821-62f41f78-522b-4d10-92fb-923ae6c36602.png" />
</div>

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