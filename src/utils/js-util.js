export function arrayOnlyUnique(a) {
	function onlyUnique(value, index, array) {
		return array.indexOf(value) === index;
	}

	return a.filter(onlyUnique);
}

export function classStringToArray(classString) {
	if (!classString)
		classString="";

	return arrayOnlyUnique(classString.split(/ +/).filter(s=>s));
}
