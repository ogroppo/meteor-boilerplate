isObject = (obj) => obj === Object(obj);

getObjectLength = (obj) => Object.keys(obj).length;

copy = (obj) => Object.assign({}, obj);

isEmpty = (thing) => {
	if(isObject(thing) && Object.keys(thing).length)
		return false;

	if(isArray(thing) && thing.length)
		return false;

	if(isString(thing) && thing)
		return false;

	return true;
}

isNotEmpty = (object) => !isEmpty(object);