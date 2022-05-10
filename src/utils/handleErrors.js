const handleHttpError = (res, message = "SOMETHING HAPPENED", code = 403) =>{
    res.status(code)
    res.send({ error : message });
};

module.exports = {handleHttpError};