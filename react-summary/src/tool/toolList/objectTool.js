// 1.`flattenObject`：以键的路径扁平化对象
/*
使用递归。
利用Object.keys(obj)联合Array.prototype.reduce()，以每片叶子节点转换为扁平的路径节点。
如果键的值是一个对象，则函数使用调用适当的自身prefix以创建路径Object.assign()。
否则，它将适当的前缀键值对添加到累加器对象。
prefix除非您希望每个键都有一个前缀，否则应始终省略第二个参数。
*/

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }

// 2. `unflattenObject`：以键的路径展开对象
// 与上面的相反，展开对象。
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});

unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }

// 3.迭代属性并执行回调
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1

// 4.检查值是否为特定类型
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true

// 5.在两个变量之间进行深度比较以确定它们是否全等。
const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
  };

//   返回值或变量的类型名
  const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
getType(new Set([1, 2, 3])); // 'set'
getType([1, 2, 3]); // 'array'

// 校验指定元素的类名
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true

// 获取不同类型变量的长度
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;

size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3