// Function to set a successful response with status code 200 and JSON data
export const setResponse = (response, data) => {
    response.status(200); // Set status code to 200 (OK)
    response.json(data); // Send JSON data in the response body
}

// Function to set an error response with status code 500 and a standard error JSON object
export const setError = (response, err) => {
    console.log(err); // Log the error for debugging purposes
    response.status(500); // Set status code to 500 (Internal Server Error)
    response.json({
        error: {
            code: 'InternalServerError',
            message: 'Error occurred while processing the request' // Standard error message
        }
    });
}
