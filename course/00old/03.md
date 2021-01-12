
:::snippet  盒子模型（CSS重点）

其实，CSS就三个大模块：  盒子模型 、 浮动 、 定位，其余的都是细节。要求这三部分，无论如何也要学的非常精通。  
所谓盒子模型就是把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形都由元素的内容、内边距（padding）、边框（border）和外边距（margin）组成。

:::snippet 盒子模型（Box Model）

所有的文档元素（标签）都会生成一个矩形框，我们成为元素框（element box），它描述了一个文档元素再网页布局汇总所占的位置大小。
因此， 每个盒子除了有自己大小和位置外，还影响着其他盒子的大小和位置。

:::snippet 盒子边框（border）

语法:

```css
border : border-width || border-style || border-color
none：没有边框即忽略所有边框的宽度（默认值）
solid：边框为单实线(最为常用的)
dashed：边框为虚线  
dotted：边框为点线
double：边框为双实线
```

边框属性—设置边框样式（border-style）
边框样式用于定义页面中边框的风格，常用属性值如下：

:::snippet 盒子边框写法总结表

| 设置内容    | 样式属性           | 常用属性值           |
| ----- | ------------ | ------------ |
| 上边框  | border-top-style:样式; border-top-width:宽度;border-top-color:颜色;border-top:宽度 样式 颜色;  |  |
| 下边框  | border-bottom-style:样式;border- bottom-width:宽度;border- bottom-color:颜色;border-bottom:宽度 样式 颜色; |   |
| 左边框  | border-left-style:样式; border-left-width:宽度;border-left-color:颜色;border-left:宽度 样式 颜色; |     |
| 右边框  | border-right-style:样式;border-right-width:宽度;border-right-color:颜色;border-right:宽度 样式 颜色;  |    |
| 样式综合设置 | border-style:上边 [右边  下边 左边];  | none无（默认）、solid单实线、dashed虚线、dotted点线、double双实线 |
| 宽度综合设置 | border-width:上边 [右边 下边 左边];  | 像素值    |
| 颜色综合设置 | border-color:上边 [右边 下边 左边];      | 颜色值、#十六进制、rgb(r,g,b)、rgb(r%,g%,b%)   |
| 边框综合设置 | border:四边宽度 四边样式 四边颜色;   ||

```CSS
.div{
    border-top: 1px solid red; /*上边框*/
    border-bottom: 2px solid green; /*下边框*/
    border-left: 1px solid blue;
    border-right: 5px solid pink;
    border: 1px solid red;
}
```

:::snippet 表格的细线边框

以前学过的html表格边框很粗，这里只需要CSS一句话就可以美观起来。 让我们真的相信，CSS就是我们的白马王子（白雪公主）。
table{ border-collapse:collapse; }  collapse 单词是合并的意思
border-collapse:collapse; 表示相邻边框合并在一起。

:::snippet 圆角边框(CSS3)

从此以后，我们的世界不只有矩形。radius 半径（距离）

语法格式：

```css
border-radius: 50%;
```

:::snippet 内边距（padding）

padding属性用于设置内边距。  是指 边框与内容之间的距离。
padding-top:上内边距
padding-right:右内边距
padding-bottom:下内边距
padding-left:左内边距
注意：  后面跟几个数值表示的意思是不一样的。

| 值的个数 | 表达意思
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1个值    | padding：上下左右边距 比如padding: 3px; 表示上下左右都是3像素|
| 2个值    | padding: 上下边距 左右边距 比如 padding: 3px 5px; 表示 上下3像素 左右 5像素|
| 3个值    | padding：上边距 左右边距 下边距 比如 padding: 3px 5px 10px; 表示 上是3像素 左右是5像素 下是10像素|
| 4个值    | padding:上内边距 右内边距 下内边距 左内边距 比如: padding: 3px 5px 10px 15px; 表示 上3px 右是5px 下 10px 左15px 顺时针 |

:::snippet 外边距（margin）

margin属性用于设置外边距。  设置外边距会在元素之间创建“空白”， 这段空白通常不能放置其他内容。
margin-top:上外边距
margin-right:右外边距
margin-bottom:下外边距
margin-left:上外边距
margin:上外边距 右外边距  下外边距  左外边
取值顺序跟内边距相同。

:::snippet 外边距实现盒子居中

可以让一个盒子实现水平居中，需要满足一下两个条件：

1. 必须是块级元素。
2. 盒子必须指定了宽度（width）

然后就给**左右的外边距都设置为auto**，就可使块级元素水平居中。
实际工作中常用这种方式进行网页布局，示例代码如下：

```css
.header{ width:960px; margin:0 auto;}
```

