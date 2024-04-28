(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{460:function(e,t,a){"use strict";a.r(t);var n=a(4),_=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-12-为什么表数据删掉一半-表文件大小不变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-12-为什么表数据删掉一半-表文件大小不变"}},[e._v("#")]),e._v(" MySQL 12 为什么表数据删掉一半，表文件大小不变")]),e._v(" "),t("p",[e._v("经常会有同学来问我，我的数据库占用空间太大，我"),t("strong",[e._v("把一个最大的表删掉了一半的数据，怎么表文件的大小还是没变？")])]),e._v(" "),t("p",[e._v("那么今天，我就和你聊聊数据库表的空间回收，看看如何解决这个问题。")]),e._v(" "),t("p",[e._v("这里，我们还是针对MySQL中应用最广泛的InnoDB引擎展开讨论。一个InnoDB表包含两部分，即：表结构定义和数据。"),t("strong",[e._v("在MySQL 8.0版本以前，表结构是存在以.frm为后缀的文件里。"),t("strong",[e._v("而")]),e._v("MySQL 8.0版本，则已经允许把表结构定义放在系统数据表中了")]),e._v("。因为表结构定义占用的空间很小，所以我们今天主要讨论的是表数据。")]),e._v(" "),t("p",[e._v("接下来，我会先和你说明为什么简单地删除表数据达不到表空间回收的效果，然后再和你介绍正确回收空间的方法。")]),e._v(" "),t("h2",{attrs:{id:"参数innodb-file-per-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数innodb-file-per-table"}},[e._v("#")]),e._v(" 参数innodb_file_per_table")]),e._v(" "),t("p",[t("strong",[e._v("表数据既可以存在共享表空间里，也可以是单独的文件。这个行为是由参数innodb_file_per_table控制的")]),e._v("：")]),e._v(" "),t("ol",[t("li",[e._v("这个参数设置为"),t("strong",[e._v("OFF表示的是，表的数据放在系统共享表空间")]),e._v("，也就是跟数据字典放在一起；")]),e._v(" "),t("li",[e._v("这个参数设置为"),t("strong",[e._v("ON表示的是，每个InnoDB表数据存储在一个以 .ibd为后缀的文件中。")])])]),e._v(" "),t("p",[e._v("从"),t("strong",[e._v("MySQL 5.6.6版本开始，它的默认值就是ON了。")])]),e._v(" "),t("p",[e._v("我建议你不论使用MySQL的哪个版本，"),t("strong",[e._v("都将这个值设置为ON。因为，一个表单独存储为一个文件更容易管理，而且在你不需要这个表的时候，通过drop table命令，系统就会直接删除这个文件。而如果是放在共享表空间中，即使表删掉了，空间也是不会回收的。")])]),e._v(" "),t("p",[e._v("所以，"),t("strong",[e._v("将innodb_file_per_table设置为ON，是推荐做法，我们接下来的讨论都是基于这个设置展开的。")])]),e._v(" "),t("p",[e._v("我们在删除整个表的时候，"),t("strong",[e._v("可以使用drop table命令回收表空间。但是，我们遇到的更多的删除数据的场景是删除某些行")]),e._v("，这时就遇到了我们文章开头的问题：表中的"),t("strong",[e._v("数据被删除了，但是表空间却没有被回收。")])]),e._v(" "),t("p",[e._v("我们要彻底搞明白这个问题的话，就要从数据删除流程说起了。")]),e._v(" "),t("h2",{attrs:{id:"数据删除流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据删除流程"}},[e._v("#")]),e._v(" 数据删除流程")]),e._v(" "),t("p",[e._v("我们先再来看一下InnoDB中一个索引的示意图。在前面"),t("a",{attrs:{href:"https://time.geekbang.org/column/article/69236",target:"_blank",rel:"noopener noreferrer"}},[e._v("第4"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://time.geekbang.org/column/article/69636",target:"_blank",rel:"noopener noreferrer"}},[e._v("第5"),t("OutboundLink")],1),e._v("篇文章中，我和你介绍索引时曾经提到过，"),t("strong",[e._v("InnoDB里的数据都是用B+树的结构组织的。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/f0/c8/f0b1e4ac610bcb5c5922d0b18563f3c8.png",alt:"img"}})]),e._v(" "),t("p",[e._v("图1 B+树索引示意图")]),e._v(" "),t("p",[e._v("假设，我们要删掉R4这个记录，InnoDB引擎只会把R4这个记录标记为删除。"),t("strong",[e._v("如果之后要再插入一个ID在300和600之间的记录时，可能会复用这个位置")]),e._v(".但是，磁盘文件的大小并不会缩小。")]),e._v(" "),t("p",[e._v("现在，你已经知道了"),t("strong",[e._v("InnoDB的数据是按页存储的，那么如果我们删掉了一个数据页上的所有记录，会怎么样")]),e._v("？")]),e._v(" "),t("p",[e._v("答案是，"),t("strong",[e._v("整个数据页就可以被复用了。")])]),e._v(" "),t("p",[e._v("但是，"),t("strong",[e._v("数据页的复用跟记录的复用是不同的。")])]),e._v(" "),t("p",[e._v("记录的复用，只限于符合范围条件的数据。比如上面的这个例子，R4这条记录被删除后，如果插入一个ID是400的行，可以直接复用这个空间。但如果插入的是一个ID是800的行，就不能复用这个位置了。")]),e._v(" "),t("p",[e._v("而当整个页从B+树里面摘掉以后，可以复用到任何位置。以图1为例，如果将数据页page A上的所有记录删除以后，page A会被标记为可复用。这时候如果要插入一条ID=50的记录需要使用新页的时候，page A是可以被复用的。")]),e._v(" "),t("p",[e._v("如果相邻的两个数据页利用率都很小，系统就会把这两个页上的数据合到其中一个页上，另外一个数据页就被标记为可复用。")]),e._v(" "),t("p",[e._v("进一步地，"),t("strong",[e._v("如果我们用delete命令把整个表的数据删除呢？结果就是，所有的数据页都会被标记为可复用。但是磁盘上，文件不会变小。")])]),e._v(" "),t("p",[e._v("你现在知道了，"),t("strong",[e._v("delete命令其实只是把记录的位置，或者数据页标记为了“可复用”，但磁盘文件的大小是不会变的。也就是说，通过delete命令是不能回收表空间的。这些可以复用，而没有被使用的空间，看起来就像是“空洞”。")])]),e._v(" "),t("p",[e._v("实际上，"),t("strong",[e._v("不止是删除数据会造成空洞，插入数据也会。")])]),e._v(" "),t("p",[e._v("如果数据是按照索引递增顺序插入的，那么索引是紧凑的。但如果数据是随机插入的，就可能造成索引的数据页分裂。")]),e._v(" "),t("p",[e._v("假设图1中page A已经满了，这时我要再插入一行数据，会怎样呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/80/ea/8083f05a4a4c0372833a6e01d5a8e6ea.png",alt:"img"}})]),e._v(" "),t("p",[e._v("图2 插入数据导致页分裂")]),e._v(" "),t("p",[e._v("可以看到，由于page A满了，再插入一个ID是550的数据时，就不得不再申请一个新的页面page B来保存数据了。页分裂完成后，page A的末尾就留下了空洞（注意：实际上，可能不止1个记录的位置是空洞）。")]),e._v(" "),t("p",[e._v("另外，更新索引上的值，可以理解为删除一个旧的值，再插入一个新值。不难理解，这也是会造成空洞的。")]),e._v(" "),t("p",[e._v("也就是说，"),t("strong",[e._v("经过大量增删改的表，都是可能是存在空洞的。所以，如果能够把这些空洞去掉，就能达到收缩表空间的目的。")])]),e._v(" "),t("p",[e._v("而重建表，就可以达到这样的目的。")]),e._v(" "),t("h2",{attrs:{id:"重建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重建表"}},[e._v("#")]),e._v(" 重建表")]),e._v(" "),t("p",[e._v("试想一下，如果"),t("strong",[e._v("你现在有一个表A，需要做空间收缩，为了把表中存在的空洞去掉")]),e._v("，你可以怎么做呢？")]),e._v(" "),t("p",[e._v("你可以新建一个与表A结构相同的表B，然后按照主键ID递增的顺序，把数据一行一行地从表A里读出来再插入到表B中。")]),e._v(" "),t("p",[e._v("由于表B是新建的表，所以表A主键索引上的空洞，在表B中就都不存在了。显然地，表B的主键索引更紧凑，数据页的利用率也更高。如果我们把表B作为临时表，数据从表A导入表B的操作完成后，用表B替换A，从效果上看，就起到了收缩表A空间的作用。")]),e._v(" "),t("p",[e._v("这里，你可以使用"),t("strong",[e._v("alter table A engine=InnoDB命令来重建表")]),e._v("。在MySQL 5.5版本之前，这个命令的执行流程跟我们前面描述的差不多，区别只是这个临时表B不需要你自己创建，MySQL会自动完成转存数据、交换表名、删除旧表的操作。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/02/cd/02e083adaec6e1191f54992f7bc13dcd.png",alt:"img"}})]),e._v(" "),t("p",[e._v("图3 改锁表DDL")]),e._v(" "),t("p",[e._v("显然，花时间最多的步骤是往临时表插入数据的过程，如果在这个过程中，有新的数据要写入到表A的话，就会造成数据丢失。因此，在整个DDL过程中，表A中不能有更新。也就是说，这个DDL不是Online的。")]),e._v(" "),t("p",[e._v("而在"),t("strong",[e._v("MySQL 5.6版本开始引入的Online DDL，对这个操作流程做了优化。")])]),e._v(" "),t("p",[e._v("我给你简单描述一下引入了Online DDL之后，重建表的流程：")]),e._v(" "),t("ol",[t("li",[e._v("建立一个临时文件，扫描表A主键的所有数据页；")]),e._v(" "),t("li",[e._v("用数据页中表A的记录生成B+树，存储到临时文件中；")]),e._v(" "),t("li",[e._v("生成临时文件的过程中，将所有对A的操作记录在一个日志文件（row log）中，对应的是图中state2的状态；")]),e._v(" "),t("li",[e._v("临时文件生成后，将日志文件中的操作应用到临时文件，得到一个逻辑数据上与表A相同的数据文件，对应的就是图中state3的状态；")]),e._v(" "),t("li",[e._v("用临时文件替换表A的数据文件。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/2d/f0/2d1cfbbeb013b851a56390d38b5321f0.png",alt:"img"}})]),e._v(" "),t("p",[e._v("图4 Online DDL")]),e._v(" "),t("p",[e._v("可以看到，与图3过程的不同之处在于，由于日志文件记录和重放操作这个功能的存在，这个方案在重建表的过程中，允许对表A做增删改操作。这也就是Online DDL名字的来源。")]),e._v(" "),t("p",[e._v("我记得有同学在第6篇讲表锁的文章"),t("a",{attrs:{href:"https://time.geekbang.org/column/article/69862",target:"_blank",rel:"noopener noreferrer"}},[e._v("《全局锁和表锁 ：给表加个字段怎么索这么多阻碍？》"),t("OutboundLink")],1),e._v("的评论区留言说，DDL之前是要拿MDL写锁的，这样还能叫Online DDL吗？")]),e._v(" "),t("p",[e._v("确实，图4的流程中，alter语句在启动的时候需要获取MDL写锁，但是这个写锁在真正拷贝数据之前就退化成读锁了。")]),e._v(" "),t("p",[e._v("为什么要退化呢？为了实现Online，MDL读锁不会阻塞增删改操作。")]),e._v(" "),t("p",[e._v("那为什么不干脆直接解锁呢？为了保护自己，禁止其他线程对这个表同时做DDL。")]),e._v(" "),t("p",[e._v("而对于一个大表来说，Online DDL最耗时的过程就是拷贝数据到临时表的过程，这个步骤的执行期间可以接受增删改操作。所以，相对于整个DDL过程来说，锁的时间非常短。对业务来说，就可以认为是Online的。")]),e._v(" "),t("p",[e._v("需要补充说明的是，上述的这些重建方法都会扫描原表数据和构建临时文件。对于很大的表来说，这个操作是很消耗IO和CPU资源的。因此，如果是线上服务，你要很小心地控制操作时间。如果想要比较安全的操作的话，我推荐你使用GitHub开源的gh-ost来做。")]),e._v(" "),t("h2",{attrs:{id:"online-和-inplace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-和-inplace"}},[e._v("#")]),e._v(" Online 和 inplace")]),e._v(" "),t("p",[e._v("说到Online，我还要再和你澄清一下它和另一个跟DDL有关的、容易混淆的概念inplace的区别。")]),e._v(" "),t("p",[e._v("你可能注意到了，在图3中，我们把表A中的数据导出来的存放位置叫作tmp_table。这是一个临时表，是在server层创建的。")]),e._v(" "),t("p",[e._v("在图4中，根据表A重建出来的数据是放在“tmp_file”里的，这个临时文件是InnoDB在内部创建出来的。整个DDL过程都在InnoDB内部完成。对于server层来说，没有把数据挪动到临时表，是一个“原地”操作，这就是“inplace”名称的来源。")]),e._v(" "),t("p",[e._v("所以，我现在问你，如果你有一个1TB的表，现在磁盘间是1.2TB，能不能做一个inplace的DDL呢？")]),e._v(" "),t("p",[e._v("答案是不能。因为，tmp_file也是要占用临时空间的。")]),e._v(" "),t("p",[e._v("我们重建表的这个语句alter table t engine=InnoDB，其实隐含的意思是：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("engine")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("innodb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("inplace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("跟inplace对应的就是拷贝表的方式了，用法是：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("engine")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("innodb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("copy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("当你使用ALGORITHM=copy的时候，表示的是强制拷贝表，对应的流程就是图3的操作过程。")]),e._v(" "),t("p",[e._v("但我这样说你可能会觉得，inplace跟Online是不是就是一个意思？")]),e._v(" "),t("p",[e._v("其实不是的，只是在重建表这个逻辑中刚好是这样而已。")]),e._v(" "),t("p",[e._v("比如，如果我要给InnoDB表的一个字段加全文索引，写法是：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("add")]),e._v(" FULLTEXT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("field_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这个过程是inplace的，但会阻塞增删改操作，是非Online的。")]),e._v(" "),t("p",[e._v("如果说这两个逻辑之间的关系是什么的话，可以概括为：")]),e._v(" "),t("ol",[t("li",[e._v("DDL过程如果是Online的，就一定是inplace的；")]),e._v(" "),t("li",[e._v("反过来未必，也就是说inplace的DDL，有可能不是Online的。截止到MySQL 8.0，添加全文索引（FULLTEXT index）和空间索引(SPATIAL index)就属于这种情况。")])]),e._v(" "),t("p",[e._v("最后，我们再延伸一下。")]),e._v(" "),t("p",[e._v("在第10篇文章"),t("a",{attrs:{href:"https://time.geekbang.org/column/article/71173",target:"_blank",rel:"noopener noreferrer"}},[e._v("《MySQL为什么有时候会选错索引》"),t("OutboundLink")],1),e._v("的评论区中，有同学问到使用optimize table、analyze table和alter table这三种方式重建表的区别。这里，我顺便再简单和你解释一下。")]),e._v(" "),t("ul",[t("li",[e._v("从MySQL 5.6版本开始，alter table t engine = InnoDB（也就是recreate）默认的就是上面图4的流程了；")]),e._v(" "),t("li",[e._v("analyze table t 其实不是重建表，只是对表的索引信息做重新统计，没有修改数据，这个过程中加了MDL读锁；")]),e._v(" "),t("li",[e._v("optimize table t 等于recreate+analyze。")])]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("今天这篇文章，我和你讨论了数据库中收缩表空间的方法。")]),e._v(" "),t("p",[e._v("现在你已经知道了，如果要收缩一个表，"),t("strong",[e._v("只是delete掉表里面不用的数据的话，表文件的大小是不会变的，你还要通过alter table命令重建表")]),e._v("，才能达到表文件变小的目的。我跟你介绍了重建表的两种实现方式，"),t("strong",[e._v("Online DDL的方式是可以考虑在业务低峰期使用的，而MySQL 5.5及之前的版本，这个命令是会阻塞DML的，这个你需要特别小心。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);