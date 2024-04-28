(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{478:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化"}},[s._v("#")]),s._v(" redis持久化")]),s._v(" "),a("p",[s._v("Redis有两种持久化方案：")]),s._v(" "),a("ul",[a("li",[s._v("RDB持久化")]),s._v(" "),a("li",[s._v("AOF持久化")])]),s._v(" "),a("h2",{attrs:{id:"_1-1-rdb持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rdb持久化"}},[s._v("#")]),s._v(" 1.1.RDB持久化")]),s._v(" "),a("p",[a("strong",[s._v("RDB全称Redis Database Backup file（Redis数据备份文件）")]),s._v("，也被叫做"),a("strong",[s._v("Redis数据快照")]),s._v("。简单来说就是把内存中的所有数据都记录到磁盘中。当Redis实例故障重启后，"),a("strong",[s._v("从磁盘读取快照文件，恢复数据。快照文件称为RDB文件，默认是保存在当前运行目录。")])]),s._v(" "),a("h3",{attrs:{id:"_1-1-1-执行时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-执行时机"}},[s._v("#")]),s._v(" 1.1.1.执行时机")]),s._v(" "),a("p",[s._v("RDB持久化在四种情况下会执行：")]),s._v(" "),a("ul",[a("li",[s._v("执行save命令")]),s._v(" "),a("li",[s._v("执行bgsave命令")]),s._v(" "),a("li",[s._v("Redis停机时")]),s._v(" "),a("li",[s._v("触发RDB条件时")])]),s._v(" "),a("p",[a("strong",[s._v("1）save命令")])]),s._v(" "),a("p",[s._v("执行下面的命令，可以立即执行一次RDB：")]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis80.png"}}),s._v(" "),a("p",[s._v("save命令会导致主进程执行RDB，这个过程中其它"),a("strong",[s._v("所有命令都会被阻塞。只有在数据迁移时可能用到。")])]),s._v(" "),a("p",[a("strong",[s._v("2）bgsave命令")])]),s._v(" "),a("p",[s._v("下面的命令可以异步执行RDB：")]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis81.png"}}),s._v(" "),a("p",[s._v("这个命令执行后会"),a("strong",[s._v("开启独立进程完成RDB，主进程可以持续处理用户请求，不受影响。")])]),s._v(" "),a("p",[a("strong",[s._v("3）停机时")])]),s._v(" "),a("p",[s._v("Redis停机时会执行一次save命令，实现RDB持久化。")]),s._v(" "),a("p",[a("strong",[s._v("4）触发RDB条件")])]),s._v(" "),a("p",[s._v("Redis内部有触发RDB的机制，可以在redis.conf文件中找到，格式如下：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 900秒内，如果至少有1个key被修改，则执行bgsave ， 如果是save "" 则表示禁用RDB')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("save")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("900 1  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 300s内  有10个key被修改则执行save或者bgsave一次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("save")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("300 10     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("save")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("60 10000 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("RDB的其它配置也可以在redis.conf文件中设置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否压缩 ,建议不开启，压缩也会消耗cpu，磁盘的话不值钱")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("rdbcompression")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RDB文件名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dbfilename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("dump.rdb  ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件保存的路径目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("./ ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_1-1-2-rdb原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-rdb原理"}},[s._v("#")]),s._v(" 1.1.2.RDB原理")]),s._v(" "),a("p",[s._v("**bgsave开始时会fork主进程得到子进程，子进程共享主进程的内存数据。**完成fork后读取内存数据并写入 RDB 文件。")]),s._v(" "),a("p",[s._v("fork采用的是copy-on-write技术：")]),s._v(" "),a("ul",[a("li",[s._v("当主进程执行读操作时，访问共享内存；")]),s._v(" "),a("li",[s._v("当主进程执行写操作时，"),a("strong",[s._v("则会拷贝一份数据")]),s._v("，执行写操作。")])]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis82.png"}}),s._v(" "),a("h3",{attrs:{id:"_1-1-3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-小结"}},[s._v("#")]),s._v(" 1.1.3.小结")]),s._v(" "),a("p",[s._v("RDB方式bgsave的基本流程？")]),s._v(" "),a("ul",[a("li",[s._v("fork主进程得到一个子进程，共享内存空间")]),s._v(" "),a("li",[s._v("子进程读取内存数据并写入新的RDB文件")]),s._v(" "),a("li",[s._v("用新RDB文件替换旧的RDB文件")])]),s._v(" "),a("p",[s._v("RDB会在什么时候执行？save 60 1000代表什么含义？")]),s._v(" "),a("ul",[a("li",[s._v("默认是服务停止时")]),s._v(" "),a("li",[s._v("代表60秒内至少执行1000次修改则触发RDB")])]),s._v(" "),a("p",[s._v("RDB的缺点？")]),s._v(" "),a("ul",[a("li",[s._v("RDB执行间隔时间长，两次RDB之间写入数据有丢失的风险")]),s._v(" "),a("li",[s._v("fork子进程、压缩、写出RDB文件都比较耗时")])]),s._v(" "),a("h2",{attrs:{id:"_1-2-aof持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-aof持久化"}},[s._v("#")]),s._v(" 1.2.AOF持久化")]),s._v(" "),a("h3",{attrs:{id:"_1-2-1-aof原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-aof原理"}},[s._v("#")]),s._v(" 1.2.1.AOF原理")]),s._v(" "),a("p",[a("strong",[s._v("AOF全称为Append Only File（追加文件")]),s._v("）。Redis处理的每一个写命令都会记录在AOF文件，可以看做是命令日志文件。")]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis83.png"}}),s._v(" "),a("h3",{attrs:{id:"_1-2-2-aof配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-aof配置"}},[s._v("#")]),s._v(" 1.2.2.AOF配置")]),s._v(" "),a("p",[s._v("**AOF默认是关闭的，**需要修改redis.conf配置文件来开启AOF：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启AOF功能，默认是no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("appendonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# AOF文件的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("appendfilename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"appendonly.aof"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("AOF的命令记录的频率")]),s._v("也可以通过redis.conf文件来配：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示每执行一次写命令，立即记录到AOF文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("appendfsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("always ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写命令执行完先放入AOF缓冲区，然后表示每隔1秒将缓冲区数据写到AOF文件，是默认方案")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("appendfsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("everysec ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写命令执行完先放入AOF缓冲区，由操作系统决定何时将缓冲区内容写回磁盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("appendfsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("三种策略对比：")]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis84.png"}}),s._v(" "),a("h3",{attrs:{id:"_1-2-3-aof文件重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-aof文件重写"}},[s._v("#")]),s._v(" 1.2.3.AOF文件重写")]),s._v(" "),a("p",[a("strong",[s._v("因为是记录命令，AOF文件会比RDB文件大的多。而且AOF会记录对同一个key的多次写操作，但只有最后一次写操作才有意义。"),a("strong",[s._v("通过执行")]),s._v("bgrewriteaof命令，可以让AOF文件执行重写功能，用最少的命令达到相同效果。")])]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis85.png"}}),s._v(" "),a("p",[s._v("如图，AOF原本有三个命令，但是"),a("code",[s._v("set num 123 和 set num 666")]),s._v("都是对num的操作，第二次会覆盖第一次的值，因此第一个命令记录下来没有意义。")]),s._v(" "),a("p",[s._v("所以重写命令后，AOF文件内容就是："),a("code",[s._v("mset name jack num 666")])]),s._v(" "),a("p",[a("strong",[s._v("Redis也会在触发阈值时自动去重写AOF文件")]),s._v("。阈值也可以在redis.conf中配置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# AOF文件比上次文件 增长超过多少百分比则触发重写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("auto-aof-rewrite-percentage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# AOF文件体积最小多大以上才触发重写 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("auto-aof-rewrite-min-size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("64mb ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_1-3-rdb与aof对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-rdb与aof对比"}},[s._v("#")]),s._v(" 1.3.RDB与AOF对比")]),s._v(" "),a("p",[s._v("RDB和AOF各有自己的优缺点，如果对数据安全性要求较高，在实际开发中往往会"),a("strong",[s._v("结合")]),s._v("两者来使用。")]),s._v(" "),a("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis86.png"}}),s._v(" "),a("h2",{attrs:{id:"每篇文章一个提小问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每篇文章一个提小问题"}},[s._v("#")]),s._v(" 每篇文章一个提小问题")]),s._v(" "),a("p",[a("strong",[s._v("Redis为什么快？")])]),s._v(" "),a("ol",[a("li",[s._v("完全基于内存，绝大部分请求是纯粹的内存操作，非常快速。数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)。")]),s._v(" "),a("li",[s._v("采用单线程，避免了不必要的上下文切换和竞争条件，也不存在多进程或者多线程导致的切换而消耗CPU，不用去考虑各种锁问题，不存在加锁释放锁操作，没有因为可能出现死锁而导致的性能消耗。")]),s._v(" "),a("li",[s._v("使用多路I/O复用模型，非阻塞I/O。")]),s._v(" "),a("li",[s._v("使用底层模型不同，他们之间底层实现方式以及与客户端之间通信的应用协议不一样，Redis直接自己构建了VM机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求")])]),s._v(" "),a("p",[a("strong",[s._v("如何解决Redis的并发竞争Key问题？")])]),s._v(" "),a("p",[s._v("答： 所谓的Redis的并发竞争Key的问题，其实就是多个系统同时对一个Key进行操作。但是，执行后的顺序和我们期望的顺序可能会不一样，这也导致了结果的不同")]),s._v(" "),a("p",[s._v("我使用过的方案：分布式锁（zookeeper 和 Redis 都可以实现分布式锁）。")]),s._v(" "),a("p",[s._v("这里提醒一下！！！（如果不存在Redis的并发竞争Key问题，不要使用分布式锁，这样会影响性能）")]),s._v(" "),a("p",[s._v("基于zookeeper"),a("strong",[s._v("临时有序节点")]),s._v("可以实现的分布式锁。")]),s._v(" "),a("p",[s._v("大致思路：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。然后判断一下是否获取锁，判断获取锁也很简单，只需要判断有序节点中序号小的那一个。当释放锁时，只需将这个瞬时节点删除即可。同时也能避免服务宕机导致的锁无法释放，而产生的死锁问题。业务流程走完之后，删除对应的子节点释放锁")]),s._v(" "),a("p",[s._v("(这里就写的很一般了那个人   啧啧啧)")]),s._v(" "),a("p",[a("strong",[s._v("redis内存淘汰策略")])]),s._v(" "),a("p",[s._v("随机")]),s._v(" "),a("p",[s._v("较少用的")]),s._v(" "),a("p",[s._v("移除更早过期的")])])}),[],!1,null,null,null);a.default=r.exports}}]);