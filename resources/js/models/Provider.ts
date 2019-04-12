import IProvider from '../interfaces/IProvider';

export default class Provider implements IProvider {
    public handle: string;
    public name: string;
    public description: string;

    constructor(opts: IProvider) {
        this.handle = opts.handle;
        this.name = opts.name;
        this.description = opts.description;
    }
}
