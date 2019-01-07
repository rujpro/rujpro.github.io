---
layout: post
title: "使用Jekyll（没有插件）为每个标签/类别分隔页面"
header-style: text
article-tags: 技术分享
musicId: 569213220
tags:
  - jekyll
---

很显然的，很多新用户在用[jekyll](http://jekyllcn.com/)构建博客时所面临的挑战之一是如何创造好看的标签/类别页面像这样的无插件（因为大多数的插件将无法在工作的[GitHub](http://rujpro.github.io)页面）。  

> 注意：我将在这篇文章中使用`“标签”`一词，但我在这里写的所有内容也适用于类别 - 因为为了生成具有特定标签/类别的帖子列表，标签和类别是相同的在杰基尔。  

当我用Jekyll构建这个博客时，我也遇到了这个问题，在我在Stack Overflow上发布我的解决方案之后，我在大约10个月内收到了17个upvotes （截至目前） - 这是迄今为止我在jekyll标签中最受欢迎的答案。  

但是，Jekyll无法在没有插件的情况下动态生成新页面...因此我在此博客中使用的解决方案包含一个标记页面 ，其中列出了所有标记的帖子。  

但是有些人绝对想要单独的页面，每个标签一个。
这也可以在没有插件，即使它不舒服，因为有一个缺点：
当你使用一个新的标签，第一次，你必须创建标签页 （即index.html与标签的名称的文件夹内的文件） 通过手。这不是很多工作，但你需要记住这样做。

---

布局文件
为了最大限度地减少创建新标记页面所需的工作量，我们将尽可能多地放入布局文件中：

`/_layouts/tagpage.html`：

```html
---
layout: default
---

<h1>{{ page.tag }}</h1>
<ul>
{% for post in site.tags[page.tag] %}
  <li>
    {{ post.date | date: "%B %d, %Y" }}: <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
```
布局文件只是从页面的[YAML前端](http://jekyllcn.com/docs/variables/)的变量中提取标记的名称，使用该标记循环所有帖子并显示指向它们的链接列表。

---

添加新标签页面
使用上面显示的布局文件，添加一个新的标记页面（在此示例中为jekyll标记）就像这样简单：

`/tags/jekyll/index.html`：

```html
---
layout: tagpage
tag: jekyll
---
```
只有两行前面的内容，没有必要的内容。

创建的HTML将如下所示：

```html
<h1>jekyll</h1>
<ul>
  <li>
    September 15, 2014: <a href="/2014/09/15/easy-meta-redirects-with-jekyll/">Easy meta redirects with Jekyll</a>
  </li>
  <li>
    August 22, 2014: <a href="/2014/08/22/jekyll-lightbox2-image-gallery-another-approach/">Jekyll / Lightbox2 image gallery, another approach</a>
  </li>
  <li>
    June 18, 2014: <a href="/2014/06/18/building-a-pseudo-dynamic-tree-menu-with-jekyll/">Building a pseudo-dynamic tree menu with Jekyll</a>
  </li>
  <li>
    March 08, 2014: <a href="/2014/03/08/generating-an-image-gallery-with-jekyll-and-lightbox2/">Generating an image gallery with Jekyll and Lightbox2</a>
  </li>
  <li>
    December 31, 2013: <a href="/2013/12/31/hello-jekyll/">Hello, Jekyll!</a>
  </li>
</ul>
```  
正如我之前所说的 - 您需要做的就是记住每次第一次使用新标签时都要创建一个新的双行标签页。