:::snippet 文字盒子居中图片和背景区别

1. 文字水平居中是  text-align: center
2. 盒子水平居中  左右margin 改为 auto
3. 插入图片 我们用的最多 比如产品展示类
4. 背景图片我们一般用于小图标背景 或者 超大背景图片

```css
text-align: center; /*  文字居中水平 */
margin: 10px auto;  /* 盒子水平居中  左右margin 改为 auto 就阔以了 */
section img {  
    width: 200px;/* 插入图片更改大小 width 和 height */
    height: 210px;
    margin-top: 30px;  /* 插入图片更改位置 可以用margin 或padding  盒模型 */
    margin-left: 50px; /* 插入当图片也是一个盒子 */
}
aside {
    width: 400px;
    height: 400px;
    border: 1px solid purple;
    background: #fff url(images/sun.jpg) no-repeat;
    background-size: 200px 210px; /*  背景图片更改大小只能用 background-size */
    background-position: 30px 50px; /* 背景图片更该位置 我用 background-position */
}
```

:::snippet 清除元素的默认内外边距

为了更方便地控制网页中的元素，制作网页时，可使用如下代码清除元素的默认内外边距：

```css
* {
   padding:0;         /* 清除内边距 */
   margin:0;          /* 清除外边距 */
}
```

注意：  行内元素是只有左右外边距的，是没有上下外边距的。 内边距，在ie6等低版本浏览器也会有问题。
我们尽量不要给行内元素指定上下的内外边距就好了。

:::snippet 外边距合并

使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。

:::snippet 相邻块元素垂直外边距的合并

当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是两者中的较大者。这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

![外边距塌陷](/src/assets/images/media/02CSS/outer-margin-collapse.png)

解决方案：  避免就好了。

:::snippet 嵌套块元素垂直外边距的合并

对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。

![嵌套块元素垂直外边距的合并](/src/assets/images/media/02CSS/outer-margin-merge.png)

解决方案：

1. 可以为父元素定义1像素的上边框或上内边距。
2. 可以为父元素添加overflow:hidden。

待续。。。。

:::snippet content宽度和高度

使用宽度属性width和高度属性height可以对盒子的大小进行控制。

width和height的属性值可以为不同单位的数值或相对于父元素的百分比%，实际工作中最常用的是像素值。

大多数浏览器，如Firefox、IE6及以上版本都采用了W3C规范，符合CSS规范的盒子模型的总宽度和总高度的计算原则是：

```CSS
  /*外盒尺寸计算（元素空间尺寸）*/
  Element空间高度 = content height + padding + border + margin
  Element 空间宽度 = content width + padding + border + margin
  /*内盒尺寸计算（元素实际大小）*/
  Element Height = content height + padding + border （Height为内容高度）
  Element Width = content width + padding + border （Width为内容宽度）
```

注意：
1、宽度属性width和高度属性height仅适用于块级元素，对行内元素无效（ img 标签和 input除外）。
2、计算盒子模型的总高度时，还应考虑上下两个盒子垂直外边距合并的情况。
3、**如果一个盒子没有给定宽度/高度或者继承父亲的宽度/高度，则padding 不会影响本盒子大小**。

:::snippet 圆角

```CSS
    .yuan {
        width: 300px;
        height: 300px;
        background-color: blueviolet;
        /* border-radius: 50%; 圆角当宽高一样 ，刚好是圆 */
        /* border-radius: 150px;圆角当宽高一样 ，刚好是圆 */
        /* padding-left: 300px; */
    }
```

:::snippet 盒子模型布局稳定性

开始学习盒子模型，同学们最大的困惑就是， 分不清内外边距的使用，什么情况下使用内边距，什么情况下使用外边距？
答案是：  其实他们大部分情况下是可以混用的。  就是说，你用内边距也可以，用外边距也可以。 你觉得哪个方便，就用哪个。
但是，总有一个最好用的吧，我们根据稳定性来分，建议如下：
按照 优先使用  宽度 （width）  其次 使用内边距（padding）    再次  外边距（margin）。

```CSS
  width >  padding  >   margin  
```

原因：

1. margin 会有外边距合并 还有 ie6下面margin 加倍的bug（讨厌）所以最后使用。
2. padding  会影响盒子大小， 需要进行加减计算（麻烦） 其次使用。
3. width   没有问题（嗨皮）我们经常使用宽度剩余法 高度剩余法来做。

:::snippet 盒子阴影

语法格式：

```css
box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色  内/外阴影；
```

![盒子阴影](/src/assets/images/media/02CSS/box-shadow.png)

1. 前两个属性是必须写的。其余的可以省略。
2. 外阴影 (outset) 但是不能写    默认      想要内阴影  inset

