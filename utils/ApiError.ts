export default class ApiError<T = any> {
    readonly success: boolean;
    readonly message: string;
    readonly data: T | null;
    readonly code: T | number;
    constructor({
        success = false,
        message = "Internal Server Error",
        data = null,
        code = 500,
    }: {
        success?: boolean;
        message?: string;
        data?: T | null;
        code?: T | number;
    } = {}) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.code = code
    }
}