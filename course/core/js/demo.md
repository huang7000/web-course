# 经典案例算法

:::code 深拷贝

- {...}和Object.assign() 只能实现一维对象的深拷贝。
- JSON.parse(JSON.stringify(obj)) 不能深拷贝含有undefined、function、symbol值的对象
- lodash.js的deepClone
- 自己写递归函数
  
```js
let oldObj = {
  name: "ceshi",
  obj: { name: "xiobai", age: 18 },
  func: function () {
    return "test"
  }
};
let copyObj2 = JSON.parse(JSON.stringify(oldObj))
let copyObj3 = { ...oldObj }
let copyObj4 = Object.assign(oldObj);
oldObj.obj.name = 123258;
console.log(oldObj);
console.log(copyObj2);
console.log(copyObj3);
console.log(copyObj4);
//递归深拷贝
function deepCopy(obj, cache = []) {
  // obj是null或者不是object直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  if (obj.constructor === Date) return new Date(obj);
  //const hit = find(cache, c => c.original === obj)
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }
  const copy = Array.isArray(obj) ? [] : {}
  //首先将副本放入缓存
  //因为我们想在递归deepCopy中引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
  return copy
}
var obj = { x: 1, y: 2 };
obj.z = obj;
var copyObj = deepCopy(obj);
console.log(obj);
console.log(copyObj);
```

:::

:::code Set 定义正式集合操作

- 某些 Set 操作是有关联性的，因此最好让实现的方法能支持处理任意多个集合实例。
- Set 保留插入顺序，所有方法返回的集合必须保证顺序。
- 尽可能高效地使用内存。扩展操作符的语法很简洁，但尽可能避免集合和数组间的相互转换能够节省对象初始化成本。
- 不要修改已有的集合实例。union(a, b)或 a.union(b)应该返回包含结果的新集合实例。

```js
class XSet extends Set {
  union(...sets) {
    return XSet.union(this, ...sets)
  }
  intersection(...sets) {
    return XSet.intersection(this, ...sets);
  }
  difference(set) {
    return XSet.difference(this, set);
  }
  symmetricDifference(set) {
    return XSet.symmetricDifference(this, set);
  }
  cartesianProduct(set) {
    return XSet.cartesianProduct(this, set);
  }
  powerSet() {
    return XSet.powerSet(this);
  }
  // 返回两个或更多集合的并集
  static union(a, ...bSets) {
    const unionSet = new XSet(a);
    for (const b of bSets) {
      for (const bValue of b) {
        unionSet.add(bValue);
      }
    }
    return unionSet;
  }
  // 返回两个或更多集合的交集
  static intersection(a, ...bSets) {
    const intersectionSet = new XSet(a);
    for (const aValue of intersectionSet) {
      for (const b of bSets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue);
        }
      }
    }
    return intersectionSet;
  }
  // 返回两个集合的差集
  static difference(a, b) {
    const differenceSet = new XSet(a);
    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue);
      }
    }
    return differenceSet;
  }
  // 返回两个集合的对称差集
  static symmetricDifference(a, b) {
    // 按照定义，对称差集可以表达为
    return a.union(b).difference(a.intersection(b));
  }
  // 返回两个集合（数组对形式）的笛卡儿积
  // 必须返回数组集合，因为笛卡儿积可能包含相同值的对
  static cartesianProduct(a, b) {
    const cartesianProductSet = new XSet();
    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue]);
      }
    }
    return cartesianProductSet;
  }
  // 返回一个集合的幂集
  static powerSet(a) {
    const powerSet = new XSet().add(new XSet());
    for (const aValue of a) {
      for (const set of new XSet(powerSet)) {
        powerSet.add(new XSet(set).add(aValue));
      }
    }
    return powerSet;
  }
}
```

:::

:::code 自定义迭代器

与 Iterable 接口类似，任何实现 Iterator 接口的对象都可以作为迭代器使用。
下面这个例子中的 Counter 类：
可选的 return()方法用于指定在迭代器提前关闭时执行的逻辑。
执行迭代的结构在想让迭代器知道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。

可能的情况包括：

- for-of 循环通过 break、continue、return 或 throw 提前退出；
- 解构操作并未消费所有值。

