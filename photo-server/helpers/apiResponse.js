exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	}
	return res.status(200).json(resData)
}

exports.ErrorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg
	}
	return res.status(500).json(data)
}

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg
	}
	return res.status(404).json(data)
}
