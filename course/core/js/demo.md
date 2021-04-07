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
