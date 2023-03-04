export class Future<T> {

  readonly resolve: (value: T) => void
  readonly reject: (error: unknown) => void

  readonly promise: Promise<T>

  /**
   * Just like a Promise but you can manually resolve or reject it
   */
  constructor() {
    let resolve: (value: T) => void
    let reject: (error: unknown) => void

    this.promise = new Promise((subresolve, subreject) => {
      resolve = subresolve
      reject = subreject
    })

    this.resolve = resolve!
    this.reject = reject!
  }
}
