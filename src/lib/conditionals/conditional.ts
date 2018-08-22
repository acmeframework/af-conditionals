export abstract class Conditional {

    constructor(protected assertMsg: string) {}

    public assert(value: any): void {
        if (!this.test(value)) {
            throw new TypeError(`${value} ${this.assertMsg}`);
        }
    }

    public abstract test(value: any): boolean;
}
