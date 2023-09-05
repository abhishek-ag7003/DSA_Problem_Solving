/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
	a: {
		b: {
			c: 12,
			j: false
		},
		k: null
	}
};
const findPath = (object, path) => {
	const str = path.split('.');
	let result = null;
	let temp = null;
	for (let i = 0; i < str.length; i++) {
		if (!temp) {
			temp = object[str[i]];
		} else {
			temp = temp[str[i]];
			result = temp;
		}

	}
	return result;
};


console.log('a.b.c =>', findPath(obj, 'a.b.c')); // 12
console.log('a.b =>', findPath(obj, 'a.b')); // {c: 12, j: false}
console.log('a.b.d =>', findPath(obj, 'a.b.d')); // undefined
console.log('a.c =>', findPath(obj, 'a.c')); // undefined
console.log('a.b.c.d =>', findPath(obj, 'a.b.c.d')); // undefined
console.log('a.b.c.d.e =>', findPath(obj, 'a.b.c.d.e')); // undefined
console.log('a.b.j =>', findPath(obj, 'a.b.j')); //false
console.log('a.b.j.k =>', findPath(obj, 'a.b.j.k')); //undefined
console.log('a.k =>', findPath(obj, 'a.k')); //null
