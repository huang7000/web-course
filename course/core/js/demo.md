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
