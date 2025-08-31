export class AppError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = 'AppError';

    // This is needed for proper inheritance in TypeScript
    Object.setPrototypeOf(this, AppError.prototype);
  }
} 