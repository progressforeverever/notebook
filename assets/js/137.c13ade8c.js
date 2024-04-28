(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{467:function(_,v,t){"use strict";t.r(v);var s=t(4),n=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[_._v("#")]),_._v(" 索引")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E7%B4%A2%E5%BC%95/%E7%B4%A2%E5%BC%95%E6%80%BB%E7%BB%93.drawio.png",alt:""}})]),_._v(" "),v("p",[_._v("分类：")]),_._v(" "),v("p",[_._v("我们可以按照四个角度来分类索引。")]),_._v(" "),v("ul",[v("li",[_._v("按「数据结构」分类："),v("strong",[_._v("B+tree 索引、Hash 索引、Full-text 索引")]),_._v("。")]),_._v(" "),v("li",[_._v("按「物理存储」分类："),v("strong",[_._v("聚簇索引（主键索引）、二级索引（辅助索引）")]),_._v("。")]),_._v(" "),v("li",[_._v("按「字段特性」分类："),v("strong",[_._v("主键索引、唯一索引、普通索引、前缀索引")]),_._v("。")]),_._v(" "),v("li",[_._v("按「字段个数」分类："),v("strong",[_._v("单列索引、联合索引")]),_._v("。")])]),_._v(" "),v("p",[_._v("B树")]),_._v(" "),v("p",[_._v("自平衡二叉树虽然能保持查询操作的时间复杂度在O(logn)，但是因为它本质上是一个二叉树，每个节点只能有 2 个子节点，那么当节点个数越多的时候，树的高度也会相应变高，这样就会增加磁盘的 I/O 次数，从而影响数据查询的效率。")]),_._v(" "),v("p",[_._v("为了解决降低树的高度的问题，后面就出来了 B 树，它不再限制一个节点就只能有 2 个子节点，而是允许 M 个子节点 (M>2)，从而降低树的高度。")]),_._v(" "),v("p",[_._v("B 树的每一个节点最多可以包括 M 个子节点，M 称为 B 树的阶，"),v("strong",[_._v("所以 B 树就是一个多叉树。")])]),_._v(" "),v("p",[_._v("但是 B 树的每个节点都包含数据（索引+记录），而用户的记录数据的大小很有可能远远超过了索引数据，这就需要花费更多的磁盘 I/O 操作次数来读到「有用的索引数据」。")]),_._v(" "),v("p",[_._v("先看看数据结构上的一些特点，主要是了解B+树的一些特点")]),_._v(" "),v("p",[_._v("InnoDB 是在 MySQL 5.5 之后成为默认的 MySQL 存储引擎，B+Tree 索引类型也是 MySQL 存储引擎采用最多的索引类型。")]),_._v(" "),v("p",[v("strong",[_._v("B+Tree 是一种多叉树，叶子节点才存放数据，非叶子节点只存放索引")]),_._v("，而且每个节点里的数据是"),v("strong",[_._v("按主键顺序存放")]),_._v("的。每一层父节点的索引值都会出现在下层子节点的索引值中，"),v("strong",[_._v("因此在叶子节点中，包括了所有的索引值信息，并且每一个叶子节点都指向下一个叶子节点，形成一个链表。")])]),_._v(" "),v("p",[_._v("主键索引的 B+Tree 如图所示：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E7%B4%A2%E5%BC%95/btree.drawio.png",alt:"主键索引 B+Tree"}})]),_._v(" "),v("p",[_._v("所以"),v("strong",[_._v("B+Tree 相比于 B 树和二叉树来说，最大的优势在于查询效率很高，因为即使在数据量很大的情况，查询一个数据的磁盘 I/O 依然维持在 3-4 次。")])]),_._v(" "),v("p",[_._v("回表的概念")]),_._v(" "),v("p",[_._v("表中 R1~R5 的 (ID,k) 值分别为 (100,1)、(200,2)、(300,3)、(500,5) 和 (600,6)，两棵树的示例示意图如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230118221841632.png",alt:"image-20230118221841632"}})]),_._v(" "),v("p",[_._v("从图中不难看出，根据叶子节点的内容，"),v("strong",[_._v("索引类型分为主键索引和非主键索引")]),_._v("。")]),_._v(" "),v("ul",[v("li",[_._v("主键索引：叶子节点存的是整行数据。在 InnoDB 里，主键索引也被称为"),v("strong",[_._v("聚簇索引")]),_._v("（"),v("strong",[_._v("clustered index")]),_._v("）。")]),_._v(" "),v("li",[_._v("非主键索引：叶子节点内容是主键的值。在 InnoDB 里，非主键索引也被称为"),v("strong",[_._v("二级索引")]),_._v("（"),v("strong",[_._v("secondary index")]),_._v("）。")])]),_._v(" "),v("p",[_._v("根据上面的索引结构说明，我们来讨论一个问题：基于主键索引和普通索引的查询有什么区别？")]),_._v(" "),v("ul",[v("li",[_._v("如果语句是 "),v("code",[_._v("select * from T where ID=500")]),_._v("，即"),v("strong",[_._v("主键查询方式，则只需要搜索 ID 这棵 B+ 树；")])]),_._v(" "),v("li",[_._v("如果语句是 "),v("code",[_._v("select * from T where k=5")]),_._v("，即普通索引查询方式，则需要先搜索 k 索引树，得到 ID 的值为 500，再到 ID 索引树搜索一次。这个过程称为回表。")])]),_._v(" "),v("p",[_._v("也就是说，基于非主键索引的查询需要多扫描一棵索引树。因此，我们在应用中应该尽量使用主键查询。")]),_._v(" "),v("p",[_._v("B+树的一些优点：")]),_._v(" "),v("p",[_._v("B+Tree 只在叶子节点存储数据，而 B 树 的非叶子节点也要存储数据，所以 B+Tree 的单个节点的数据量更小，"),v("strong",[_._v("在相同的磁盘 I/O 次数下，就能查询更多的节点。")])]),_._v(" "),v("p",[_._v("另外，B+Tree 叶子节点采用的是"),v("strong",[_._v("双链表连接")]),_._v("，适合 MySQL 中常见的基于范围的顺序查找，而 B 树无法做到这一点。")]),_._v(" "),v("p",[_._v("而二叉树的每个父节点的儿子节点个数只能是 2 个，意味着其搜索复杂度为 "),v("code",[_._v("O(logN)")]),_._v("，这已经比 B+Tree 高出不少，因此二叉树检索到目标数据所经历的磁盘 I/O 次数要更多。")]),_._v(" "),v("p",[_._v("Hash 表不适合做范围查询，它更适合做等值的查询，这也是 B+Tree 索引要比 Hash 表索引有着更广泛的适用场景的原因。")]),_._v(" "),v("p",[v("strong",[_._v("前缀索引是指对字符类型字段的前几个字符建立的索引")]),_._v("，而不是在整个字段上建立的索引，前缀索引可以建立在字段类型为 "),v("strong",[_._v("char、varchar、binary、varbinary 的列上。")])]),_._v(" "),v("p",[_._v("使用前缀索引的目的是为了"),v("strong",[_._v("减少索引占用的存储空间，提升查询效率。")])]),_._v(" "),v("p",[_._v("联合索引的最左匹配")]),_._v(" "),v("p",[_._v("比如，将商品表中的 product_no 和 name 字段组合成联合索引"),v("code",[_._v("(product_no, name)")]),_._v("，创建联合索引的方式如下：")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("CREATE")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("INDEX")]),_._v(" index_product_no_name "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("ON")]),_._v(" product"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("product_no"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" name"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("联合索引"),v("code",[_._v("(product_no, name)")]),_._v(" 的 B+Tree 示意图如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/%E7%B4%A2%E5%BC%95/%E8%81%94%E5%90%88%E7%B4%A2%E5%BC%95.drawio.png",alt:"联合索引"}})]),_._v(" "),v("p",[_._v("可以看到，联合索引的非叶子节点用两个字段的值作为  B+Tree 的 key 值。当在联合索引查询数据时，先按 product_no 字段比较，在 product_no 相同的情况下再按 name 字段比较。")]),_._v(" "),v("p",[_._v("也就是说，联合索引查询的 B+Tree 是先按 product_no 进行排序，然后再 product_no 相同的情况再按 name 字段排序。")]),_._v(" "),v("p",[_._v("因此，使用联合索引时，存在"),v("strong",[_._v("最左匹配原则")]),_._v("，也就是按照最左优先的方式进行索引的匹配。在使用联合索引进行查询的时候，如果不遵循「最左匹配原则」，联合索引会失效，这样就无法利用到索引快速查询的特性了。")]),_._v(" "),v("p",[v("strong",[_._v("联合索引的最左匹配原则，在遇到范围查询（如 >、<）的时候，就会停止匹配，也就是范围查询的字段可以用到联合索引，但是在范围查询字段的后面的字段无法用到联合索引。注意，对于 >=、<=、BETWEEN、like 前缀匹配的范围查询，并不会停止匹配，")])]),_._v(" "),v("p",[_._v("什么时候适用索引？")]),_._v(" "),v("ul",[v("li",[_._v("字段有唯一性限制的，比如商品编码；")]),_._v(" "),v("li",[_._v("经常"),v("strong",[_._v("用于 "),v("code",[_._v("WHERE")]),_._v(" 查询条件的字段")]),_._v("，这样能够提高整个表的查询速度，如果查询条件不是一个字段，可以建立联合索引。")]),_._v(" "),v("li",[_._v("经常"),v("strong",[_._v("用于 "),v("code",[_._v("GROUP BY")]),_._v(" 和 "),v("code",[_._v("ORDER BY")]),_._v(" 的字段")]),_._v("，这样在查询的时候就不需要再去做一次排序了，因为我们都已经知道了建立索引之后在 B+Tree 中的记录都是排序好的。")])]),_._v(" "),v("p",[_._v("什么时候不需要创建索引？")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("WHERE")]),_._v(" 条件，"),v("code",[_._v("GROUP BY")]),_._v("，"),v("code",[_._v("ORDER BY")]),_._v(" 里用不到的字段，索引的价值是快速定位，如果起不到定位的字段通常是不需要创建索引的，因为索引是会占用物理空间的。")]),_._v(" "),v("li",[_._v("字段中存在大量重复数据，不需要创建索引，比如性别字段，只有男女，如果数据库表中，男女的记录分布均匀，那么无论搜索哪个值都可能得到一半的数据。在这些情况下，还不如不要索引，因为 MySQL 还有一个查询优化器，查询优化器发现某个值出现在表的数据行中的百分比很高的时候，它一般会忽略索引，进行全表扫描。")]),_._v(" "),v("li",[_._v("表数据太少的时候，不需要创建索引；")]),_._v(" "),v("li",[_._v("经常更新的字段不用创建索引，比如不要对电商项目的用户余额建立索引，因为索引字段频繁修改，由于要维护 B+Tree 的有序性，那么就需要频繁的重建索引，这个过程是会影响数据库性能的。")])]),_._v(" "),v("h3",{attrs:{id:"前缀索引优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引优化"}},[_._v("#")]),_._v(" 前缀索引优化")]),_._v(" "),v("p",[_._v("前缀索引顾名思义就是"),v("strong",[_._v("使用某个字段中字符串的前几个字符建立索引")]),_._v("，那我们为什么需要使用前缀来建立索引呢？")]),_._v(" "),v("p",[_._v("使用前缀索引是为了减小索引字段大小，可以增加一个索引页中存储的索引值，有效提高索引的查询速度。在一些大字符串的字段作为索引时，使用前缀索引可以帮助我们减小索引项的大小。")]),_._v(" "),v("p",[_._v("不过，前缀索引有一定的局限性，例如：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("order by 就无法使用前缀索引；")])]),_._v(" "),v("li",[v("strong",[_._v("无法把前缀索引用作覆盖索引；")])])]),_._v(" "),v("h3",{attrs:{id:"覆盖索引优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引优化"}},[_._v("#")]),_._v(" "),v("strong",[_._v("覆盖索引优化")])]),_._v(" "),v("p",[v("strong",[_._v("覆盖索引是指 SQL 中 query 的所有字段，在索引 B+Tree  的叶子节点上都能找得到的那些索引")]),_._v("，从二级索引中查询得到记录，而不需要通过聚簇索引查询获得，可以避免回表的操作。")]),_._v(" "),v("p",[_._v("假设我们只需要查询商品的名称、价格，有什么方式可以避免回表呢？")]),_._v(" "),v("p",[_._v("我们可以建立一个联合索引，即**「商品 ID、名称、价格」作为一个联合索引。如果索引中存在这些数据，查询将不会再次检索主键索引，从而避免回表。**")]),_._v(" "),v("p",[_._v("所以，使用覆盖索引的好处就是，不需要查询出包含整行记录的所有信息，也就减少了大量的 I/O 操作。")]),_._v(" "),v("p",[v("strong",[_._v("发生索引失效的情况：")])]),_._v(" "),v("ul",[v("li",[_._v("当我们使用"),v("strong",[_._v("左或者左右模糊匹配的时候，也就是 "),v("code",[_._v("like %xx")]),_._v(" 或者 "),v("code",[_._v("like %xx%")]),_._v("这两种方式都会造成索引失效；")])]),_._v(" "),v("li",[_._v("当我们在查询条件中"),v("strong",[_._v("对索引列做了计算、函数、类型转换操作，这些情况下都会造成索引失效；")])]),_._v(" "),v("li",[_._v("联合索引要"),v("strong",[_._v("能正确使用需要遵循最左匹配原则，也就是按照最左优先的方式进行索引的匹配，否则就会导致索引失效。")])]),_._v(" "),v("li",[_._v("在 WHERE 子句中，如果在 OR 前的条件列是索引列，而在 OR 后的条件列不是索引列，那么索引会失效。")])]),_._v(" "),v("p",[_._v("count性能的问题")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.xiaolincoding.com//mysql/other/af711033aa3423330d3a4bc6baeb9532.png",alt:"图片"}})]),_._v(" "),v("p",[_._v("count() 是一个聚合函数，函数的参数不仅可以是字段名，也可以是其他任意表达式，该函数作用是"),v("strong",[_._v("统计符合查询条件的记录中，函数指定的参数不为 NULL 的记录有多少个")]),_._v("。")]),_._v(" "),v("p",[_._v("假设 count() 函数的参数是字段名，如下：")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("select")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[_._v("count")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("name"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("from")]),_._v(" t_order"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("这条语句是统计「 t_order 表中，name 字段不为 NULL 的记录」有多少个。也就是说，如果某一条记录中的 name 字段的值为 NULL，则就不会被统计进去。")]),_._v(" "),v("p",[_._v("再来假设 count() 函数的参数是数字 1 这个表达式，如下：")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("select")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[_._v("count")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("from")]),_._v(" t_order"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("这条语句是统计「 t_order 表中，1 这个表达式不为 NULL 的记录」有多少个。")]),_._v(" "),v("p",[_._v("1 这个表达式就是单纯数字，它永远都不是 NULL，所以上面这条语句，其实是在统计 t_order 表中有多少个记录。")]),_._v(" "),v("p",[_._v("在MySQL中，"),v("strong",[_._v("二级索引（secondary index）是指除了表的主键索引外的其他索引")]),_._v("。主键索引是表中的主要索引，用于唯一标识表中的每一行数据。而二级索引则是针对表中的其他列或列组建立的索引，用于加速对这些列的查询操作。")]),_._v(" "),v("p",[v("strong",[_._v("count(1)、 count(*)、 count(主键字段)在执行的时候，如果表里存在二级索引，优化器就会选择二级索引进行扫描。")])]),_._v(" "),v("p",[_._v("所以，如果要执行 count(1)、 count(*)、 count(主键字段) 时，"),v("strong",[_._v("尽量在数据表上建立二级索引")]),_._v("，"),v("strong",[_._v("这样优化器会自动采用 key_len 最小的二级索引进行扫描，相比于扫描主键索引效率会高一些。")])]),_._v(" "),v("p",[_._v("再来，就是不要使用 count(字段) 来统计记录个数，因为它的效率是最差的，会采用全表扫描的方式来统计。"),v("strong",[_._v("如果你非要统计表中该字段不为 NULL 的记录个数，建议给这个字段建立一个二级索引。")])]),_._v(" "),v("p",[_._v("代替方案，近似值，redis或者其他地方另外存一个，额外表保存计数值")]),_._v(" "),v("p",[_._v("这时，我们就可以使用 show table status 或者 explain 命令来表进行估算。")]),_._v(" "),v("p",[_._v("执行 explain 命令效率是很高的，因为它并不会真正的去查询，下图中的 rows 字段值就是 explain 命令对表 t_order 记录的估算值。")])])}),[],!1,null,null,null);v.default=n.exports}}]);