import { Response } from "express";

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  statusCode: number;
  timestamp?: string;
}

export class AppResponse {
  /**
   * Send success response
   */
  static success<T = any>(
    res: Response,
    message: string = "Success",
    data?: T,
    statusCode: number = 200,
  ): Response {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
      statusCode,
      timestamp: new Date().toISOString(),
    };

    return res.status(statusCode).json(response);
  }

  /**
   * Send error response
   */
  static error(
    res: Response,
    message: string = "Internal Server Error",
    statusCode: number = 500,
    error?: string,
  ): Response {
    const response: ApiResponse = {
      success: false,
      message,
      error,
      statusCode,
      timestamp: new Date().toISOString(),
    };

    return res.status(statusCode).json(response);
  }

  /**
   * Send created response (201)
   */
  static created<T = any>(
    res: Response,
    message: string = "Created successfully",
    data?: T,
  ): Response {
    return this.success(res, message, data, 201);
  }

  /**
   * Send not found response (404)
   */
  static notFound(
    res: Response,
    message: string = "Resource not found",
  ): Response {
    return this.error(res, message, 404);
  }

  /**
   * Send bad request response (400)
   */
  static badRequest(
    res: Response,
    message: string = "Bad request",
    error?: string,
  ): Response {
    return this.error(res, message, 400, error);
  }

  /**
   * Send unauthorized response (401)
   */
  static unauthorized(
    res: Response,
    message: string = "Unauthorized",
  ): Response {
    return this.error(res, message, 401);
  }

  /**
   * Send forbidden response (403)
   */
  static forbidden(res: Response, message: string = "Forbidden"): Response {
    return this.error(res, message, 403);
  }

  /**
   * Send validation error response (422)
   */
  static validationError(
    res: Response,
    message: string = "Validation failed",
    errors?: any,
  ): Response {
    const response: ApiResponse = {
      success: false,
      message,
      error: errors,
      statusCode: 422,
      timestamp: new Date().toISOString(),
    };

    return res.status(422).json(response);
  }

  /**
   * Send server error response (500)
   */
  static serverError(
    res: Response,
    message: string = "Internal server error",
    error?: string,
  ): Response {
    return this.error(res, message, 500, error);
  }
}
