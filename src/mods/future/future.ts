export class Future<T> {

  #resolve: (value: T) => void

  #reject: (error: unknown) => void

  readonly promise: Promise<T>

  /**
   * Just a Promise with a resolve and reject function
   */
  constructor(promise?: Promise<T>) {
    if (promise == null) {
      const { promise, resolve, reject } = Promise.withResolvers<T>()

      this.promise = promise
      this.#resolve = resolve
      this.#reject = reject
    } else {
      this.promise = promise
      this.#resolve = () => { }
      this.#reject = () => { }
    }
  }

  static resolve<T>(value: T): Future<T> {
    return new Future<T>(Promise.resolve<T>(value))
  }

  static reject<T>(error: unknown): Future<T> {
    return new Future<T>(Promise.reject<T>(error))
  }

  get resolve() {
    return this.#resolve
  }

  get reject() {
    return this.#reject
  }

}
