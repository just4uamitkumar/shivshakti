interface ErrorResponse {
    response?: {
        status: number;
    };
}

export const handleFetchError = (error: ErrorResponse | unknown): string => {
    if (!error) {
        return "Network error occurred. Please try again.";
    }

    const status = error.status;
    switch (status) {
        case 400:
            return "Bad request. Please check your request.";
        case 401:
            return "Unauthorized. Please login again.";
        case 404:
            return "Resource not found.";
        case 500:
            return "Unable to fetch data at this moment. Please try again later.";
        default:
            return `Unexpected error: ${status}`;
    }
};
