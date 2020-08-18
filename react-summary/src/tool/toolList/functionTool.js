// 1.`attempt`：捕获函数运行异常
// 该代码段执行一个函数，返回结果或捕获的错误对象。
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []

// 2. `defer`：推迟执行函数
// 此代码段延迟了函数的执行，直到清除了当前调用堆栈。
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// 3. `runPromisesInSeries`：运行多个`Promises`
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]);
//依次执行每个Promises ，总共需要3秒钟才能完成

// 4. `timeTaken`：计算函数执行时间
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms

// 5.缓存函数
/** 
 * 通过实例化一个Map对象来创建一个空的缓存。
通过检查输入值的函数输出是否已缓存，返回存储一个参数的函数，该参数将被提供给已记忆的函数；如果没有，则存储并返回它。
*/
const memoize = fn => {
    const cache = new Map();
    const cached = function(val) {
      return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
  };

// 6. `once`：只调用一次的函数
const once = fn => {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
};

