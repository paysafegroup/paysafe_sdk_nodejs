var createArray = function(resArr, ClassName) {
	var newArr = [];
	var i = 0;
	var len = resArr.length;
	for (; i < len; i++) {
		if (resArr[i]) {
			var obj = new ClassName(resArr[i]);
			newArr.push(obj);
		}
	}
	return newArr;
};

module.exports = createArray;