```css
div {
    width: 200px;
    height: 200px;
    border: 10px solid red;
    /* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
    /* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
    box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);
}
```

:::

:::snippet  浮动(float)

:::snippet 普通流(normal flow)

标准流！或者普通流。普通流实际上就是一个网页内标签元素正常从上到下，从左到右排列顺序的意思，比如块级元素会独占一行，行内元素会按顺序依次前后排列；按照这种大前提的布局排列之下绝对不会出现例外的情况叫做普通流布局。

:::snippet 浮动(float)定义

元素的浮动是指设置了浮动属性的元素会脱离标准标准流的控制，移动到其父元素中指定位置的过程。
在CSS中，通过float属性来定义浮动，其基本语法格式如下：

```CSS
选择器{float:属性值;}
```

| 属性值   | 描述         |
| ----- | ---------- |
| left  | 元素向左浮动     |
| right | 元素向右浮动     |
| none  | 元素不浮动（默认值） |

:::snippet 浮动详细内幕特性

浮动脱离标准流，====脱标==== 不占位置，会影响标准流。浮动只有左右浮动。

```html
1. 浮动首先创建包含块的概念（包裹）。就是说， 浮动的元素总是找理它最近的父级元素对齐。但是不会超出内边距的范围。
2.一个父盒子里面的子盒子，如果其中一个子级有浮动的，则其他子级都需要浮动。这样才能一行对齐显示。
3. 元素添加浮动后，元素会具有行内块元素的特性。元素的大小完全取决于定义的大小或者默认的内容多少浮动根据元素书写的位置来显示相应的浮动。
```

总结：  浮动 --->
浮动的目的就是为了让多个块级元素同一行上显示。  最核心的关键点就是   怎么排列的， 是否占有位置
float      浮 漏 特
浮：    加了浮动的元素盒子是浮起来的，漂浮在其他的标准流盒子上面。
漏：    加了浮动的盒子，不占位置的，它浮起来了，它原来的位置漏 给了标准流的盒子。
特：    特别注意，首先浮动的盒子需要和标准流的父级搭配使用， 其次 特别的注意浮动可以使元素显示模式体现为行内块特性。

:::snippet 清除浮动本质

清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。

:::snippet 清除浮动的方法

其实本质叫做闭合浮动更好一些, 记住，清除浮动就是把浮动的盒子圈到里面，让父盒子闭合出口和入口不让他们出来影响其他元素。

在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```CSS
选择器{clear:属性值;}
```

| 属性值   | 描述                    |
| ----- | --------------------- |
| left  | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both  | 同时清除左右两侧浮动的影响         |

:::snippet 额外标签法

```html
是W3C推荐的做法是通过在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>，或则其他标签br等亦可。
```

优点： 通俗易懂，书写方便

缺点： 添加许多无意义的标签，结构化较差。  我只能说，w3c你推荐的方法我不接受，你不值得拥有。。。

:::snippet 父级添加overflow属性方法

可以通过触发BFC的方式，可以实现清除浮动效果。（BFC后面讲解）

```css
可以给父级添加： overflow为 hidden|auto|scroll  都可以实现。
```

优点：  代码简洁
缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

:::snippet 使用after伪元素清除浮动

after 方式为空元素的升级版，好处是不用单独加标签了
使用方法：

