const responseHandler = (req, res, next) => {
	console.log('In route response handler');
	console.log(res.result);
	if (res.result) {
		console.log(res.result);
		console.log(res.result.httpStatus);
		if (!res.result.httpStatus) {
			sendError(res, 500);
		}
		if (res.result.httpStatus > 200) {
			sendError(res, res.result.httpStatus);
		} else if (res.result.httpStatus === 200) {
			sendSuccess(res);
		}
	} else {
		next();
	}
};
function sendError(res, code) {
    console.error(res.result.data);
    if (code === 501) {
        res.status(code).json({});
    } else {
        res.status(code).json({
            type: 'error',
            code: res.result.code ? res.result.code.toString() : null,
            messageEn: res.result.messageEn,
            messageAr: res.result.messageAr,
            data: res.result.data,
        });
    }
}

function sendSuccess(res) {
	console.log(res.result.messageEn);
	res.status(res.result.httpStatus).json(res.result.data);
}

module.exports = responseHandler;
