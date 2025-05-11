export class AuthToken{
    constructor( private _key: string ){}
    get key() {
        return this._key;
    }
}

export interface AuthData {
    key: string;   
}