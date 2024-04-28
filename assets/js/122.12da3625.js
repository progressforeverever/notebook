(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{452:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-04-深入浅出索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-04-深入浅出索引"}},[t._v("#")]),t._v(" MySQL 04 | 深入浅出索引")]),t._v(" "),s("blockquote",[s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/article/69236",target:"_blank",rel:"noopener noreferrer"}},[t._v("04 | 深入浅出索引（上）| 极客时间"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/article/69636",target:"_blank",rel:"noopener noreferrer"}},[t._v("05 | 深入浅出索引（下）| 极客时间"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("索引是数据库系统里面最重要的概念之一。一句话简单来说，"),s("strong",[t._v("索引的出现其实就是为了提高数据查询的效率，就像书的目录一样。")])]),t._v(" "),s("h2",{attrs:{id:"_1-索引的常见模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引的常见模型"}},[t._v("#")]),t._v(" 1. 索引的常见模型")]),t._v(" "),s("p",[t._v("**索引的出现是为了提高查询效率，但是实现索引的方式却有很多种。**可以用于提高读写效率的数据结构很多，这里我先介绍三种常见、也比较简单的数据结构，它们分别是哈希表、有序数组和搜索树。")]),t._v(" "),s("h3",{attrs:{id:"_1-1-哈希表的索引模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-哈希表的索引模型"}},[t._v("#")]),t._v(" 1.1 哈希表的索引模型")]),t._v(" "),s("p",[t._v("哈希表是一种以键 - 值（key-value）存储数据的结构，我们只要输入待查找的键即 key，就可以找到其对应的值即 Value。"),s("strong",[t._v("哈希冲突时拉出一个链表就好了。")])]),t._v(" "),s("p",[t._v("假设，你现在维护着一个身份证信息和姓名的表，需要根据身份证号查找对应的名字，这时对应的哈希索引的示意图如下所示：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"72%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118215407541.png",alt:"image-20230118215407541"}})]),t._v(" "),s("p",[t._v("但哈希表的缺点是它不是有序的，所以"),s("strong",[t._v("哈希索引做区间查询的速度很慢")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-有序数组的索引模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-有序数组的索引模型"}},[t._v("#")]),t._v(" 1.2 有序数组的索引模型")]),t._v(" "),s("p",[t._v("有序数组在等值查询和范围查询场景中的性能就都非常优秀，比如上面那个根据身份证号查名字的例子，如果用有序数组来实现的话，如下图：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118215517792.png",alt:"image-20230118215517792"}})]),t._v(" "),s("p",[t._v("如果仅仅看查询效率，有序数组就是最好的数据结构了。但是，在需要更新数据的时候就麻烦了，你往中间插入一个记录就必须得挪动后面所有的记录，成本太高。")]),t._v(" "),s("p",[t._v("所以，"),s("strong",[t._v("有序数组索引只适用于静态存储引擎，比如你要保存的是 2017 年某个城市的所有人口信息，这类不会再修改的数据。")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-搜索树的索引模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-搜索树的索引模型"}},[t._v("#")]),t._v(" 1.3 搜索树的索引模型")]),t._v(" "),s("p",[t._v("二叉搜索树也是经典数据结构了，但为了维持 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"O"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"l"}}),s("mjx-c",{attrs:{c:"o"}}),s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2061"}})],1),s("mjx-mrow",[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"N"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" 的查询复杂度，你需要一个平衡二叉树。")],1),t._v(" "),s("p",[t._v("树可以有二叉，也可以有多叉。二叉树是搜索效率最高的，但是实际上大多数的数据库存储却并不使用二叉树。其原因是，索引不止存在内存中，还要写到磁盘上。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以想象一下一棵 100 万节点的平衡二叉树，树高 20。一次查询可能需要访问 20 个数据块。在机械硬盘时代，从磁盘随机读一个数据块需要 10 ms 左右的寻址时间。也就是说，对于一个 100 万行的表，如果使用二叉树来存储，单独访问一个行可能需要 20 个 10 ms 的时间，这个查询可真够慢的。")])]),t._v(" "),s("p",[s("strong",[t._v("为了让一个查询尽量少地读磁盘，就必须让查询过程访问尽量少的数据块")]),t._v("。那么，我们就不应该使用二叉树，"),s("strong",[t._v("而是要使用“N 叉”树。这里，“N 叉”树中的“N”取决于数据块的大小。")])]),t._v(" "),s("p",[s("strong",[t._v("以 InnoDB 的一个整数字段索引为例，这个 N 差不多是 1200")]),t._v("。这棵树高是 4 的时候，就可以存 1200 的 3 次方个值，这已经 17 亿了。考虑到树根的数据块总是在内存中的，一个 10 亿行的表上一个整数字段的索引，查找一个值最多只需要访问 3 次磁盘。其实，树的第二层也有很大概率在内存中，那么访问磁盘的平均次数就更少了。N 叉树由于在读写上的性能优点，以及适配磁盘的访问模式，已经被广泛应用在数据库引擎中了。")]),t._v(" "),s("p",[t._v("数据库技术发展到今天，跳表、LSM 树等数据结构也被用于引擎设计中，这里我就不再一一展开了。你心里要有个概念，数据库底层存储的核心就是基于这些数据模型的。"),s("strong",[t._v("每碰到一个新数据库，我们需要先关注它的数据模型，这样才能从理论上分析出这个数据库的适用场景")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("在 MySQL 中，索引是在存储引擎层实现的")]),t._v("，所以并没有统一的索引标准，即不同存储引擎的索引的工作方式并不一样。而即使多个存储引擎支持同一种类型的索引，其底层的实现也可能不同。下面以 InnoDB 的为例。")]),t._v(" "),s("h2",{attrs:{id:"_2-innodb-的索引模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-innodb-的索引模型"}},[t._v("#")]),t._v(" 2. InnoDB 的索引模型")]),t._v(" "),s("p",[t._v("在 InnoDB 中，表都是根据主键顺序以索引的形式存放的，这种存储方式的表称为索引组织表。又因为前面我们提到的，InnoDB 使用了 B+ 树索引模型，所以"),s("strong",[t._v("数据都是存储在 B+ 树中")]),t._v("的。"),s("strong",[t._v("每一个索引在 InnoDB 里面对应一棵 B+ 树")]),t._v("。")]),t._v(" "),s("p",[t._v("假设，我们有一个主键列为 ID 的表，表中有字段 k，并且在 k 上有索引。这样的建表语句为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("表中 R1~R5 的 (ID,k) 值分别为 (100,1)、(200,2)、(300,3)、(500,5) 和 (600,6)，两棵树的示例示意图如下：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"100%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118221841632.png",alt:"image-20230118221841632"}})]),t._v(" "),s("p",[t._v("从图中不难看出，根据叶子节点的内容，"),s("strong",[t._v("索引类型分为主键索引和非主键索引")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("mark",[t._v("主键索引")]),t._v("：叶子节点存的是整行数据。在 InnoDB 里，主键索引也被称为"),s("strong",[t._v("聚簇索引")]),t._v("（"),s("strong",[t._v("clustered index")]),t._v("）。")]),t._v(" "),s("li",[s("mark",[t._v("非主键索引")]),t._v("：叶子节点内容是主键的值。在 InnoDB 里，非主键索引也被称为"),s("strong",[t._v("二级索引")]),t._v("（"),s("strong",[t._v("secondary index")]),t._v("）。")])]),t._v(" "),s("p",[t._v("根据上面的索引结构说明，我们来讨论一个问题：基于主键索引和普通索引的查询有什么区别？")]),t._v(" "),s("ul",[s("li",[t._v("如果语句是 "),s("code",[t._v("select * from T where ID=500")]),t._v("，即"),s("strong",[t._v("主键查询方式，则只需要搜索 ID 这棵 B+ 树；")])]),t._v(" "),s("li",[t._v("如果语句是 "),s("code",[t._v("select * from T where k=5")]),t._v("，即普通索引查询方式，则需要先搜索 k 索引树，得到 ID 的值为 500，再到 ID 索引树搜索一次。这个过程称为"),s("mark",[t._v("回表")]),t._v("。")])]),t._v(" "),s("p",[t._v("也就是说，基于非主键索引的查询需要多扫描一棵索引树。因此，我们在应用中应该"),s("font",{attrs:{color:"red"}},[t._v("尽量使用主键查询")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"_3-索引维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引维护"}},[t._v("#")]),t._v(" 3. 索引维护")]),t._v(" "),s("p",[t._v("B+ 树为了维护索引有序性，在插入新值的时候需要做必要的维护。")]),t._v(" "),s("ul",[s("li",[t._v("以上面这个图为例，如果插入新的行 ID 值为 700，则只需要在 R5 的记录后面插入一个新记录。如果新插入的 ID 值为 400，就相对麻烦了，需要逻辑上挪动后面的数据，空出位置。")]),t._v(" "),s("li",[t._v("而更糟的情况是，如果 R5 所在的数据页已经满了，根据 B+ 树的算法，**这时候需要申请一个新的数据页，然后挪动部分数据过去。**这个过程称为"),s("mark",[t._v("页分裂")]),t._v("。在这种情况下，性能自然会受影响。")])]),t._v(" "),s("p",[t._v("除了性能外，页分裂操作还影响数据页的利用率。原本放在一个页的数据，现在分到两个页中，整体空间利用率降低大约 50%。")]),t._v(" "),s("p",[t._v("当然有分裂就有合并。当相邻两个页由于删除了数据，利用率很低之后，会将数据页做"),s("mark",[t._v("页合并")]),t._v("。合并的过程，可以认为是分裂过程的逆过程。")]),t._v(" "),s("p",[t._v("基于上面的索引维护过程说明，我们来讨论一个案例：你可能在一些建表规范里面见到过类似的描述，要求建表语句里一定要有自增主键。当然事无绝对，"),s("strong",[t._v("我们来分析一下哪些场景下应该使用自增主键，而哪些场景下不应该")]),t._v("。")]),t._v(" "),s("p",[s("mark",[t._v("自增主键")]),t._v("是指自增列上定义的主键，在建表语句中一般是这么定义的： NOT NULL PRIMARY KEY AUTO_INCREMENT。")]),t._v(" "),s("p",[t._v("插入新记录的时候可以不指定 ID 的值，系统会获取当前 ID 最大值加 1 作为下一条记录的 ID 值。也就是说，自增主键的插入数据模式，正符合了我们前面提到的递增插入的场景。每次插入一条新记录，都是追加操作，都不涉及到挪动其他记录，也不会触发叶子节点的分裂。")]),t._v(" "),s("p",[t._v("而"),s("strong",[t._v("有业务逻辑的字段做主键，则往往不容易保证有序插入，这样写数据成本相对较高")]),t._v("。")]),t._v(" "),s("p",[t._v("除了考虑性能外，我们还可以从存储空间的角度来看。❓ ​假设你的表中确实有一个唯一字段，比如字符串类型的身份证号，那应该用身份证号做主键，还是用自增字段做主键呢？")]),t._v(" "),s("p",[t._v("由于每个非主键索引的叶子节点上都是主键的值。如果用身份证号做主键，那么每个二级索引的叶子节点占用约 20 个字节，而如果用整型做主键，则只要 4 个字节，如果是长整型（bigint）则是 8 个字节。显然，"),s("strong",[t._v("主键长度越小，普通索引的叶子节点就越小，普通索引占用的空间也就越小")]),t._v("。所以，从性能和存储空间方面考量，"),s("strong",[t._v("自增主键往往是更合理的选择")]),t._v("。")]),t._v(" "),s("p",[t._v("❓ "),s("strong",[t._v("有没有什么场景适合用业务字段直接做主键的呢")]),t._v("？还是有的。比如，有些业务的场景需求是这样的：")]),t._v(" "),s("ol",[s("li",[t._v("只有一个索引；")]),t._v(" "),s("li",[t._v("该索引必须是唯一索引。")])]),t._v(" "),s("p",[t._v("这就是典型的 KV 场景。由于没有其他索引，所以也就不用考虑其他索引的叶子节点大小的问题。这时候我们就要优先考虑上一段提到的“尽量使用主键查询”原则，直接将这个索引设置为主键，可以避免每次查询需要搜索两棵树。")]),t._v(" "),s("p",[t._v("所以，由于 InnoDB 是索引组织表，"),s("font",{attrs:{color:"red"}},[t._v("一般情况下我会建议你创建一个自增主键")]),t._v("，这样非主键索引占用的空间最小。但事无绝对，我也跟你讨论了使用业务逻辑字段做主键的应用场景。")],1),t._v(" "),s("h2",{attrs:{id:"_4-带索引的查询优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-带索引的查询优化"}},[t._v("#")]),t._v(" 4. 带索引的查询优化")]),t._v(" "),s("p",[t._v("我们先看一个问题：在下面这个表 T 中，如果我执行 "),s("code",[t._v("select * from T where k between 3 and 5")]),t._v("，需要执行几次树的搜索操作，会扫描多少行？")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    s "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 建表语句")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("下面是 InnoDB 的索引组织结构：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118225528655.png",alt:"image-20230118225528655"}})]),t._v(" "),s("p",[t._v("现在，我们一起来看看这条 SQL 查询语句的执行流程：")]),t._v(" "),s("ol",[s("li",[t._v("在 k 索引树上找到 k=3 的记录，取得 ID = 300；")]),t._v(" "),s("li",[t._v("再到 ID 索引树查到 ID=300 对应的 R3；")]),t._v(" "),s("li",[t._v("在 k 索引树取下一个值 k=5，取得 ID=500；")]),t._v(" "),s("li",[t._v("再回到 ID 索引树查到 ID=500 对应的 R4；")]),t._v(" "),s("li",[s("strong",[t._v("在 k 索引树取下一个值 k=6，不满足条件，循环结束。")])])]),t._v(" "),s("p",[t._v("在这个过程中，回到主键索引树搜索的过程，我们称为"),s("strong",[t._v("回表")]),t._v("。可以看到，这个查询过程读了 k 索引树的 3 条记录（步骤 1、3 和 5），回表了两次（步骤 2 和 4）。")]),t._v(" "),s("p",[t._v("在这个例子中，由于查询结果所需要的数据只在主键索引上有，所以不得不回表。那么，"),s("strong",[t._v("有没有可能经过索引优化，避免回表过程呢")]),t._v("？")]),t._v(" "),s("h3",{attrs:{id:"_4-1-覆盖索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-覆盖索引"}},[t._v("#")]),t._v(" 4.1 覆盖索引")]),t._v(" "),s("p",[t._v("如果执行的语句是 select ID from T where k between 3 and 5，"),s("strong",[t._v("这时只需要查 ID 的值，而 ID 的值已经在 k 索引树上了")]),t._v("，因此可以直接提供查询结果，不需要回表。也就是说，在这个查询里面，"),s("strong",[t._v("索引 k 已经“覆盖了”我们的查询需求")]),t._v("，我们称为"),s("mark",[t._v("覆盖索引")]),t._v("。")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("由于覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段")]),t._v("。")],1),t._v(" "),s("blockquote",[s("p",[t._v("需要注意的是，在引擎内部使用覆盖索引在索引 k 上其实读了三个记录，R3~R5（对应的索引 k 上的记录项），但是对于 MySQL 的 Server 层来说，它就是找引擎拿到了两条记录，因此 MySQL 认为扫描行数是 2。")])]),t._v(" "),s("p",[t._v("基于上面覆盖索引的说明，我们来讨论一个问题："),s("strong",[t._v("在一个市民信息表上，是否有必要将身份证号和名字建立联合索引")]),t._v("？假设这个市民表的定义是这样的：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("tuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ismale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name_age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 注意这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("我们知道，身份证号是市民的唯一标识。也就是说，如果有根据身份证号查询市民信息的需求，我们只要在身份证号字段上建立索引就够了。而再建立一个（身份证号、姓名）的联合索引，是不是浪费空间？")]),t._v(" "),s("p",[t._v("如果现在有一个高频请求，要根据市民的身份证号查询他的姓名，这个联合索引就有意义了。它可以在这个高频请求上用到覆盖索引，不再需要回表查整行记录，减少语句的执行时间。所以，"),s("strong",[t._v("借助联合索引所实现的索引冗余可以支持覆盖索引，从而优化查询性能")]),t._v("。")]),t._v(" "),s("p",[t._v("当然，索引字段的维护总是有代价的。因此，在建立冗余索引来支持覆盖索引时就需要权衡考虑了。这正是业务 DBA，或者称为业务数据架构师的工作。")]),t._v(" "),s("h3",{attrs:{id:"_4-2-最左前缀原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-最左前缀原则"}},[t._v("#")]),t._v(" 4.2 最左前缀原则")]),t._v(" "),s("p",[t._v("看到这里你一定有一个疑问，如果为每一种查询都设计一个索引，索引是不是太多了。如果我现在要按照市民的身份证号去查他的家庭地址呢？虽然这个查询需求在业务中出现的概率不高，但总不能让它走全表扫描吧？反过来说，单独为一个不频繁的请求创建一个（身份证号，地址）的索引又感觉有点浪费。应该怎么做呢？")]),t._v(" "),s("p",[t._v("这里直接说结论吧："),s("font",{attrs:{color:"blue"}},[t._v("B+ 树这种索引结构，可以利用索引的“最左前缀”，来定位记录")]),t._v("。")],1),t._v(" "),s("p",[t._v("为了直观地说明这个概念，我们用（name，age）这个联合索引来分析：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118231000541.png",alt:"image-20230118231000541"}})]),t._v(" "),s("p",[t._v("可以看到，"),s("strong",[t._v("索引项是按照索引定义里面出现的字段顺序排序的")]),t._v("，即优先按“姓名”来排序。")]),t._v(" "),s("ul",[s("li",[t._v("当你的逻辑需求是查到所有名字是“张三”的人时，可以快速定位到 ID4，然后向后遍历得到所有需要的结果。")]),t._v(" "),s("li",[t._v('如果你要查的是所有名字第一个字是“张”的人，你的 SQL 语句的条件是"where name like ‘张 %’"。这时，你也能够用上这个索引，查找到第一个符合条件的记录是 ID3，然后向后遍历，直到不满足条件为止。')])]),t._v(" "),s("p",[t._v("**可以看到，不只是索引的全部定义，"),s("u",[t._v("只要满足最左前缀，就可以利用索引来加速检索")]),t._v("。**这个最左前缀可以是联合索引的最左 N 个字段，也可以是字符串索引的最左 M 个字符。")]),t._v(" "),s("p",[t._v("基于上面对最左前缀索引的说明，我们来讨论一个问题："),s("strong",[t._v("在建立联合索引的时候，如何安排索引内的字段顺序")]),t._v("❓")]),t._v(" "),s("p",[t._v("这里我们的评估标准是，"),s("strong",[t._v("索引的复用能力")]),t._v("。因为可以支持最左前缀，"),s("u",[t._v("所以当已经有了 (a,b) 这个联合索引后，一般就不需要单独在 a 上建立索引了")]),t._v("。因此，第一原则是，"),s("font",{attrs:{color:"blue"}},[t._v("如果通过调整顺序，可以少维护一个索引，那么这个顺序往往就是需要优先考虑采用的")]),t._v("。")],1),t._v(" "),s("p",[t._v("所以现在你知道了，这段开头的问题里，我们要为高频请求创建 (身份证号，姓名）这个联合索引，并用这个索引来同时支持“根据身份证号查询地址”的需求。")]),t._v(" "),s("p",[t._v("那么，如果既有联合查询，又有基于 a、b 各自的查询呢？查询条件里面只有 b 的语句，是无法使用 (a,b) 这个联合索引的，这时候你不得不维护另外一个索引，也就是说你需要同时维护 (a,b)、(b) 这两个索引。"),s("font",{attrs:{color:"blue"}},[t._v("这时候，我们要考虑的原则就是空间了")]),t._v("。比如上面这个市民表的情况，name 字段是比 age 字段大的 ，那我就建议你创建一个（name,age) 的联合索引和一个 (age) 的单字段索引。")],1),t._v(" "),s("p",[t._v("所以可以看到，要不要建立联合索引，以怎样的顺序来建立联合索引，都是要根据业务场景来决定的。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-索引下推"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-索引下推"}},[t._v("#")]),t._v(" 4.3 索引下推")]),t._v(" "),s("p",[t._v("上一段我们说到满足最左前缀原则的时候，最左前缀可以用于在索引中定位记录。这时，你可能要问，"),s("strong",[t._v("那些不符合最左前缀的部分，会怎么样呢？")])]),t._v(" "),s("p",[t._v("我们还是以市民表的联合索引（name, age）为例。如果现在有一个需求：检索出表中“名字第一个字是张，而且年龄是 10 岁的所有男孩”。那么，SQL 语句是这么写的：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tuser "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张%'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ismale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("你已经知道了前缀索引规则，所以这个语句在搜索索引树的时候，只能用 “张”，找到第一个满足条件的记录 ID3。当然，这还不错，总比全表扫描要好。")]),t._v(" "),s("p",[t._v("然后呢？当然是判断其他条件是否满足：")]),t._v(" "),s("ul",[s("li",[t._v("在 MySQL 5.6 之前，只能从 ID3 开始一个个回表。到主键索引上找出数据行，再对比字段值。")]),t._v(" "),s("li",[t._v("而 MySQL 5.6 引入的"),s("mark",[t._v("索引下推优化")]),t._v("（"),s("strong",[t._v("index condition pushdown")]),t._v(")， 可以在索引遍历过程中，"),s("strong",[t._v("对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。")])])]),t._v(" "),s("p",[t._v("可能上面的说法比较抽象，下面举一个实际例子。下面是两个执行过程的流程图：")]),t._v(" "),s("ul",[s("li",[t._v("无索引下推执行流程：")])]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118231710612.png",alt:"image-20230118231710612"}})]),t._v(" "),s("ul",[s("li",[t._v("索引下推执行流程：")])]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118231746811.png",alt:"image-20230118231746811"}})]),t._v(" "),s("p",[t._v("上图中，每一个虚线箭头表示回表一次。")]),t._v(" "),s("p",[t._v("在无索引下推执行流程图中，在 (name,age) 索引里面我特意去掉了 age 的值，这个过程 "),s("strong",[t._v("InnoDB 并不会去看 age 的值")]),t._v("，只是按顺序把“name 第一个字是’张’”的记录一条条取出来回表。因此，需要回表 4 次。")]),t._v(" "),s("p",[t._v("在索引下推执行流程中，nnoDB 在 (name,age) "),s("strong",[t._v("索引内部就判断了 age 是否等于 10")]),t._v("，对于不等于 10 的记录，直接判断并跳过。在我们的这个例子中，只需要对 ID4、ID5 这两条记录回表取数据判断，就只需要回表 2 次。")]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("在满足语句需求的情况下， 尽量少地访问资源是数据库设计的重要原则之一。我们在使用数据库的时候，尤其是在设计表结构时，也要以减少资源消耗作为目标。")]),t._v(" "),s("h2",{attrs:{id:"qa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")]),t._v(" "),s("p",[t._v("一个问题。对于第 2 大节中的例子中的 InnoDB 表 T，如果你要重建索引 k，你的两个 SQL 语句可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果你要重建主键索引，也可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("问题是，对于上面这两个重建索引的作法，说出你的理解。如果有不合适的，为什么，更好的方法是什么？")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：重建索引 k 的做法是合理的，可以达到省空间的目的。因为 "),s("strong",[t._v("InnoDB 引擎在删除了表的部分记录后，但是它的索引还在，并未释放")]),t._v("。但是，重建主键的过程不合理。不论是删除主键还是创建主键，都会将整个表重建。所以连着执行这两个语句的话，第一个语句就白做了。这两个语句，你可以用这个语句代替 ： "),s("strong",[t._v("alter table T engine=InnoDB")]),t._v("。在之后的文章《为什么表数据删掉一半，表文件大小不变？》中，会分析这条语句的执行流程。")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);