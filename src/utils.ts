import hyperid from 'hyperid';

class IdFactory{
    private readonly instance = hyperid({
        fixedLength: true
    });

    public readonly decode = this.instance.decode.bind(this);

    id(){
        return this.instance();
    }
}

export const idFactory = new IdFactory();

export function generateId(): string{
    return idFactory.id()
}