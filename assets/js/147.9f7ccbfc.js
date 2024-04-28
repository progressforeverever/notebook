(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{477:function(s,t,v){"use strict";v.r(t);var _=v(4),n=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis实战总结04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis实战总结04"}},[s._v("#")]),s._v(" redis实战总结04")]),s._v(" "),t("p",[s._v("上文我们提到了在秒杀中，在redis中校权，然后将订单信息存到消息队列中，然后慢慢的改变数据库。")]),s._v(" "),t("p",[s._v("因此，我i们这里就来看一下redis的消息队列。")]),s._v(" "),t("p",[s._v("什么是消息队列：字面意思就是存放消息的队列。最简单的消息队列模型包括3个角色：")]),s._v(" "),t("ul",[t("li",[s._v("消息队列：存储和管理消息，也被称为消息代理（Message Broker）")]),s._v(" "),t("li",[s._v("生产者：发送消息到消息队列")]),s._v(" "),t("li",[s._v("消费者：从消息队列获取消息并处理消息")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis56.png"}}),s._v(" "),t("p",[s._v("使用队列的好处在于 "),t("strong",[s._v("解耦")])]),s._v(" "),t("p",[s._v("一般的消息队列可以用rabbitmq,kafaka，")]),s._v(" "),t("p",[s._v("redis自身也有消息队列。")]),s._v(" "),t("p",[s._v("Redis提供了三种不同的方式来实现消息队列：")]),s._v(" "),t("ul",[t("li",[s._v("list结构：基于List结构模拟消息队列")]),s._v(" "),t("li",[s._v("PubSub：基本的点对点消息模型   （发布订阅模式  publish subscribe）")]),s._v(" "),t("li",[s._v("Stream：比较完善的消息队列模型,也是一种消息")])]),s._v(" "),t("h2",{attrs:{id:"list消息队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list消息队列"}},[s._v("#")]),s._v(" List消息队列")]),s._v(" "),t("p",[s._v("Redis的list数据结构是一个双向链表，很容易模拟出队列效果。")]),s._v(" "),t("p",[s._v("队列是入口和出口不在一边，因此我们可以利用：LPUSH 结合 RPOP、或者 RPUSH 结合 LPOP来实现。\n不过要注意的是，当队列中没有消息时RPOP或LPOP操作会返回null，并不像JVM的阻塞队列那样会阻塞并等待消息。因此这里应该使用BRPOP或者BLPOP来实现阻塞效果。")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis57.png"}}),s._v(" "),t("p",[s._v("基于List的消息队列有哪些优缺点？\n优点：")]),s._v(" "),t("ul",[t("li",[s._v("利用Redis存储，不受限于JVM内存上限")]),s._v(" "),t("li",[s._v("基于Redis的持久化机制，数据安全性有保证")]),s._v(" "),t("li",[s._v("可以满足消息有序性")])]),s._v(" "),t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("无法避免消息丢失    （拿到消息，但这个时候突然出异常了，消息就丢了）")])]),s._v(" "),t("li",[t("strong",[s._v("只支持单消费者        （一个人读取了消息，消息就被移除了，无法做到共享）")])])]),s._v(" "),t("h2",{attrs:{id:"pubsub模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pubsub模式"}},[s._v("#")]),s._v(" PubSub模式")]),s._v(" "),t("p",[s._v("PubSub（发布订阅）是Redis2.0版本引入的消息传递模型。顾名思义，消费者可以订阅一个或多个channel，生产者向对应channel发送消息后，所有订阅者都能收到相关消息。")]),s._v(" "),t("p",[s._v("SUBSCRIBE channel [channel] ：订阅一个或多个频道\nPUBLISH channel msg ：向一个频道发送消息\nPSUBSCRIBE pattern[pattern] ：订阅与pattern格式匹配的所有频道")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis58.png"}}),s._v(" "),t("p",[t("strong",[s._v("本质上是个命令，并不是个数据结构。")])]),s._v(" "),t("p",[s._v("基于PubSub的消息队列有哪些优缺点？\n优点：")]),s._v(" "),t("ul",[t("li",[s._v("采用发布订阅模型，支持多生产、多消费")])]),s._v(" "),t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[s._v("不支持数据持久化")]),s._v(" "),t("li",[s._v("无法避免消息丢失    "),t("strong",[s._v("（之前的List本质上是个数据类型，本身就可以用来存东西。他这消息存的是在消费者的缓存区，而且这种订阅一关了就消息就无了）")])]),s._v(" "),t("li",[s._v("消息堆积有上限，超出时数据丢失")])]),s._v(" "),t("h2",{attrs:{id:"stream消息队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream消息队列"}},[s._v("#")]),s._v(" Stream消息队列")]),s._v(" "),t("p",[s._v("Stream 是 Redis 5.0 引入的一种新数据类型，可以实现一个功能非常完善的消息队列。")]),s._v(" "),t("p",[s._v("发送消息的命令：")]),s._v(" "),t("p",[t("strong",[s._v("用中括号括起来的可以不填")])]),s._v(" "),t("p",[t("strong",[s._v("消息id   * 自动生成  时间戳-递增数字    也是id的一种设计方式")])]),s._v(" "),t("p",[s._v("!"),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis59.png"}})]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis60.png"}}),s._v(" "),t("p",[s._v("读取消息的方式之一：XREAD")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis61.png"}}),s._v(" "),t("p",[s._v("起始id，只返回大于该ID的消息")]),s._v(" "),t("ul",[t("li",[s._v("0：代表从第一个消息开始")]),s._v(" "),t("li",[s._v("$:代表从最新的消息开始")]),s._v(" "),t("li",[s._v("关于读哪个消息队列的问题，key指定消息队列，可以读多个队列")])]),s._v(" "),t("p",[s._v("例如，使用XREAD读取第一个消息：")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis62.png"}}),s._v(" "),t("p",[s._v("XREAD阻塞方式，读取最新的消息：")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis63.png"}}),s._v(" "),t("p",[s._v("在业务开发中，"),t("strong",[s._v("我们可以循环的调用XREAD阻塞方式来查询最新消息，从而实现持续监听队列的效果")]),s._v("，伪代码如下")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis64.png"}}),s._v(" "),t("p",[s._v("注意：当我们"),t("strong",[s._v("指定起始ID为$时")]),s._v("，代表读取最新的消息，如果我们处理一条消息的过程中，"),t("strong",[s._v("又有超过1条以上的消息到达队列")]),s._v("，则下次获取时也只能获取到最新的一条，会出现"),t("strong",[s._v("漏读消息的问题")])]),s._v(" "),t("p",[s._v("STREAM类型消息队列的XREAD命令特点：")]),s._v(" "),t("ul",[t("li",[s._v("消息可回溯")]),s._v(" "),t("li",[s._v("一个消息可以被多个消费者读取")]),s._v(" "),t("li",[s._v("可以阻塞读取")]),s._v(" "),t("li",[s._v("有消息漏读的风险")])]),s._v(" "),t("h3",{attrs:{id:"消费者组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者组"}},[s._v("#")]),s._v(" 消费者组")]),s._v(" "),t("p",[s._v("解决消息漏读的问题，同时对消费者进行了分组")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis55.png"}}),s._v(" "),t("p",[t("strong",[s._v("消息确认")]),s._v("，确认消息被处理，也就是消费者给个信号，已经读到了。")]),s._v(" "),t("p",[t("strong",[s._v("所以后面要有个意识，每读一个消息，就要确认一下。")])]),s._v(" "),t("p",[s._v("创建消费者组：\n"),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis65.png"}}),s._v("\nkey：队列名称\ngroupName：消费者组名称\nID：起始ID标示，$代表队列中最后一个消息，0则代表队列中第一个消息\nMKSTREAM：队列不存在时自动创建队列\n其它常见命令：")]),s._v(" "),t("p",[t("strong",[s._v("删除指定的消费者组")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("XGROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DESTORY")]),s._v(" key groupName\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("给指定的消费者组添加消费者")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("XGROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATECONSUMER")]),s._v(" key groupname consumername\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("删除消费者组中的指定消费者")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("XGROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELCONSUMER")]),s._v(" key groupname consumername\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("从消费者组读取消息：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("XREADGROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GROUP")]),s._v(" group consumer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COUNT")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BLOCK")]),s._v(" milliseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOACK")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STREAMS")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("group：消费组名称")]),s._v(" "),t("li",[s._v("consumer：消费者名称，如果消费者不存在，会自动创建一个消费者")]),s._v(" "),t("li",[s._v("count：本次查询的最大数量")]),s._v(" "),t("li",[s._v("BLOCK milliseconds：当没有消息时最长等待时间")]),s._v(" "),t("li",[s._v("NOACK：无需手动ACK，获取到消息后自动确认    "),t("strong",[s._v("（读一条消息就确认一条消息  假如不想手动确认  这个noack得声明出来）")])]),s._v(" "),t("li",[s._v("STREAMS key：指定队列名称")]),s._v(" "),t("li",[s._v("ID：获取消息的起始ID：")])]),s._v(" "),t("p",[s._v('">"：从下一个未消费的消息开始\n其它：根据指定id从pending-list中获取已消费但未确认的消息，例如0，是从pending-list中的第一个消息开始')]),s._v(" "),t("p",[s._v("消费者监听消息的基本思路：")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis66.png"}}),s._v(" "),t("p",[s._v("STREAM类型消息队列的XREADGROUP命令特点：")]),s._v(" "),t("ul",[t("li",[s._v("消息可回溯")]),s._v(" "),t("li",[t("strong",[s._v("可以多消费者争抢消息，加快消费速度")])]),s._v(" "),t("li",[s._v("可以阻塞读取")]),s._v(" "),t("li",[s._v("没有消息漏读的风险")]),s._v(" "),t("li",[s._v("**有消息确认机制，保证消息至少被消费一次 **   "),t("strong",[s._v("（读完之后要进行 消息确认，不然还放在pending-list中  既然有这个，那就肯定有对pending-list的读取）")])])]),s._v(" "),t("p",[s._v("最后我们来个小对比")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis67.png"}}),s._v(" "),t("h2",{attrs:{id:"其他剩余的小东西"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他剩余的小东西"}},[s._v("#")]),s._v(" 其他剩余的小东西")]),s._v(" "),t("ul",[t("li",[s._v("点赞功能   一个用户只能点一次赞    利用Redis的"),t("strong",[s._v("set集合判断是否点赞过")])]),s._v(" "),t("li",[s._v("好友共同关注   set集合，在set集合中，有交集并集补集的api，我们可以把两人的关注的人分别放入到一个set集合中，然后再通过api去查看这两个set集合中的交集数据。")])]),s._v(" "),t("h3",{attrs:{id:"推拉功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推拉功能"}},[s._v("#")]),s._v(" 推拉功能")]),s._v(" "),t("p",[s._v("当我们关注了用户后，这个用户发了动态，那么我们应该把这些数据推送给用户，这个需求，其实我们又把他叫做Feed流，关注推送也叫做"),t("strong",[s._v("Feed流，直译为投喂")]),s._v("。为用户持续的提供“沉浸式”的体验，通过无限下拉刷新获取新的信息。")]),s._v(" "),t("p",[s._v("对于传统的模式的内容解锁：我们是需要用户去通过搜索引擎或者是其他的方式去解锁想要看的内容")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis68.png"}}),s._v(" "),t("p",[s._v("对于新型的Feed流的的效果：不需要我们用户再去推送信息，而是系统分析用户到底想要什么，然后直接把内容推送给用户，从而使用户能够更加的节约时间，不用主动去寻找。")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis69.png"}}),s._v(" "),t("p",[s._v("Feed流的实现有两种模式：")]),s._v(" "),t("p",[s._v("Feed流产品有两种常见模式：\n"),t("strong",[s._v("Timeline")]),s._v("：不做内容筛选，"),t("strong",[s._v("简单的按照内容发布时间排序")]),s._v("，常用于好友或关注。"),t("strong",[s._v("例如微信朋友圈")]),s._v("   所以要时间戳")]),s._v(" "),t("ul",[t("li",[s._v("优点：信息全面，不会有缺失。并且实现也相对简单")]),s._v(" "),t("li",[s._v("缺点：信息噪音较多，用户不一定感兴趣，内容获取效率低")])]),s._v(" "),t("p",[t("strong",[s._v("智能排序")]),s._v("：利用智能算法屏蔽掉违规的、用户不感兴趣的内容。推送用户感兴趣信息来吸引用户")]),s._v(" "),t("ul",[t("li",[s._v("优点：投喂用户感兴趣信息，用户粘度很高，容易沉迷")]),s._v(" "),t("li",[s._v("缺点：如果算法不精准，可能起到反作用")])]),s._v(" "),t("p",[t("strong",[s._v("拉模式")]),s._v("：也叫做读扩散")]),s._v(" "),t("p",[s._v("该模式的核心含义就是：当张三和李四和王五发了消息后，都会保存在自己的邮箱中，假设赵六要读取信息，那么他会从读取他自己的收件箱，此时系统会从他关注的人群中，把他关注人的信息全部都进行拉取，然后在进行排序")]),s._v(" "),t("p",[s._v("优点：比较节约空间，因为赵六在读信息时，并没有重复读取，而且读取完之后可以把他的收件箱进行清除。")]),s._v(" "),t("p",[s._v("缺点：比"),t("strong",[s._v("较延迟，当用户读取数据时才去关注的人里边去读取数据，假设用户关注了大量的用户，那么此时就会拉取海量的内容，对服务器压力巨大。")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis70.png"}}),s._v(" "),t("p",[t("strong",[s._v("推模式")]),s._v("：也叫做写扩散。")]),s._v(" "),t("p",[s._v("推模式是没有写邮箱的，当张三写了一个内容，此时会主动的把张三写的内容发送到他的粉丝收件箱中去，假设"),t("strong",[s._v("此时李四再来读取，就不用再去临时拉取了")])]),s._v(" "),t("p",[t("strong",[s._v("优点：时效快，不用临时拉取")])]),s._v(" "),t("p",[t("strong",[s._v("缺点：内存压力大，假设一个大V写信息，很多人关注他， 就会写很多分数据到粉丝那边去")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis71.png"}}),s._v(" "),t("p",[t("strong",[s._v("推拉结合模式")]),s._v("："),t("strong",[s._v("也叫做读写混合，兼具推和拉两种模式的优点。")])]),s._v(" "),t("p",[s._v("推拉模式是一个折中的方案，站在发件人这一段，"),t("strong",[s._v("如果是个普通的人，那么我们采用写扩散的方式")]),s._v("，直接把数据写入到他的粉丝中去，因为普通的人他的粉丝关注量比较小，所以这样做没有压力，如果是大V，"),t("strong",[s._v("那么他是直接将数据先写入到一份到发件箱里边去，然后再直接写一份到活跃粉丝收件箱里边去，现在站在收件人这端来看，如果是活跃粉丝")]),s._v("，那么大V和普通的人发的都会直接写入到自己收件箱里边来，而如果是普通的粉丝，"),t("strong",[s._v("由于他们上线不是很频繁，所以等他们上线时，再从发件箱里边去拉信息。")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis72.png"}}),s._v(" "),t("h4",{attrs:{id:"feed流的分页查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feed流的分页查询"}},[s._v("#")]),s._v(" feed流的分页查询")]),s._v(" "),t("p",[s._v("需求：")]),s._v(" "),t("ul",[t("li",[s._v("修改新增探店笔记的业务，在保存blog到数据库的同时，推送到粉丝的收件箱")]),s._v(" "),t("li",[s._v("收件箱满足可以根据时间戳排序，必须用Redis的数据结构实现")]),s._v(" "),t("li",[s._v("查询收件箱数据时，可以实现分页查询")])]),s._v(" "),t("p",[t("strong",[s._v("Feed流中的数据会不断更新，所以数据的角标也在变化，因此不能采用传统的分页模式。")])]),s._v(" "),t("p",[s._v("传统了分页在feed流是不适用的，因为我们的数据会随时发生变化")]),s._v(" "),t("p",[s._v("假设在t1 时刻，我们去读取第一页，此时page = 1 ，size = 5 ，那么我们拿到的就是10~6 这几条记录，假设现在t2时候又发布了一条记录，此时t3 时刻，我们来读取第二页，读取第二页传入的参数是page=2 ，size=5 ，那么此时读取到的第二页实际上是从6 开始，然后是"),t("strong",[s._v("6~2 ，那么我们就读取到了重复的数据，所以feed流的分页，不能采用原始方案来做。")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis73.png"}}),s._v(" "),t("p",[s._v("Feed流的滚动分页")]),s._v(" "),t("p",[s._v("我们需要记录每次操作的最后一条，然后从这个位置开始去读取数据")]),s._v(" "),t("p",[s._v("举个例子：我们从t1时刻开始，拿第一页数据，拿到了10~6，然后记录下当前最后一次拿取的记录，就是6，t2时刻发布了新的记录，此时这个11放到最顶上，但是不会影响我们之前记录的6，此时t3时刻来拿第二页，第二页这个时候拿数据，"),t("strong",[s._v("还是从6后一点的5去拿，就拿到了5-1的记录。我们这个地方可以采用sortedSet来做，可以进行范围查询，并且还可以记录当前获取数据时间戳最小值，就可以实现滚动分页了")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis74.png"}}),s._v(" "),t("h2",{attrs:{id:"geo数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geo数据类型"}},[s._v("#")]),s._v(" GEO数据类型")]),s._v(" "),t("p",[t("strong",[s._v("GEO就是Geolocation的简写形式，代表地理坐标")]),s._v("。Redis在3.2版本中加入了对GEO的支持，允许存储地理坐标信息，帮助我们根据经纬度来检索数据。常见的命令有：")]),s._v(" "),t("ul",[t("li",[s._v("GEOADD：添加一个地理空间信息，包含：经度（longitude）、纬度（latitude）、值（member）")]),s._v(" "),t("li",[s._v("GEODIST：计算指定的两个点之间的距离并返回")]),s._v(" "),t("li",[s._v("GEOHASH：将指定member的坐标转为hash字符串形式并返回")]),s._v(" "),t("li",[s._v("GEOPOS：返回指定member的坐标")]),s._v(" "),t("li",[s._v("GEORADIUS：指定圆心、半径，找到该圆内包含的所有member，并按照与圆心之间的距离排序后返回。6.以后已废弃")]),s._v(" "),t("li",[s._v("GEOSEARCH：在指定范围内搜索member，并按照与指定点之间的距离排序后返回。范围可以是圆形或矩形。6.2.新功能")]),s._v(" "),t("li",[s._v("GEOSEARCHSTORE：与GEOSEARCH功能一致，不过可以把结果存储到一个指定的key。 6.2.新功能")])]),s._v(" "),t("p",[t("strong",[s._v("用处   地理定位，如附近商户、附近的人")])]),s._v(" "),t("h2",{attrs:{id:"bitmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap"}},[s._v("#")]),s._v(" BitMap")]),s._v(" "),t("p",[s._v("用户一次签到，就是一条记录，假如有1000万用户，平均每人每年签到次数为10次，则这张表一年的数据量为 1亿条")]),s._v(" "),t("p",[s._v("每签到一次需要使用（8 + 8 + 1 + 1 + 3 + 1）共22 字节的内存，一个月则最多需要600多字节")]),s._v(" "),t("p",[s._v("我们如何能够简化一点呢？其实可以考虑小时候一个挺常见的方案，就是小时候，咱们准备一张小小的卡片，你只要签到就打上一个勾，我最后判断你是否签到，其实只需要到小卡片上看一看就知道了")]),s._v(" "),t("p",[s._v("我们可以采用类似这样的方案来实现我们的签到需求。")]),s._v(" "),t("p",[s._v("我们按月来统计用户签到信息，签到记录为1，未签到则记录为0.")]),s._v(" "),t("p",[s._v("把每一个bit位对应当月的每一天，形成了映射关系。用0和1标示业务状态，这种思路就称为"),t("strong",[s._v("位图（BitMap）")]),s._v("。这样我们就"),t("strong",[s._v("用极小的空间，来实现了大量数据的表示")])]),s._v(" "),t("p",[t("strong",[s._v("Redis中是利用string类型数据结构实现BitMap")]),s._v("，因此最大上限是512M，转换为bit则是 2^32个bit位。")]),s._v(" "),t("p",[t("strong",[s._v("所以这个本质上就是个string的数据结构,以二进制的形式表示")]),s._v(" "),t("strong",[s._v("所以到时候图形界面展示的时候，用的是binary")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis75.png"}}),s._v(" "),t("p",[s._v("BitMap的操作命令有：")]),s._v(" "),t("ul",[t("li",[s._v("SETBIT：向指定位置（offset）存入一个0或1")]),s._v(" "),t("li",[s._v("GETBIT ：获取指定位置（offset）的bit值")]),s._v(" "),t("li",[s._v("BITCOUNT ：统计BitMap中值为1的bit位的数量")]),s._v(" "),t("li",[s._v("BITFIELD ：操作（"),t("strong",[s._v("查询    (主要是查询，因为它可以查多个)")]),s._v("、修改、自增）BitMap中bit数组中的指定位置（offset）的值")]),s._v(" "),t("li",[s._v("BITFIELD_RO ：获取BitMap中bit数组，"),t("strong",[s._v("并以十进制形式返回")])]),s._v(" "),t("li",[s._v("BITOP ：将多个BitMap的结果做位运算（与 、或、异或）")]),s._v(" "),t("li",[s._v("BITPOS ：查找bit数组中指定范围内第一个0或1出现的位置")])]),s._v(" "),t("p",[t("strong",[s._v("BitMap底层是基于String数据结构，因此其操作也都封装在字符串相关操作中了。")])]),s._v(" "),t("p",[s._v("**问题1：**什么叫做连续签到天数？\n从最后一次签到开始向前统计，直到遇到第一次未签到为止，计算总的签到次数，就是连续签到天数。")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis76.png"}}),s._v(" "),t("p",[s._v("Java逻辑代码：获得当前这个月的最后一次签到数据，定义一个计数器，然后不停的向前统计，直到获得第一个非0的数字即可，每得到一个非0的数字计数器+1，直到遍历完所有的数据，就可以获得当前月的签到总天数了")]),s._v(" "),t("p",[s._v("**问题2：**如何得到本月到今天为止的所有签到数据？")]),s._v(" "),t("p",[s._v("BITFIELD key GET u[dayOfMonth] 0")]),s._v(" "),t("p",[s._v("假设今天是10号，那么我们就可以从当前月的第一天开始，获得到当前这一天的位数，是10号，那么就是10位，去拿这段时间的数据，就能拿到所有的数据了，那么这10天里边签到了多少次呢？统计有多少个1即可。")]),s._v(" "),t("p",[t("strong",[s._v("问题3：如何从后向前遍历每个bit位？")])]),s._v(" "),t("p",[s._v("注意：bitMap返回的数据是10进制，哪假如说返回一个数字8，那么我哪儿知道到底哪些是0，哪些是1呢？我们只需要让得到的10进制数字和1做与运算就可以了，因为1只有遇见1 才是1，其他数字都是0 ，我们把签到结果和1进行与操作，每与一次，就把签到结果向右移动一位，依次内推，我们就能完成逐个遍历的效果了。")]),s._v(" "),t("h3",{attrs:{id:"bitmap解决缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap解决缓存穿透"}},[s._v("#")]),s._v(" BitMap解决缓存穿透")]),s._v(" "),t("p",[s._v("回顾"),t("strong",[s._v("缓存穿透")]),s._v("：")]),s._v(" "),t("p",[s._v("发起了一个数据库不存在的，redis里边也不存在的数据，通常你可以把他看成一个攻击")]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("判断id<0")])]),s._v(" "),t("li",[t("p",[s._v("如果数据库是空，那么就可以直接往redis里边把这个空数据缓存起来")])])]),s._v(" "),t("p",[s._v("第一种解决方案：遇到的问题是如果用户访问的是id不存在的数据，则此时就无法生效")]),s._v(" "),t("p",[s._v("第二种解决方案：遇到的问题是：如果是不同的id那就可以防止下次过来直击数据")]),s._v(" "),t("p",[s._v("所以我们如何解决呢？")]),s._v(" "),t("p",[s._v("我们可以将数据库的数据，所对应的id写入到一个list集合中，当用户过来访问的时候，我们直接去判断list中是否包含当前的要查询的数据，如果说用户要查询的id数据并不在list集合中，则直接返回，如果list中包含对应查询的id数据，则说明不是一次缓存穿透数据，则直接放行。")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis77.png"}}),s._v(" "),t("p",[s._v("现在的问题是"),t("strong",[s._v("这个主键其实并没有那么短，而是很长的一个 主键")])]),s._v(" "),t("p",[s._v("哪怕你单独去提取这个主键，但是在11年左右，淘宝的商品总量就已经超过10亿个")]),s._v(" "),t("p",[s._v("所以如果"),t("strong",[s._v("采用以上方案，这个list也会很大")]),s._v("，所以我们可以使用"),t("strong",[s._v("bitmap来减少list的存储空间")])]),s._v(" "),t("p",[s._v("我们可以把"),t("strong",[s._v("list数据抽象成一个非常大的bitmap，我们不再使用list，而是将db中的id数据利用哈希思想")]),s._v("，比如：")]),s._v(" "),t("p",[t("strong",[s._v("id % bitmap.size")]),s._v("  = 算出当前这个id对应应该落在bitmap的哪个索引上，然后将这个值从0变成1，然后当用户来查询数据时，此时已经没有了list，"),t("strong",[s._v("让用户用他查询的id去用相同的哈希算法")]),s._v("， "),t("strong",[s._v("算出来当前这个id应当落在bitmap的哪一位，然后判断这一位是0，还是1")]),s._v("，如果是0则表明这一位上的数据一定不存在，  采用这种方式来处理，需要重点考虑一个事情，"),t("strong",[s._v("就是误差率，所谓的误差率就是指当发生哈希冲突的时候，产生的误差。    （哈希冲突）")])]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis78.png"}}),s._v(" "),t("p",[s._v("布隆过滤器的底层就是依靠的bitmap")]),s._v(" "),t("h2",{attrs:{id:"hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[s._v("#")]),s._v(" HyperLogLog")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("UV：全称Unique Visitor，也叫独立访客量")]),s._v("，是指通过互联网访问、浏览这个网页的自然人。1天内同一个用户多次访问该网站，只记录1次。")]),s._v(" "),t("li",[t("strong",[s._v("PV：全称Page View，也叫页面访问量或点击量")]),s._v("，用户每访问网站的一个页面，记录1次PV，用户多次打开页面，则记录多次PV。往往用来衡量网站的流量。")])]),s._v(" "),t("p",[s._v("通常来说UV会比PV大很多，所以衡量同一个网站的访问量，我们需要综合考虑很多因素，所以我们只是单纯的把这两个值作为一个参考值")]),s._v(" "),t("p",[s._v("UV统计在服务端做会比较麻烦，因为要判断该用户是否已经统计过了，需要将统计过的用户信息保存。但是如果每个访问的用户都保存到Redis中，数据量会非常恐怖，那怎么处理呢？")]),s._v(" "),t("p",[t("strong",[s._v("Hyperloglog(HLL)是从Loglog算法派生的概率算法，"),t("strong",[s._v("用于确定非常大的集合的基数，而不需要存储其所有值。相关算法原理大家可以参考：https://juejin.cn/post/6844903785744056333#heading-0\nRedis中的HLL是")]),s._v("基于string结构实现的")]),s._v("，单个HLL的内存"),t("strong",[s._v("永远小于16kb")]),s._v("，"),t("strong",[s._v("内存占用低")]),s._v("的令人发指！作为代价，其测量结果是概率性的，"),t("strong",[s._v("有小于0.81％的误差")]),s._v("。不过对于UV统计来说，这完全可以忽略。")]),s._v(" "),t("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/redis79.png"}}),s._v(" "),t("p",[t("strong",[s._v("HLL可以用来统计    统计大数据")])])])}),[],!1,null,null,null);t.default=n.exports}}]);