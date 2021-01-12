:::snippet html基础

1. HTML（英文Hyper Text Markup Language的缩写）中文译为“超文本标签语言”。是用来描述网页的一种标记语言。
2. 浏览器是网页显示、运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、苹果Safari和Opera等。
3. Web 标准构成W3C和其他标准化组织制定的一系列标准的集合。

:::

:::snippet HTML 初识

1. 结构标准：结构用于对网页元素进行整理和分类，主要指的是HTML（使内容更清晰，更具有逻辑性）。
2. 表现标准：表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS（用于修饰内容的样式）。
3. 行为标准：行为是指网页模型的定义及交互的编写，咱们主要学的是 Javascript（内容的交互及操作效果）。

:::

:::snippet HTML骨架格式

1. `<!DOCTYPE>`标签为所有的XHTML文档指定XHTML版本和类型，浏览器按指定的文档类型进行解析。
2. HTML作用所有HTML中标签的一个根节点。 最大的标签  根标签
3. head文档的头部 注意在head标签中我们必须要设置的标签是title
4. title文档的标题 作用：让页面拥有一个属于自己的标题。
5. body文档的主体 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。
6. `<meta charset="UTF-8">`字符集

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>一级标题只能有一个</h1>
    <h2 id="two">二级标题</h2>
    <p>  文本内容  </p>
    <hr />水平线标签是单标签
    <br />换行标签
    <div> 块级标签 </div>
    <span>行内标签</span>
    <div>
        <b> 字体粗体 </b>
        <strong> 字体粗体有语义 </strong>
        <i> 字体斜体 </i>
        <em> 字体斜体有语义 </em>
        <s> 加删除线 </s>
        <del> 加删除线有语义 </del>
        <u> 加下划线 </u>
        <ins> 加下划线有语义 </del>
    </div>
    <img src="图像URL" />
    <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
    <a href="#two">锚点定位跳到h2标签
    <!-- 注释语句 -->
</body>
</html>
```

:::

:::snippet 列表 ul （重点）

1. 无序列表 ul li
2. 有序列表 ol li 有排列顺序的列表，其各个列表项按照一定的顺序排列定义
3. 自定义列表 di dt 定义列表常用于对术语或名词进行解释和描述
4. `<ul></ul>`(`<ol></ol>`)中只能嵌套`<li></li>`，直接在`<ul></ul>`(`<ol></ol>`)标签中输入其他标签或者文字的做法是不被允许的。
5. `<li>`与`</li>`之间相当于一个容器，可以容纳所有元素。

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
</ul>
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
</ol>
<dl>
  <dt>名词1</dt>
  <dd>名词1解释1</dd>
  <dd>名词1解释2</dd>
  <dt>名词2</dt>
  <dd>名词2解释1</dd>
  <dd>名词2解释2</dd>
</dl>
```

:::

:::snippet 表格

1. 表格提供了HTML 中定义表格式数据的方法。
2. 表格中由行中的单元格组成。
3. 表格中没有列元素，列的个数取决于行的单元格个数。

```html
 <!-- 
    width 表格宽度
    height 表格高度
    border 单元格边框的厚度
    cellspacing 单元格和单元格之间的距离
    cellpadding 单元格内容和单元格边框的距离
    th 默认字体居中 
-->
    <table width="800" height="200" border="1" align="center" cellspacing="0" cellpadding="0">
        <caption>课程表</caption>
        <tr>
            <th rowspan="2"> 星期 </th> <!-- 注意这个rowspan无效吧tbody注释掉才有效-->
            <th colspan="5">工作日</th>
            <th colspan="2"> 周末</th>
        </tr>
        <tbody>
            <tr>
                <th rowspan="2"> 星期 </th> <!-- 注意这个rowspan有效 -->
                <th> 星期一 </th>
                <th> 星期二 </th>
                <th> 星期三 </th>
                <th> 星期四 </th>
                <th> 星期五 </th>
                <th> 星期六 </th>
                <th> 星期日 </th>
            </tr>
            <tr>
                <th> 周一 </th>
                <th> 周二 </th>
                <th> 周三 </th>
                <th> 周四 </th>
                <th> 周五 </th>
                <th> 周六 </th>
                <th> 周日 </th>
            </tr>
        </tbody>
    </table>
```

:::

:::snippet 表单标签
  
   表单通常由表单控件（也称为表单元素）、提示信息和表单域3个部分构成。  
1. 表单控件： 包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。  
2. 提示信息：  一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。  
3. 表单域：   用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

```html

<form action="url地址" method="提交方式" name="表单名称">
    <label for="name"> 用户名: </label>
    <input type="text" id="name" name="yonghuming" value="用户名"> <br /> <br />
    <label for="pwd"> 密　码: </label>
    <input type="password" id="pwd" name="mima1"><br /> <br />
    <label for="sex"> 性别： </label>
    <input type="radio" id="sex" name="sex">
    <label for="age"> 性别： </label>
    <select id="age">
        <option>少年</option>
        <option>青年</option>
        <option>中年</option>
        <option>老年</option>
    </select>
    <label for="note"> 备注： </label>
    <textarea id="note" cols="每行中的字符数" rows="显示的行数">
        文本内容
    </textarea>
    <input type="submit" value="提交所填">
    <input type="reset" value="重新填写">
</form>
```

:::

:::snippet 查文档

1. W3C : [http://www.w3school.com.cn/](http://www.w3school.com.cn/)
2. MDN:[https://developer.mozilla.org/zh-CN/](https://developer.mozilla.org/zh-CN/)

:::