```css
 .clearfix:after {  content: ""; display: block; height: 0; clear: both; visibility: hidden;  }

 .clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

优点： 符合闭合浮动思想  结构语义化正确
缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
代表网站： 百度、淘宝网、网易等
注意： content:"."  里面尽量跟一个小点，或者其他，尽量不要为空，否则再firefox 7.0前的版本会有生成空格。

:::snippet 使用before和after双伪元素清除浮动

使用方法：

```css
.clearfix:before,.clearfix:after {
  content:"";
  display:table;  /* 这句话可以出发BFC BFC可以清除浮动,BFC我们后面讲 */
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;
}
```

优点：  代码更简洁
缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
代表网站： 小米、腾讯等

:::

:::snippet  布局流程

为了提高网页制作的效率，布局时通常需要遵守一定的布局流程，具体如下：
1、确定页面的版心（可视区）。
2、分析页面中的行模块，以及每个行模块中的列模块。
3、制作HTML结构 。
4、CSS初始化，然后开始运用盒子模型的原理，通过DIV+CSS布局来控制网页的各个模块。

:::snippet 一列固定宽度且居中

![一列固定宽度且居中](/src/assets/images/media/02CSS/fixed-width-centere.jpg)

最普通的，最为常用的结构

:::snippet 两列左窄右宽型

![两列左窄右宽型](/src/assets/images/media/02CSS/two-left-small-right-big.jpg)

[小米官网](http://www.mi.com)

:::snippet 通栏平均分布型

![通栏平均分布型](/src/assets/images/media/02CSS/banner-average.jpg)

[锤子官网](http://www.smartisan.com)

:::

:::snippet  定位(position)

如果，说浮动， 关键在一个 “浮” 字上面， 那么 我们的定位，关键在于一个 “位” 上。

PS: 定位是我们CSS算是数一数二难点的了，但是，你务必要学好它，我们CSS离不开定位，特别是后面的js特效，天天和定位打交道。不要抵触它，反而要爱上它，它可以让我们工作更加轻松哦！

:::snippet 元素的定位属性

元素的定位属性主要包括定位模式和边偏移两部分。

1、边偏移
| 边偏移属性  | 描述                      |
| ------ | ----------------------- |
| top    | 顶端偏移量，定义元素相对于其父元素上边线的距离 |
| bottom | 底部偏移量，定义元素相对于其父元素下边线的距离 |
| left   | 左侧偏移量，定义元素相对于其父元素左边线的距离 |
| right  | 右侧偏移量，定义元素相对于其父元素右边线的距离 |

也就说，以后定位要和这边偏移搭配使用了， 比如 top: 100px;  left: 30px; 等等

2、定位模式(定位的分类)
在CSS中，position属性用于定义元素的定位模式，其基本语法格式如下：

```CSS
选择器{position:属性值;}
```

position属性的常用值
| 值        | 描述                       |
| -------- | ------------------------ |
| static   | 自动定位（默认定位方式）             |
| relative | 相对定位，相对于其原文档流的位置进行定位     |
| absolute | 绝对定位，相对于其上一个已经定位的父元素进行定位 |
| fixed    | 固定定位，相对于浏览器窗口进行定位        |

:::snippet 静态定位(static)

静态定位是所有元素的默认定位方式，当position属性的取值为static时，可以将元素定位于静态位置。 所谓静态位置就是各个元素在HTML文档流中默认的位置。

上面的话翻译成白话：  就是网页中所有元素都默认的是静态定位哦！ 其实就是标准流的特性。
在静态定位状态下，无法通过边偏移属性（top、bottom、left或right）来改变元素的位置。
PS： 静态定位其实没啥可说的。

:::snippet 相对定位relative(自恋型)

相对定位是将元素相对于它在标准流中的位置进行定位，当position属性的取值为relative时，可以将元素定位于相对位置。
对元素设置相对定位后，可以通过边偏移属性改变元素的位置，但是它在文档流中的位置仍然保留。如下图所示，即是一个相对定位的效果展示：
![相对定位relative](/src/assets/images/media/02CSS/relative.png)
注意：

1. 相对定位最重要的一点是，它可以通过边偏移移动位置，但是原来的所占的位置，继续占有。
2. 其次，每次移动的位置，是以自己的左上角为基点移动（相对于自己来移动位置）

就是说，相对定位的盒子仍在标准流中，它后面的盒子仍以标准流方式对待它。（相对定位不脱标）
如果说浮动的主要目的是 让多个块级元素一行显示，那么定位的主要价值就是 移动位置， 让盒子到我们想要的位置上去。

:::snippet 绝对定位absolute (拼爹型)

![绝对定位absolute](/src/assets/images/media/02CSS/smail.gif)
　[注意] 如果文档可滚动，绝对定位元素会随着它滚动，因为元素最终会相对于正常流的某一部分定位。

当position属性的取值为absolute时，可以将元素的定位模式设置为绝对定位。
注意：    绝对定位最重要的一点是，它可以通过边偏移移动位置，但是它完全脱标，完全不占位置。

:::snippet 父级没有定位

若所有父元素都没有定位，以浏览器为准对齐(document文档)。
![父级没有定位](/src/assets/images/media/02CSS/absolute-no.png)
  
:::snippet 父级有定位

绝对定位是将元素依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。
![父级有定位](/src/assets/images/media/02CSS/absolute-yes.png)

:::snippet 子绝父相

这个“子绝父相”太重要了，是我们学习定位的口诀，时时刻刻记住的。
这句话的意思是 子级是绝对定位的话， 父级要用相对定位。
首先， 我们说下， 绝对定位是将元素依据最近的已经定位绝对、固定或相对定位）的父元素（祖先）进行定位。
就是说， 子级是绝对定位，父亲只要是定位即可（不管父亲是绝对定位还是相对定位，甚至是固定定位都可以），就是说， 子绝父绝，子绝父相都是正确的。

但是，在我们网页布局的时候， 最常说的 子绝父相是怎么来的呢？ 请看如下图：
![子绝父相](/src/assets/images/media/02CSS/son-absolute-parent-relative.png)
所以，我们可以得出如下结论：
因为子级是绝对定位，不会占有位置， 可以放到父盒子里面的任何一个地方。
父盒子布局时，需要占有位置，因此父亲只能是 相对定位.
这就是子绝父相的由来。

:::snippet 绝对定位的盒子水平/垂直居中

普通的盒子是左右margin 改为 auto就可， 但是对于绝对定位就无效了
定位的盒子也可以水平或者垂直居中，有一个算法。

1. 首先left 50%   父盒子的一半大小
2. 然后走自己外边距负的一半值就可以了 margin-left。

:::snippet 固定定位fixed(认死理型)

固定定位是绝对定位的一种特殊形式，类似于 正方形是一个特殊的 矩形。它以浏览器窗口作为参照物来定义网页元素。当position属性的取值为fixed时，即可将元素的定位模式设置为固定定位。

当对元素设置固定定位后，它将脱离标准文档流的控制，始终依据浏览器窗口来定义自己的显示位置。不管浏览器滚动条如何滚动也不管浏览器窗口的大小如何变化，该元素都会始终显示在浏览器窗口的固定位置。

固定定位有两点：

1. 固定定位的元素跟父亲没有任何关系，只认浏览器。
2. 固定定位完全脱标，不占有位置，不随着滚动条滚动。
3. ie6等低版本浏览器不支持固定定位。

:::snippet 叠放次序（z-index）

当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。
![叠放次序](/src/assets/images/media/02CSS/z-order.png)

在CSS中，要想调整重叠定位元素的堆叠顺序，可以对定位元素应用z-index层叠等级属性，其取值可为正整数、负整数和0。
比如：  z-index: 2;
注意：

1. z-index的默认属性值是0，取值越大，定位元素在层叠元素中越居上。
2. 如果取值相同，则根据书写顺序，后来居上。
3. 后面数字一定不能加单位。
4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性，亦不可指定此属性。

:::snippet 四种定位总结

| 定位模式         | 是否脱标占有位置   | 是否可以使用边偏移 | 移动位置基准           |
| ------------ | ---------- | --------- | ---------------- |
| 静态static     | 不脱标，正常模式   | 不可以       | 正常模式             |
| 相对定位relative | 不脱标，占有位置   | 可以        | 相对自身位置移动（自恋型）    |
| 绝对定位absolute | 完全脱标，不占有位置 | 可以        | 相对于定位父级移动位置（拼爹型） |
| 固定定位fixed    | 完全脱标，不占有位置 | 可以        | 相对于浏览器移动位置（认死理型） |

:::snippet 定位模式转换

跟 浮动一样， 元素添加了 绝对定位和固定定位之后， 元素模式也会发生转换， 都转换为 行内块模式，
 因此 比如 行内元素 如果添加了 绝对定位或者 固定定位后 浮动后，可以不用转换模式，直接给高度和宽度就可以了。

:::

:::snippet  CSS高级技巧

:::snippet 元素的显示与隐藏

在CSS中有三个显示和隐藏的单词比较常见，我们要区分开，他们分别是 display visibility 和 overflow。

他们的主要目的是让一个元素在页面中消失，但是不在文档源码中删除。 最常见的是网站广告，当我们点击类似关闭不见了，但是我们重新刷新页面，它们又会出现和你玩躲猫猫！！

:::snippet display 显示

display 设置或检索对象是否及如何显示。
display : none 隐藏对象 与它相反的是 display:block 除了转换为块级元素之外，同时还有显示元素的意思。
特点： 隐藏之后，不再保留位置。

:::snippet visibility 可见性

设置或检索是否显示对象。
visible : 　对象可视
hidden : 　对象隐藏

特点： 隐藏之后，继续保留原有位置。（停职留薪）

:::snippet overflow 溢出

检索或设置当对象的内容超过其指定高度及宽度时如何管理内容。
visible : 　不剪切内容也不添加滚动条。
auto : 　 超出自动显示滚动条，不超出不显示滚动条
hidden : 　不显示超过对象尺寸的内容，超出的部分隐藏掉
scroll : 　不管超出内容否，总是显示滚动条

:::snippet CSS用户界面样式

 所谓的界面样式， 就是更改一些用户操作样式， 比如 更改用户的鼠标样式， 表单轮廓等。但是比如滚动条的样式改动受到了很多浏览器的抵制，因此我们就放弃了。 防止表单域拖拽

:::snippet 鼠标样式cursor

 设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

```html
cursor :  default  小白 | pointer  小手  | move  移动  |  text  文本
```

```html
<ul>
  <li style="cursor:default">我是小白</li>
  <li style="cursor:pointer">我是小手</li>
  <li style="cursor:move">我是移动</li>
  <li style="cursor:text">我是文本</li>