return()方法必须返回一个有效的 IteratorResult 对象。简单情况下，可以只返回{ done: true }。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }
  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log('Exiting early');
        return { done: true };
      }
    };
  }
}
let counter = new Counter(5);
for (let i of counter) { console.log(i); }
// 1 
// 2 
// 3
// 4
// 5
let counter1 = new Counter(5);
for (let i of counter1) {
  if (i > 2) {
    break;
  }
  console.log(i);
}
// 1 
// 2 
// Exiting early 
let counter2 = new Counter(5);
try {
  for (let i of counter2) {
    if (i > 2) {
      throw 'err';
    }
    console.log(i);
  }
} catch (e) { }
// 1 
// 2 
// Exiting early 
let counter3 = new Counter(5);
let [a, b] = counter3;
// Exiting early
```

:::

:::code 图数据结构非常适合递归遍历

```js
class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = new Set();
  }
  connect(node) {
    if (node !== this) {
      this.neighbors.add(node);
      node.neighbors.add(this);
    }
  }
}
class RandomGraph {
  constructor(size) {
    this.nodes = new Set();
    // 创建节点
    for (let i = 0; i < size; ++i) {
      this.nodes.add(new Node(i));
    }
    // 随机连接节点
    const threshold = 1 / size;
    for (const x of this.nodes) {
      for (const y of this.nodes) {
        if (Math.random() < threshold) {
          x.connect(y);
        }
      }
    }
  }
  // 这个方法仅用于调试
  print() {
    for (const node of this.nodes) {
      const ids = [...node.neighbors]
        .map((n) => n.id)
        .join(',');
      console.log(`${node.id}: ${ids}`);
    }
  }
  isConnected() {
    const visitedNodes = new Set();
    function* traverse(nodes) {
      for (const node of nodes) {
        if (!visitedNodes.has(node)) {
          yield node;
          yield* traverse(node.neighbors);
        }
      }
    }
    // 取得集合中的第一个节点
    const firstNode = this.nodes[Symbol.iterator]().next().value;
    // 使用递归生成器迭代每个节点
    for (const node of traverse([firstNode])) {
      visitedNodes.add(node);
    }
    return visitedNodes.size === this.nodes.size;
  }
}
const g = new RandomGraph(6);
g.print();
// 示例输出：
// 0: 2,3,5 
// 1: 2,3,4,5 
// 2: 1,3 
// 3: 0,1,2,4 
// 4: 2,3 
// 5: 0,4
console.log(g.isConnected());
```

:::

:::code 通用函数dom

利用get拦截，实现一个生成各种 DOM 节点的通用函数dom。

```js
const dom = new Proxy(
  {},
  {
    get(target, property) {
      return function(attrs = {}, ...children) {
        const el = document.createElement(property);
        for (let prop of Object.keys(attrs)) {
          el.setAttribute(prop, attrs[prop]);
        }
        for (let child of children) {
          if (typeof child === "string") {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
        }
        return el;
      };
    }
  }
);

const el = dom.div(
  {},
  "Hello, my name is ",
  dom.a({ href: "//example.com" }, "Mark"),
  ". I like:",
  dom.ul(
    {},
    dom.li({}, "The web"),
    dom.li({}, "Food"),
    dom.li({}, "…actually that's it")
  )
);

document.body.appendChild(el);
```

:::

:::code 尾调用优化的代码 递归

```js
//计算斐波纳契数列的函数
"use strict";
// 阶乘
// 不推荐写法
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(10)); // 120

// 尾调优化 推荐
function factorialTrue(n, total = 1) {
  if (n === 1) return total;
  return factorialTrue(n - 1, n * total);
}
console.log(factorialTrue(10)); // 3628800

// 斐波纳契数列
// 不推荐写法
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(25)); // 75025
//console.log(fibonacci(50)); // Uncaught RangeError: Maximum call stack size exceeded
// 尾调优化 推荐
function fibonacciTrue(n, index = 0, res = 1) {
  if (n <= 1) {
    return res;
  }
  return fibonacciTrue(n - 1, res, index + res);
}
console.log(fibonacciTrue(25)); // 75025
```

:::
