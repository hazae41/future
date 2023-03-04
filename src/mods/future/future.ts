export class Future<T> {

  #resolve?: (value: T) => void
  #reject?: (error: unknown) => void

  readonly promise: Promise<T>

  /**
   * Just like a Promise but you can manually resolve or reject it
   */
  constructor() {
    this.promise = new Promise((subresolve, subreject) => {
      this.#resolve = subresolve
      this.#reject = subreject
    })
  }

  get resolve() {
    return this.#resolve!
  }

  get reject() {
    return this.#reject!
  }

}