</ul>
```

:::snippet 轮廓 outline

 是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

```css
 outline : outline-color ||outline-style || outline-width
```

但是我们都不关心可以设置多少，我们平时都是去掉的。
最直接的写法是 ：  outline: 0;   或者  outline: none;

```html
 <input  type="text"  style="outline: 0;"/>
```

:::snippet 防止拖拽文本域resize

resize：none    这个单词可以防止 火狐 谷歌等浏览器随意的拖动 文本域。
右下角可以拖拽：

```html
<textarea></textarea>
```

右下角不可以拖拽：

```html
<textarea  style="resize: none;"></textarea>
```

:::snippet vertical-align 垂直对齐

带有宽度的块级元素居中对齐，是margin: 0 auto;
文字居中对齐，是 text-align: center;

```css
vertical-align : baseline |top |middle |bottom
```

设置或检索对象内容的垂直对其方式。
vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素， **通常用来控制图片/表单与文字的对齐**。

![垂直对齐](/src/assets/images/media/02CSS/vertical-align.png)

:::snippet 图片、表单和文字对齐

所以我们知道，我们可以通过vertical-align 控制图片和文字的垂直关系了。 默认的图片会和文字基线对齐。

:::snippet 去除图片底侧空白缝隙

有个很重要特性你要记住： 图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个空白缝隙。
解决的方法就是：  

```html
1. 给img vertical-align:middle | top等等。  让图片不要和基线对齐。<img src="media/1633.png"  width="500"  style="border: 1px dashed #ccc;" />
2. 给img 添加 display：block; 转换为块级元素就不会存在问题了。<img src="media/sina1.png" width="500" style="border: 1px dashed #ccc;"/>
```

:::

:::snippet  溢出的文字隐藏

:::snippet white-space

white-space设置或检索对象内文本显示方式。通常我们使用于强制一行显示内容
normal : 　默认处理方式
nowrap : 　强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行。
可以处理中文

:::snippet text-overflow 文字溢出

text-overflow : clip | ellipsis
设置或检索是否使用一个省略标记（...）标示对象内文本的溢出
clip : 　不显示省略标记（...），而是简单的裁切
ellipsis : 　当对象内文本溢出时显示省略标记（...）
注意一定要首先强制一行内显示，再次和overflow属性  搭配使用

:::

:::snippet  CSS精灵技术（sprite） 小妖精  雪碧

:::snippet 精灵技术产生的背景

图所示为网页的请求原理图，当用户访问一个网站时，需要向服务器发送请求，网页上的每张图像都要经过一次请求才能展现给用户。然而，一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接受和发送请求，这将大大降低页面的加载速度。
为了有效地减少服务器接受和发送请求的次数，提高页面的加载速度，出现了CSS精灵技术（也称CSS Sprites、CSS雪碧）。

:::snippet 精灵技术本质

简单地说，CSS精灵是一种处理网页背景图像的方式。它将一个页面涉及到的所有零星背景图像都集中到一张大图中去，然后将大图应用于网页，这样，当用户访问该页面时，只需向服务发送一次请求，网页中的背景图像即可全部展示出来。通常情况下，这个由很多小的背景图像合成的大图被称为精灵图（雪碧图），如下图所示为京东网站中的一个精灵图。

:::snippet 精灵技术的使用

CSS 精灵其实是将网页中的一些背景图像整合到一张大图中（精灵图），然而，各个网页元素通常只需要精灵图中不同位置的某个小图，要想精确定位到精灵图中的某个小图，就需要使用CSS的background-image、background-repeat和background-position属性进行背景定位，其中最关键的是使用background-position属性精确地定位。

:::snippet 制作精灵图

CSS 精灵其实是将网页中的一些背景图像整合到一张大图中（精灵图），那我们要做的，就是把小图拼合成一张大图。

大部分情况下，精灵图都是网页美工做。

```css
我们精灵图上放的都是小的装饰性质的背景图片。 插入图片不能往上放。
我们精灵图的宽度取决于最宽的那个背景。
我们可以横向摆放也可以纵向摆放，但是每个图片之间，间隔至少隔开偶数像素合适。
在我们精灵图的最低端，留一片空隙，方便我们以后添加其他精灵图。
```

结束语：   小公司，背景图片很少的情况，没有必要使用精灵技术，维护成本太高。 如果是背景图片比较多，可以建议使用精灵技术。

:::

:::snippet  滑动门

:::snippet 滑动门出现的背景

制作网页时，为了美观，常常需要为网页元素设置特殊形状的背景，比如微信导航栏，有凸起和凹下去的感觉，最大的问题是里面的字数不一样多，咋办？

为了使各种特殊形状的背景能够自适应元素中文本内容的多少，出现了CSS滑动门技术。它从新的角度构建页面，使各种特殊形状的背景能够自由拉伸滑动，以适应元素内部的文本内容，可用性更强。 最常见于各种导航栏的滑动门。

:::snippet 核心技术

核心技术就是利用CSS精灵（主要是背景位置）和盒子padding撑开宽度, 以便能适应不同字数的导航栏。

一般的经典布局都是这样的：

```html
<li>
  <a href="#">
    <span>导航栏内容</span>
  </a>
