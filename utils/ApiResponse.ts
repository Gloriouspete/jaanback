export default class ApiResponse<T = any> {
    readonly success: boolean;
    readonly message: string;
    readonly data: T | null;
    readonly code: number;

    constructor({
        success = true,
        message = "Operation Successful",
        data = null,
        code = 200
    }: {
        success?: boolean;
        message?: string;
        data?: T | null;
        code?: number;
    } = {}) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.code = code

    }
}