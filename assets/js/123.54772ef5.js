(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{453:function(_,t,v){"use strict";v.r(t);var s=v(4),a=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"mysql实战-05-全局锁、表锁、行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql实战-05-全局锁、表锁、行锁"}},[_._v("#")]),_._v(" MySQL实战 05 | 全局锁、表锁、行锁")]),_._v(" "),t("blockquote",[t("p",[_._v("参考：")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://time.geekbang.org/column/article/69862",target:"_blank",rel:"noopener noreferrer"}},[_._v("06 | 全局锁和表锁 ：给表加个字段怎么有这么多阻碍？| 极客时间"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://time.geekbang.org/column/article/70215",target:"_blank",rel:"noopener noreferrer"}},[_._v("07 | 行锁功过：怎么减少行锁对性能的影响？| 极客时间"),t("OutboundLink")],1)])])]),_._v(" "),t("p",[t("strong",[_._v("数据库锁设计的初衷是处理并发问题")]),_._v(" .作为多用户共享的资源，当出现并发访问的时候，数据库需要合理地控制资源的访问规则。而锁就是用来实现这些访问规则的重要数据结构。")]),_._v(" "),t("p",[_._v("根据加锁的范围，"),t("strong",[_._v("MySQL 里面的锁大致可以分成全局锁、表级锁和行锁三类")]),_._v("。由于锁的设计比较复杂，这里不会涉及锁的具体实现细节，主要介绍的是碰到锁时的现象和其背后的原理。")]),_._v(" "),t("h2",{attrs:{id:"_1-全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局锁"}},[_._v("#")]),_._v(" 1. 全局锁")]),_._v(" "),t("h3",{attrs:{id:"_1-1-什么是全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是全局锁"}},[_._v("#")]),_._v(" 1.1 什么是全局锁")]),_._v(" "),t("p",[t("mark",[_._v("全局锁")]),_._v("就是对整个数据库实例加锁。MySQL 提供了一个加全局读锁的方法，命令是 "),t("strong",[_._v("Flush tables with read lock")]),_._v(" ("),t("mark",[_._v("FTWRL")]),_._v(")。当你需要让整个库处于只读状态的时候，可以使用这个命令，之后其他线程的以下语句会被阻塞：数据更新语句（数据的增删改）、数据定义语句（包括建表、修改表结构等）和更新类事务的提交语句。")]),_._v(" "),t("p",[t("font",{attrs:{color:"blue"}},[_._v("全局锁的典型使用场景是，做全库逻辑备份")]),_._v("。也就是把整库每个表都 select 出来存成文本。")],1),_._v(" "),t("p",[_._v("以前有一种做法，是通过 FTWRL 确保不会有其他线程对数据库做更新，然后对整个库做备份。注意，在备份过程中整个库完全处于只读状态。但是让整库都只读，听上去就很危险：")]),_._v(" "),t("ul",[t("li",[_._v("如果你在主库上备份，那么在备份期间都不能执行更新，业务基本上就得停摆；")]),_._v(" "),t("li",[_._v("如果你在从库上备份，那么备份期间从库不能执行主库同步过来的 binlog，会导致主从延迟。")])]),_._v(" "),t("blockquote",[t("p",[_._v("如何解决上述的两个问题")])]),_._v(" "),t("h3",{attrs:{id:"_1-2-备份为什么要加锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-备份为什么要加锁"}},[_._v("#")]),_._v(" 1.2 备份为什么要加锁？")]),_._v(" "),t("p",[_._v("看来加全局锁不太好。但是细想一下，"),t("strong",[_._v("备份为什么要加锁呢")]),_._v("❓ 我们来看一下不加锁会有什么问题。")]),_._v(" "),t("p",[_._v("现在发起一个逻辑备份。假设备份期间，有一个用户，他购买了一门课程，业务逻辑里就要扣掉他的余额，然后往已购课程里面加上一门课。如果时间顺序上是先备份账户余额表 (u_account)，"),t("strong",[_._v("然后用户购买")]),_._v("，然后备份用户课程表 (u_course)，会怎么样呢？你可以看一下这个图：")]),_._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230119155406215.png",alt:"image-20230119155406215"}}),_._v(" "),t("p",[_._v("可以看到，这个备份结果里，用户 A 的数据状态是“账户余额没扣，但是用户课程表里面已经多了一门课”。如果后面用这个备份来恢复数据的话，用户 A 就发现，自己赚了。如果备份表的顺序反过来，先备份用户课程表再备份账户余额表，那用户就亏了。")]),_._v(" "),t("p",[_._v("也就是说，"),t("strong",[_._v("不加锁的话，备份系统备份的得到的库不是一个逻辑时间点，这个视图是逻辑不一致的")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-全局加锁的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-全局加锁的方法"}},[_._v("#")]),_._v(" 1.3 全局加锁的方法")]),_._v(" "),t("p",[_._v("说到视图你肯定想起来了，我们在前面讲事务隔离的时候，其实是有一个方法能够拿到一致性视图的，对吧？是的，就是"),t("strong",[_._v("在可重复读隔离级别下开启一个事务")]),_._v("。")]),_._v(" "),t("p",[_._v("官方自带的逻辑备份工具是 "),t("mark",[_._v("mysqldump")]),_._v("。当 mysqldump 使用参数 "),t("code",[_._v("-single-transaction")]),_._v(" 的时候，导数据之前就会启动一个事务，来确保拿到一致性视图。而由于 MVCC 的支持，这个过程中数据是可以正常更新的。")]),_._v(" "),t("p",[_._v("你一定在疑惑，有了这个功能，为什么还需要 FTWRL 呢？一致性读是好，但前提是引擎要支持这个隔离级别。比如，对于 MyISAM 这种不支持事务的引擎，如果备份过程中有更新，总是只能取到最新的数据，那么就破坏了备份的一致性。这时，我们就需要使用 FTWRL 命令了。")]),_._v(" "),t("p",[_._v("所以，"),t("strong",[_._v("single-transaction 方法只适用于所有的表使用事务引擎的库")]),_._v("。如果有的表使用了不支持事务的引擎，那么备份就只能通过 FTWRL 方法。这往往是 DBA 要求业务开发人员使用 InnoDB 替代 MyISAM 的原因之一。")]),_._v(" "),t("p",[_._v("你也许会问，既然要全库只读，为什么不使用 "),t("strong",[_._v("set global readonly=true")]),_._v(" 的方式呢？"),t("strong",[_._v("确实 readonly 方式也可以让全库进入只读状态，但我还是会建议你用 FTWRL 方式，主要有两个原因：")])]),_._v(" "),t("ul",[t("li",[_._v("一是，在有些系统中，"),t("strong",[_._v("readonly 的值会被用来做其他逻辑，比如用来判断一个库是主库还是备库")]),_._v("。因此，修改 global 变量的方式影响面更大，我不建议你使用。")]),_._v(" "),t("li",[_._v("二是，在"),t("strong",[_._v("异常处理机制上有差异")]),_._v("。如果执行 FTWRL 命令之后"),t("strong",[_._v("由于客户端发生异常断开，那么 MySQL 会自动释放这个全局锁，整个库回到可以正常更新的状态")]),_._v(" 。而将整个库设置为 readonly 之后，"),t("strong",[_._v("如果客户端发生异常，则数据库就会一直保持 readonly 状态，这样会导致整个库长时间处于不可写状态，风险较高。")])])]),_._v(" "),t("p",[_._v("业务的更新不只是增删改数据（DML)，还有可能是加字段等修改表结构的操作（DDL）。不论是哪种方法，一个库被全局锁上以后，你要对里面任何一个表做加字段操作，都是会被锁住的。")]),_._v(" "),t("p",[_._v("但是，即使没有被全局锁住，加字段也不是就能一帆风顺的，因为你还会碰到接下来我们要介绍的表级锁。")]),_._v(" "),t("h3",{attrs:{id:"_1-4-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-小结"}},[_._v("#")]),_._v(" 1.4 小结")]),_._v(" "),t("p",[_._v("全局锁主要用在逻辑备份过程中。"),t("font",{attrs:{color:"blue"}},[_._v("对于全部是 InnoDB 引擎的库，我建议你选择使用–single-transaction 参数，对应用会更友好")]),_._v("。")],1),_._v(" "),t("h2",{attrs:{id:"_2-表级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-表级锁"}},[_._v("#")]),_._v(" 2. 表级锁")]),_._v(" "),t("p",[_._v("MySQL 里面"),t("strong",[_._v("表级别的锁有两种：一种是表锁，一种是元数据锁")]),_._v("（meta data lock，"),t("strong",[_._v("MDL")]),_._v(")。")]),_._v(" "),t("h3",{attrs:{id:"_2-1-lock-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-lock-tables"}},[_._v("#")]),_._v(" 2.1 lock tables")]),_._v(" "),t("p",[t("strong",[_._v("表锁")]),_._v("的语法是 "),t("mark",[_._v("lock tables … read/write")]),_._v("。与 FTWRL 类似，可以用 "),t("strong",[_._v("unlock tables")]),_._v(" 主动释放锁，也可以在客户端断开的时候自动释放。需要注意，lock tables 语法除了会限制别的线程的读写外，也限定了本线程接下来的操作对象。")]),_._v(" "),t("blockquote",[t("p",[_._v("举个例子, 如果在某个线程 A 中执行 lock tables t1 read, t2 write; 这个语句，则其他线程写 t1、读写 t2 的语句都会被阻塞。同时，线程 A 在执行 unlock tables 之前，也只能执行读 t1、读写 t2 的操作。连写 t1 都不允许，自然也不能访问其他表。")])]),_._v(" "),t("p",[_._v("在还没有出现更细粒度的锁的时候，表锁是最常用的处理并发的方式。而"),t("strong",[_._v("对于 InnoDB 这种支持行锁的引擎，一般不使用 lock tables 命令来控制并发")]),_._v("，毕竟锁住整个表的影响面还是太大。")]),_._v(" "),t("h3",{attrs:{id:"_2-2-mdl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mdl"}},[_._v("#")]),_._v(" 2.2 MDL")]),_._v(" "),t("p",[_._v("另一类表级的锁是 "),t("mark",[_._v("MDL")]),_._v("（"),t("strong",[_._v("metadata lock")]),_._v("）。**MDL 不需要显式使用，在访问一个表的时候会被自动加上。**MDL 的作用是，保证读写的正确性。你可以想象一下，如果一个查询正在遍历一个表中的数据，而执行期间另一个线程对这个表结构做变更，删了一列，那么查询线程拿到的结果跟表结构对不上，肯定是不行的。")]),_._v(" "),t("p",[_._v("因此，在 MySQL 5.5 版本中引入了 MDL，"),t("strong",[_._v("当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁")]),_._v("。")]),_._v(" "),t("ul",[t("li",[_._v("读锁之间不互斥，因此你可以有多个线程同时对一张表增删改查。")]),_._v(" "),t("li",[_._v("读写锁之间、写锁之间是互斥的，用来保证变更表结构操作的安全性。因此，"),t("strong",[_._v("如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行")]),_._v("。")])]),_._v(" "),t("p",[_._v("因此说，"),t("strong",[_._v("MDL 的作用是防止 DDL 和 DML 并发的冲突")]),_._v("。")]),_._v(" "),t("p",[_._v("虽然 MDL 锁是系统默认会加的，但却是你不能忽略的一个机制。比如下面这个例子，我经常看到有人掉到这个坑里：给一个小表加个字段，导致整个库挂了。")]),_._v(" "),t("p",[_._v("你肯定知道，给一个表加字段，或者修改字段，或者加索引，需要扫描全表的数据。在对大表操作的时候，你肯定会特别小心，以免对线上服务造成影响。而实际上，即使是小表，操作不慎也会出问题。我们来看一下下面的操作序列，假设表 t 是一个小表：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230119164850442.png",alt:"image-20230119164850442"}})]),_._v(" "),t("ol",[t("li",[_._v("我们可以看到 session A 先启动，这时候会对表 t 加一个 MDL 读锁。由于 session B 需要的也是 MDL 读锁，因此可以正常执行。")]),_._v(" "),t("li",[_._v("之后 session C 会被 blocked，是因为 session A 的 MDL 读锁还没有释放，而 session C 需要 MDL 写锁，因此只能被阻塞。")]),_._v(" "),t("li",[_._v("如果只有 session C 自己被阻塞还没什么关系，但是之后所有要在表 t 上新申请 MDL 读锁的请求也会被 session C 阻塞。前面我们说了，所有对表的增删改查操作都需要先申请 MDL 读锁，就都被锁住，等于这个表现在完全不可读写了（因为 session A 和 session B 可能是长事务）。如果某个表上的查询语句频繁，而且客户端有重试机制，也就是说超时后会再起一个新 session 再请求的话，"),t("strong",[_._v("这个库的线程很快就会爆满")]),_._v("。")])]),_._v(" "),t("blockquote",[t("p",[_._v("session C 拿不到 MDL 写锁而被 block，之后 session D 也会被 block 而不是先执行，这样的设计初衷也许是防止 session C 饿死。")])]),_._v(" "),t("p",[_._v("你现在应该知道了，事务中的 MDL 锁，在语句执行开始时申请，但是语句结束后并不会马上释放，而会等到整个事务提交后再释放。基于上面的分析，我们来讨论一个问题，"),t("strong",[_._v("如何安全地给小表加字段")]),_._v("❓")]),_._v(" "),t("p",[t("strong",[_._v("首先我们要解决长事务，事务不提交，就会一直占着 MDL 锁")]),_._v("。在 MySQL 的 information_schema 库的 innodb_trx 表中，你可以查到当前执行中的事务。如果你要做 DDL 变更的表刚好有长事务在执行，要考虑先暂停 DDL，或者 "),t("code",[_._v("kill 掉这个长事务")]),_._v("。")]),_._v(" "),t("p",[_._v("但考虑一下这个场景。如果你"),t("strong",[_._v("要变更的表是一个热点表")]),_._v("，虽然数据量不大，但是上面的请求很频繁，而你不得不加个字段，你该怎么做呢？")]),_._v(" "),t("p",[_._v("这时候 kill 可能未必管用，因为新的请求马上就来了。"),t("font",{attrs:{color:"blue"}},[_._v("比较理想的机制是，在 alter table 语句里面设定等待时间，如果在这个指定的等待时间里面能够拿到 MDL 写锁最好，拿不到也不要阻塞后面的业务语句，先放弃")]),_._v("。之后开发人员或者 DBA 再通过重试命令重复这个过程。")],1),_._v(" "),t("p",[_._v("MariaDB 已经合并了 AliSQL 的这个功能，所以这两个开源分支目前都支持 DDL NOWAIT/WAIT n 这个语法。")]),_._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("ALTER")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("TABLE")]),_._v(" tbl_name NOWAIT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("add")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("column")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("ALTER")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("TABLE")]),_._v(" tbl_name WAIT N "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("add")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("column")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-行锁"}},[_._v("#")]),_._v(" 3. 行锁")]),_._v(" "),t("p",[_._v("MySQL 的行锁是在引擎层由各个引擎自己实现的。但"),t("strong",[_._v("并不是所有的引擎都支持行锁")]),_._v("，比如 MyISAM 引擎就不支持行锁。不支持行锁意味着并发控制只能使用表锁，对于这种引擎的表，同一张表上任何时刻只能有一个更新在执行，这就会影响到业务并发度。"),t("strong",[_._v("InnoDB 是支持行锁的，这也是 MyISAM 被 InnoDB 替代的重要原因之一")]),_._v("。这里主要聊聊 InnoDB 的行锁，以及如何通过减少锁冲突来提升业务并发度。")]),_._v(" "),t("p",[t("mark",[_._v("行锁")]),_._v("就是针对数据表中行记录的锁。这很好理解，比如事务 A 更新了一行，而这时候事务 B 也要更新同一行，则必须等事务 A 的操作完成后才能进行更新。当然，数据库中还有一些没那么一目了然的概念和设计，这些概念如果理解和使用不当，容易导致程序出现非预期行为，比如两阶段锁。")]),_._v(" "),t("h3",{attrs:{id:"_3-1-从两阶段锁说起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-从两阶段锁说起"}},[_._v("#")]),_._v(" 3.1 从两阶段锁说起")]),_._v(" "),t("p",[_._v("我先给你举个例子。在下面的操作序列中，事务 B 的 update 语句执行时会是什么现象呢？假设字段 id 是表 t 的主键：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230119175158395.png",alt:"image-20230119175158395"}})]),_._v(" "),t("p",[_._v("这个问题的结论取决于事务 A 在执行完两条 update 语句后，持有哪些锁，以及在什么时候释放。你可以验证一下：实际上事务 B 的 update 语句会被阻塞，直到事务 A 执行 commit 之后，事务 B 才能继续执行。")]),_._v(" "),t("p",[_._v("知道了这个答案，你一定知道了事务 A 持有的两个记录的行锁，都是在 commit 的时候才释放的。也就是说，"),t("font",{attrs:{color:"blue"}},[_._v("在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放")]),_._v("。这个就是"),t("strong",[_._v("两阶段锁协议")]),_._v("。")],1),_._v(" "),t("p",[_._v("知道了这个设定，对我们使用事务有什么帮助呢？那就是，"),t("font",{attrs:{color:"red"}},[_._v("如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放")]),_._v("。我给你举个例子。")],1),_._v(" "),t("p",[_._v("假设你负责实现一个电影票在线交易业务，顾客 A 要在影院 B 购买电影票。我们简化一点，这个业务需要涉及到以下操作：")]),_._v(" "),t("ol",[t("li",[_._v("从顾客 A 账户余额中扣除电影票价；")]),_._v(" "),t("li",[_._v("给影院 B 的账户余额增加这张电影票价；")]),_._v(" "),t("li",[_._v("记录一条交易日志。")])]),_._v(" "),t("p",[_._v("也就是说，要完成这个交易，我们需要 update 两条记录，并 insert 一条记录。当然，为了保证交易的原子性，我们要把这三个操作放在一个事务中。那么，"),t("strong",[_._v("你会怎样安排这三个语句在事务中的顺序呢    (之前只考虑到了原子性  但语句的顺序之前一直都没有咋考虑到)")]),_._v("？")]),_._v(" "),t("p",[_._v("试想如果同时有另外一个顾客 C 要在影院 B 买票，那么这两个事务冲突的部分就是语句 2 了。因为它们要更新同一个影院账户的余额，需要修改同一行数据。")]),_._v(" "),t("p",[_._v("根据两阶段锁协议，不论你怎样安排语句顺序，所有的操作需要的行锁都是在事务提交的时候才释放的。所以，如果你把语句 2 安排在最后，比如按照 "),t("code",[_._v("3、1、2")]),_._v("这样的顺序，那么影院账户余额这一行的锁时间就最少。"),t("strong",[_._v("这就最大程度地减少了事务之间的锁等待，提升了并发度")]),_._v("。")]),_._v(" "),t("p",[_._v("好了，现在由于你的正确设计，影院余额这一行的行锁在一个事务中不会停留很长时间。但是，这并没有完全解决你的困扰。如果这个影院做活动，可以低价预售一年内所有的电影票，而且这个活动只做一天。于是在活动时间开始的时候，你的 MySQL 就挂了。你登上服务器一看，CPU 消耗接近 100%，但整个数据库每秒就执行不到 100 个事务。这是什么原因呢？")]),_._v(" "),t("p",[_._v("这里，就要说到"),t("strong",[_._v("死锁和死锁检测了。")])]),_._v(" "),t("h3",{attrs:{id:"_3-2-死锁和死锁检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-死锁和死锁检测"}},[_._v("#")]),_._v(" 3.2 死锁和死锁检测")]),_._v(" "),t("p",[_._v("当并发系统中不同线程出现循环资源依赖，涉及的线程都在等待别的线程释放资源时，就会导致这几个线程都进入无限等待的状态，称为"),t("mark",[_._v("死锁")]),_._v("。这里我用数据库中的行锁举个例子：")]),_._v(" "),t("center",[t("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://notebook-img-1304596351.cos.ap-beijing.myqcloud.com/img/image-20230119175923006.png",alt:"image-20230119175923006"}})]),_._v(" "),t("p",[_._v("这时候，事务 A 在等待事务 B 释放 id=2 的行锁，而事务 B 在等待事务 A 释放 id=1 的行锁。 事务 A 和事务 B 在互相等待对方的资源释放，就是进入了死锁状态。"),t("strong",[_._v("当出现死锁以后，有两种策略")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("一种策略是，直接进入等待，直到"),t("code",[_._v("超时")]),_._v("。这个超时时间可以通过参数 "),t("strong",[_._v("innodb_lock_wait_timeout")]),_._v(" 来设置。")]),_._v(" "),t("li",[_._v("另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 "),t("strong",[_._v("innodb_deadlock_detect")]),_._v(" 设置为 on，表示开启这个逻辑。")])]),_._v(" "),t("p",[_._v("在 InnoDB 中，innodb_lock_wait_timeout 的默认值是 50s，意味着如果采用第一个策略，当出现死锁以后，第一个被锁住的线程要过 50s 才会超时退出，然后其他线程才有可能继续执行。对于在线服务来说，"),t("strong",[_._v("这个等待时间往往是无法接受的")]),_._v("。")]),_._v(" "),t("p",[_._v("但是，我们又不可能直接把这个时间设置成一个很小的值，比如 1s。这样当出现死锁的时候，确实很快就可以解开，但如果不是死锁，而是简单的锁等待呢？所以，"),t("strong",[_._v("超时时间设置太短的话，会出现很多误伤")]),_._v("。")]),_._v(" "),t("p",[_._v("所以，"),t("strong",[_._v("正常情况下我们还是要采用第二种策略，即：主动死锁检测")]),_._v("，而且 innodb_deadlock_detect 的默认值本身就是 on。主动死锁检测在发生死锁的时候，是能够快速发现并进行处理的，"),t("strong",[_._v("但是它也是有额外负担的")]),_._v("。")]),_._v(" "),t("p",[_._v("你可以想象一下这个过程：每当一个事务被锁的时候，就要看看它所依赖的线程有没有被别人锁住，如此循环，最后判断是否出现了循环等待，也就是死锁。那如果是我们上面说到的所有事务都要更新同一行的场景呢？每个新来的被堵住的线程，都要判断会不会由于自己的加入导致了死锁，这是一个时间复杂度是 "),t("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[t("mjx-math",{staticClass:"MJX-TEX"},[t("mjx-mi",{staticClass:"mjx-i"},[t("mjx-c",{attrs:{c:"O"}})],1),t("mjx-mo",{staticClass:"mjx-n"},[t("mjx-c",{attrs:{c:"("}})],1),t("mjx-msup",[t("mjx-mi",{staticClass:"mjx-i"},[t("mjx-c",{attrs:{c:"n"}})],1),t("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[t("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[t("mjx-c",{attrs:{c:"2"}})],1)],1)],1),t("mjx-mo",{staticClass:"mjx-n"},[t("mjx-c",{attrs:{c:")"}})],1)],1)],1),_._v(" 的操作。假设有 1000 个并发线程要同时更新同一行，那么死锁检测操作就是 100 万这个量级的。"),t("strong",[_._v("虽然最终检测的结果是没有死锁，但是这期间要消耗大量的 CPU 资源")]),_._v("。因此，你就会看到 CPU 利用率很高，但是每秒却执行不了几个事务。")],1),_._v(" "),t("p",[_._v("根据上面的分析，我们来讨论一下，"),t("strong",[_._v("怎么解决由这种热点行更新导致的性能问题呢")]),_._v("❓ 问题的症结在于，死锁检测要耗费大量的 CPU 资源：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("一种头痛医头的方法，就是"),t("font",{attrs:{color:"blue"}},[_._v("如果你能确保这个业务一定不会出现死锁，可以临时把死锁检测关掉")]),_._v("。但是这种操作本身带有一定的风险，因为业务设计的时候一般不会把死锁当做一个严重错误，毕竟出现死锁了，就回滚，然后通过业务重试一般就没问题了，这是业务无损的。而关掉死锁检测意味着可能会出现大量的超时，这是业务有损的。")],1)]),_._v(" "),t("li",[t("p",[t("font",{attrs:{color:"blue"}},[_._v("另一个思路是控制并发度")]),_._v("。根据上面的分析，你会发现如果并发能够控制住，比如同一行同时最多只有 10 个线程在更新，那么死锁检测的成本很低，就不会出现这个问题。一个直接的想法就是，在客户端做并发控制。但是，你会很快发现这个方法不太可行，因为客户端很多。我见过一个应用，有 600 个客户端，这样即使每个客户端控制到只有 5 个并发线程，汇总到数据库服务端以后，峰值并发数也可能要达到 3000。")],1)])]),_._v(" "),t("p",[_._v("因此，这个并发控制要做在数据库服务端。**如果你有中间件，可以考虑在中间件实现；如果你的团队有能修改 MySQL 源码的人，也可以做在 MySQL 里面。**基本思路就是，对于相同行的更新，"),t("strong",[_._v("在进入引擎之前排队")]),_._v("。这样在 InnoDB 内部就不会有大量的死锁检测工作了。")]),_._v(" "),t("p",[_._v("可能你会问，"),t("strong",[_._v("如果团队里暂时没有数据库方面的专家，不能实现这样的方案，能不能从设计上优化这个问题呢")]),_._v(" ❓")]),_._v(" "),t("ul",[t("li",[_._v("你可以考虑"),t("font",{attrs:{color:"blue"}},[_._v("通过将一行改成逻辑上的多行来减少锁冲突")]),_._v("。还是以影院账户为例，可以考虑放在多条记录上，比如 10 个记录，影院的账户总额等于这 10 个记录的值的总和。这样每次要给影院账户加金额的时候，随机选其中一条记录来加。这样每次冲突概率变成原来的 1/10，可以减少锁等待个数，也就减少了死锁检测的 CPU 消耗。")],1)]),_._v(" "),t("p",[_._v("这个方案看上去是无损的，但其实这类方案需要根据业务逻辑做详细设计。如果账户余额可能会减少，比如退票逻辑，那么这时候就需要考虑当一部分行记录变成 0 的时候，代码要有特殊处理。")]),_._v(" "),t("h3",{attrs:{id:"_3-3-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-小结"}},[_._v("#")]),_._v(" 3.3 小结")]),_._v(" "),t("p",[_._v("这一大节介绍了 MySQL 的行锁，并主要涉及了两阶段锁协议、死锁和死锁检测这两大部分内容。")]),_._v(" "),t("ul",[t("li",[_._v("以两阶段协议为起点，一起讨论了在开发的时候如何安排正确的事务语句。这里的原则 / 我给你的建议是："),t("strong",[_._v("如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁的申请时机尽量往后放    减少等待时间")]),_._v("。")]),_._v(" "),t("li",[_._v("但是，调整语句顺序并不能完全避免死锁。所以我们引入了死锁和死锁检测的概念，以及提供了三个方案，来减少死锁对数据库的影响。"),t("strong",[_._v("减少死锁的主要方向，就是控制访问相同资源的并发事务量")]),_._v("。")])]),_._v(" "),t("h2",{attrs:{id:"qa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[_._v("#")]),_._v(" QA")]),_._v(" "),t("p",[t("strong",[_._v("Q")]),_._v("：如果你要删除一个表里面的前 10000 行数据，有以下三种方法可以做到：")]),_._v(" "),t("ul",[t("li",[_._v("第一种，直接执行 delete from T limit 10000;")]),_._v(" "),t("li",[_._v("第二种，在一个连接中循环执行 20 次 delete from T limit 500;")]),_._v(" "),t("li",[_._v("第三种，在 20 个连接中同时执行 delete from T limit 500。")])]),_._v(" "),t("p",[_._v("你会选择哪一种方法呢？为什么呢？")]),_._v(" "),t("p",[t("strong",[_._v("A")]),_._v("：第二种方式是相对较好的。")]),_._v(" "),t("ul",[t("li",[_._v("第一种方式（即：直接执行 delete from T limit 10000）里面，"),t("strong",[_._v("单个语句占用时间长，锁的时间也比较长")]),_._v("；而且大事务还会导致主从延迟。")]),_._v(" "),t("li",[_._v("第三种方式（即：在 20 个连接中同时执行 delete from T limit 500），"),t("strong",[_._v("会人为造成锁冲突。")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);