</li>
```

总结：

1. a 设置 背景左侧，padding撑开合适宽度。
2. span 设置背景右侧， padding撑开合适宽度 剩下由文字继续撑开宽度。
3. 之所以a包含span就是因为 整个导航都是可以点击的。

:::

:::snippet  字体图标

图片是有诸多优点的，但是缺点很明显，比如图片不但增加了总文件的大小，还增加了很多额外的"http请求"，这都会大大降低网页的性能的。更重要的是图片不能很好的进行“缩放”，因为图片放大和缩小会失真。 我们后面会学习移动端响应式，很多情况下希望我们的图标是可以缩放的。此时，一个非常重要的技术出现了，额不是出现了，是以前就有，是被从新"宠幸"啦。。 这就是字体图标（iconfont).

:::snippet 字体图标优点:本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果等CSS效果

```txt
可以做出跟图片一样可以做的事情,改变透明度、旋转度，等..
但是本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果等等...
本身体积更小，但携带的信息并没有削减。
几乎支持所有的浏览器
移动端设备必备良药...
```

:::snippet 字体图标使用流程

总体来说，字体图标按照如下流程：

:::snippet 设计字体图标

假如图标是我们公司单独设计，那就需要第一步了，这个属于UI设计人员的工作， 他们在 illustrator 或 Sketch 这类矢量图形软件里创建 icon图标， 比如下图：

之后保存为svg格式，然后给我们前端人员就好了。

其实第一步，我们不需要关心，只需要给我们这些图标就可以了，如果图标是大众的，网上本来就有的，可以直接跳过第一步，进入第三步。

:::snippet 上传生成字体包

   当UI设计人员给我们svg文件的时候，我们需要转换成我们页面能使用的字体文件， 而且需要生成的是兼容性的适合各个浏览器的。

**icomoon字库**：[http://icomoon.io](http://icomoon.io)
IcoMoon成立于2011年，推出的第一个自定义图标字体生成器，它允许用户选择他们所需要的图标，使它们成一字型。 内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

**阿里icon font字库**：[http://www.iconfont.cn](http://www.iconfont.cn)
这个是阿里妈妈M2UX的一个icon font字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用AI制作图标上传生成。 一个字，免费，免费！！

fontello:[http://fontello.com/](http://fontello.com/)
在线定制你自己的icon font字体图标字库，也可以直接从GitHub下载整个图标集，该项目也是开源的。

**Font-Awesome**:[http://fortawesome.github.io/Font-Awesome/](http://fortawesome.github.io/Font-Awesome/)
这是我最喜欢的字库之一了，更新比较快。目前已经有369个图标了。

**Glyphicon Halflings**:[http://glyphicons.com/](http://glyphicons.com/)
这个字体图标可以在Bootstrap下免费使用。自带了200多个图标。

**Icons8**:[https://icons8.com/](https://icons8.com/)

提供PNG免费下载，像素大能到500PX

:::snippet 下载兼容字体包

刚才上传完毕， 网站会给我们把UI做的svg图片转换为我们的字体格式， 然后下载下来就好了
当然，我们不需要自己专门的图标，是想网上找几个图标使用，以上2步可以直接省略了， 直接到刚才的网站上找喜欢的下载使用吧。

:::snippet 字体引入到HTML

得到压缩包之后，最后一步，是最重要的一步了， 就是字体文件已经有了，我们需要引入到我们页面中。

1. 首先把 以下4个文件放入到 fonts文件夹里面。 通俗的做法
   icomoon.eot
   icomoon.svg
   icomoon.ttf
   icomoon.woff

   第一步：在样式里面声明字体： 告诉别人我们自己定义的字体

   ```css
   @font-face {
     font-family: 'icomoon';
     src:  url('fonts/icomoon.eot?7kkyc2');
     src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
       url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
       url('fonts/icomoon.woff?7kkyc2') format('woff'),
       url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
     font-weight: normal;
     font-style: normal;
   }
   ```

    第二步：给盒子使用字体

   ```css
   span {
        font-family: "icomoon";
    }
   ```

 第三步：盒子里面添加结构

   ```css
   span::before {
        content: "\e900";
    }
   或者  
   <span></span>  
   ```

:::snippet 追加新图标到原来库里面

   如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标，但是原来的不能删除，继续使用，此时我们需要这样做
   把压缩包里面的selection.json 从新上传，然后，选中自己想要新的图标，从新下载压缩包，替换原来文件即可。

:::

:::snippet  CSS Rest 类库

. CSS Rest 类库,为跨浏览器兼容做准备(也可以直接运用jd网站的初始化)

```txt
normalize.css   只是一个很小的CSS文件，但它在默认的HTML元素样式上提供了跨浏览器的高度一致性。相比于传统的CSS reset，Normalize.css是一种现代的、为HTML5准备的优质替代方案。Normalize.css现在已经被用于Twitter Bootstrap、HTML5 Boilerplate、GOV.UK、Rdio、CSS Tricks 以及许许多多其他框架、工具和网站上。 你值得拥有。。
- 保护有用的浏览器默认样式而不是完全去掉它们
- 一般化的样式：为大部分HTML元素提供
- 修复浏览器自身的bug并保证各浏览器的一致性
- 优化CSS可用性：用一些小技巧
- 解释代码：用注释和详细的文档来
```

:::

:::snippet  网站优化三大标签

SEO是由英文Search Engine Optimization缩写而来， 中文意译为“搜索引擎优化”！SEO是指通过对网站进行站内优化、网站结构调整、网站内容建设、网站代码优化等)和站外优化，从而提高网站的关键词排名以及公司产品的曝光度。 简单的说就是，把产品做好，搜索引擎就会介绍客户来。  

 我们现在阶段主要进行站内优化。网站优化，我们应该要懂。。。

:::snippet 网页title 标题

title具有不可替代性，是我们的内页第一个重要标签，是搜索引擎了解网页的入口，和对网页主题归属的最佳判断点。

首页标题：网站名（产品名）- 网站的介绍

:::snippet Description  网站说明

对于关键词的作用明显降低，但由于很多搜索引擎，仍然大量采用网页的MATA标签中描述部分作为搜索结果的“内容摘要”。 就是简要说明我们网站的主要做什么的。
我们提倡，Description作为网站的总体业务和主题概括，多采用“我们是…”“我们提供…”“×××网作为…”“电话：010…”之类语句。

京东、小米网：

```html
<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
<meta name="description" content="小米商城直营小米公司旗下所有产品，囊括小米手机系列小米MIX、小米Note 2，红米手机系列红米Note 4、红米4，智能硬件，配件及小米生活周边，同时提供小米客户服务及售后支持。" />
```

注意点：

1. 描述中出现关键词，与正文内容相关，这部分内容是给人看的，所以要写的很详细，让人感兴趣， 吸引用户点击。
2. 同样遵循简短原则，字符数含空格在内不要超过 120  个汉字。
3. 补充在 title  和 keywords  中未能充分表述的说明.
4. 用英文逗号 关键词1,关键词2

:::snippet Keywords 关键字

Keywords是页面关键词，是搜索引擎关注点之一。Keywords应该限制在6～8个关键词左右，电商类网站可以多 少许。
京东网、小米网：

```html
<meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />
<meta name="keywords" content="小米,小米6,红米Note4,小米MIX,小米商城" />
```

:::

:::snippet 背景半透明

1.强烈推荐：  background: rgba(r,g,b,alpha);
r,g,b 是红绿蓝的颜色，  alpha 是透明度的意思，取值范围是 0~1 之间。

2.了解ie低版本浏览器 半透明

filter:Alpha(opacity=50) ；   // opacity值为0 到 100
但是 此属性是盒子半透明，不是背景半透明哦，因为里面的内容也一起半透明了
因此，低版本的 ie6.7浏览器，我们不需要透明了，直接采用优雅降级的做法。
background: gary;
background: rgba(0,0,0,.2);
写上两句 背景， 低版本ie只执行gray， 其他浏览器执行 半透明下面这一句。

:::

:::snippet  CSS W3C 统一验证工具

[http://cssstats.com/](http://cssstats.com/) 是一个在线的 CSS 代码分析工具

如果你想要更全面的，这个神奇，你值得拥有：
W3C 统一验证工具：   [http://validator.w3.org/unicorn/](http://validator.w3.org/unicorn/)   ☆☆☆☆☆
因为它可以检测本地文件哦！！
:::
