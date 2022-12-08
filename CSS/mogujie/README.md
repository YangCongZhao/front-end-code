
# 1. OOCSS
> oo:面向对象  
> 如果要想修改源代码，继承一下然后覆盖父类的方法，这样就做到一行源代码不用修改并且修改了源代码。用于`bpmn-js`自定义样式

```html
<div class="menu"></div>
<div class="menu"></div>
<div class="menu"></div>
.menu{
 color:red
}
```
假如想要修改第一个menu的颜色，而不修改全部的。

```html
<div class="menu fix"></div>
<div class="menu"></div>
<div class="menu"></div>
.menu{
 color:red
}
.fix{
color:green
}
```
不更改全部公共样式，只改一处
## 1.1 oocss两处原则
### 1.1.1 原则一：容器与内容分离
```html
《！-容器与内容分离-》
《！-post中的meta-data-》
<div class="post">
    <p class="metadata">
        <a>Author name</a>
        <a>commented on<a>
        <a>21-02-2010</a>
    </p>
</div>
《！-comment中的meta-data一》
<div class="comment">
    <p class="metadata">
        <a>Author name</a>
        <a>commented on<a>
            <a>21-02-2010</a>
    </p>
</div>
.post .metadata
 {
  css code
 }
//============
.post{
css code
   }
.metadata
{
   css code
}
```
### 1.1.2 原则二：结构（基础对象）与皮肤分离
