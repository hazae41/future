export class Future<T = unknown, E = unknown> {

  readonly ok: (x: T) => void
  readonly err: (e: E) => void

  readonly promise: Promise<T>

  /**
   * Like a Promise but you can manually fulfill or reject it
   */
  constructor() {
    let ok: (x: T) => void
    let err: (e: E) => void

    this.promise = new Promise((pok, perr) => {
      ok = pok
      err = perr
    })

    this.ok = ok!
    this.err = err!
  }
}
