<div align="center">
<img src="https://user-images.githubusercontent.com/4405263/222497326-825b2ebb-910b-41ca-8759-785c4876faf0.png" />
</div>

Like a Promise but you can manually resolve or reject it

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
import { Future } from "@hazae41/future"

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
