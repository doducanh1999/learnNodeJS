const learnNodeResponse = (res, {statusCode, code, message}, data = {}) =>
res.status(statusCode).send ({
    statusCode,
    code,
    message,
    data,

});
export default learnNodeResponse;

// truyen res vao de ra final result