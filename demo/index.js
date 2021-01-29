
//console.log(oldHtml)
let oldHtml;
let btnClick = function () {
  let innerHtml = document.getElementById("app").innerHTML;
  if ("我是外部链接过来的内容" !== innerHtml) {
    oldHtml = innerHtml;
  }
  document.getElementById("app").innerHTML = "我是外部链接过来的内容"
}
let backClick = function () {
  document.getElementById("app").innerHTML = oldHtml
}