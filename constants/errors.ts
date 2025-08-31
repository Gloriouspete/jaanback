export const ERROR_CODES = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409
}

export const ERROR_MESSAGES = {
    [ERROR_CODES.VALIDATION_ERROR]: "Validation Failed",
    [ERROR_CODES.UNAUTHORIZED]: "Authentication Required",
    [ERROR_CODES.NOT_FOUND]: "Resource Not Found"
}