export default class NormalizedResponse {
    private readonly message;
    private readonly data;
    constructor(message: string, data: any);
    toJSON(): {
        message: string;
        data: any;
    };
}
