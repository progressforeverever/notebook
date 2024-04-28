(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{517:function(t,v,_){"use strict";_.r(v);var s=_(4),o=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"操作系统小记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作系统小记录"}},[t._v("#")]),t._v(" 操作系统小记录")]),t._v(" "),v("p",[t._v("这种小记录主要记录一些概念上的东西以及一些常考的过程类的东西，用于精简之前写的笔记，做个总结概括。")]),t._v(" "),v("h2",{attrs:{id:"什么是操作系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是操作系统"}},[t._v("#")]),t._v(" 什么是操作系统")]),t._v(" "),v("p",[t._v("操作系统（OperatingSystem，OS）是指控制和"),v("strong",[t._v("管理整个计算机系统的硬件和软件资源")]),t._v("，并合理地"),v("strong",[t._v("组织调度")]),t._v("计算机的工作和"),v("strong",[t._v("资源的分配")]),t._v("；以提供给用户和其他软件"),v("strong",[t._v("方便的接口和环境")]),t._v("；它是计算机系统中"),v("strong",[t._v("最基本的系统软件。")])]),t._v(" "),v("ul",[v("li",[t._v("系统资源的管理者")]),t._v(" "),v("li",[t._v("向上提供服务 （封装思想）")]),t._v(" "),v("li",[t._v("最接近硬件的软件")])]),t._v(" "),v("p",[v("strong",[t._v("执行一个程序前需要将该程序放到内存中，才能被CPU处理。")])]),t._v(" "),v("p",[v("strong",[t._v("GUI：图形化用户接口（Graphical User Interface）")])]),t._v(" "),v("h2",{attrs:{id:"操作系统的四个特征"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的四个特征"}},[t._v("#")]),t._v(" 操作系统的四个特征")]),t._v(" "),v("ul",[v("li",[t._v("并发")]),t._v(" "),v("li",[t._v("共享")]),t._v(" "),v("li",[t._v("虚拟")]),t._v(" "),v("li",[t._v("异步")])]),t._v(" "),v("p",[t._v("（并发与共享是两个最基本的特征，二者互为存在条件）")]),t._v(" "),v("h2",{attrs:{id:"并发-并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发-并行"}},[t._v("#")]),t._v(" 并发 && 并行")]),t._v(" "),v("p",[v("strong",[t._v("并发")]),t._v("：指两个或多个事件在同一时间间隔内发生。这些事件"),v("strong",[t._v("宏观上是同时发生的，但微观上是交替发生的。")])]),t._v(" "),v("p",[v("strong",[t._v("并行")]),t._v("："),v("strong",[t._v("指两个或多个事件在同一时刻同时发生。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231024200708721.png",alt:"image-20231024200151370"}})]),t._v(" "),v("p",[t._v("注意（重要考点）：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("单核CPU")]),t._v("同一时刻只能执行一个程序，各个程序只能"),v("strong",[t._v("并发")]),t._v("地执行")]),t._v(" "),v("li",[v("strong",[t._v("多核CPU")]),t._v("同一时刻可以同时执行多个程序，多个程序可以"),v("strong",[t._v("并行")]),t._v("地执行")])]),t._v(" "),v("p",[t._v("比如Intel的第八代i3处理器就是4核CPU，意味着可以并行地执行4个程序")]),t._v(" "),v("h2",{attrs:{id:"异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),v("p",[v("strong",[t._v("异步是指，在多道程序环境下，允许多个程序并发执行")]),t._v("，但由于"),v("strong",[t._v("资源有限，进程的执行不是一贯到底的")]),t._v("， 而是走走停停，以不可预知的速度向前推进，这就是进程的异步性。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231024201227650.png",alt:"image-20231024201227650"}})]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"特权指令-非特权指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特权指令-非特权指令"}},[t._v("#")]),t._v(" 特权指令 && 非特权指令")]),t._v(" "),v("p",[t._v("应用程序只能使用"),v("strong",[t._v("非特权指令")]),t._v("，如： 加法指令、减法指令等")]),t._v(" "),v("p",[t._v("操作系统内核作为“管理者”，有时会让CPU执行一些 "),v("strong",[t._v("“特权指令”")]),t._v("，如："),v("strong",[t._v("内存清零指令。这些指令影响重大， 只允许“管理者”——即操作系统内核来使用")])]),t._v(" "),v("p",[v("strong",[t._v("在CPU设计和生产的时 候就划分了特权指令和 非特权指令，因此CPU 执行一条指令前就能判 断出其类型")])]),t._v(" "),v("h3",{attrs:{id:"内核态-用户态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内核态-用户态"}},[t._v("#")]),t._v(" 内核态&&用户态")]),t._v(" "),v("p",[t._v("CPU有两种状态，“内核态”和“用户态”")]),t._v(" "),v("ul",[v("li",[t._v("处于内核态时，说明此时正在运行的是内核程序，此时可以执行特权指令")]),t._v(" "),v("li",[t._v("处于用户态时，说明此时正在运行的是应用程序，此时只能执行非特权指令")])]),t._v(" "),v("blockquote",[v("p",[t._v("CPU能判断出指令类型，但是它怎么区分此时正在运行 的是内核程序or应用程序？")])]),t._v(" "),v("p",[t._v("拓展：CPU中有一个寄存器叫"),v("strong",[t._v("程序状态字寄存器（PSW）")]),t._v("，其中有个二进制位，"),v("strong",[t._v("1表示 “内核态”，0表示“用户态”")])]),t._v(" "),v("blockquote",[v("p",[t._v("如何实 现CPU状态的 切换？")])]),t._v(" "),v("ul",[v("li",[t._v("内核态 —> 用户态：执行一条特权指令——"),v("strong",[t._v("修改PSW的标志位为“用户态”，这个动作意味着操作系统将主动让出CPU使用权")])]),t._v(" "),v("li",[t._v("用户态—> 内核态：由"),v("strong",[t._v("中断引发")]),t._v("，硬件自动完成变态过程，"),v("strong",[t._v("触发中断信号意味着操作系统将强行夺回CPU的使用权")])])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("原语")]),t._v("是一种特殊的"),v("strong",[t._v("程序")]),t._v("。 是最接近硬件的部分，这种程"),v("strong",[t._v("序的运行具有原子性。")])]),t._v(" "),v("h2",{attrs:{id:"中断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中断"}},[t._v("#")]),t._v(" 中断")]),t._v(" "),v("p",[t._v("“中断”是让操作系统内核夺回CPU使用权的唯一途径")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231024202825835.png",alt:"image-20231024201444674"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231024203334821.png",alt:"image-20231024203947228"}})]),t._v(" "),v("p",[t._v("内中断  外中断")]),t._v(" "),v("p",[v("strong",[t._v("内外 针对的是CPU而言")])]),t._v(" "),v("p",[v("strong",[t._v("内中断  也称为异常")])]),t._v(" "),v("p",[t._v("常见的引发有：")]),t._v(" "),v("ul",[v("li",[t._v("陷入指令")]),t._v(" "),v("li",[t._v("故障")])]),t._v(" "),v("p",[v("strong",[t._v("应用程序想请求操作系统内核的服务")]),t._v("，此时会执行一条特殊的指令——"),v("strong",[t._v("陷入指令")]),t._v("，该指令会"),v("strong",[t._v("引发一个内部中断信号")])]),t._v(" "),v("p",[v("strong",[t._v("陷入指令并不是特权指令，因为运行在用户态")])]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("外中断")]),t._v(" "),v("ul",[v("li",[t._v("时钟中断")]),t._v(" "),v("li",[t._v("IO中断")])]),t._v(" "),v("p",[t._v("不同的中断信号，需要用不同的中断处理程序来处理。当CPU检测到中断信号后，会根据中断信号的类型去查询“中断向量表”，以此来找到相应的"),v("strong",[t._v("中断处理程序")]),t._v("在内存中的存放位置。")]),t._v(" "),v("p",[v("strong",[t._v("显然，中断处理 程序一定是内核程序，需要运行在“内核态")])]),t._v(" "),v("h2",{attrs:{id:"进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),v("p",[t._v("程序：是静态的，就是个存放在磁盘里的 可执行文件，如：QQ.exe。")]),t._v(" "),v("p",[v("strong",[t._v("进程：是动态的，是程序的一次执行过程")]),t._v("， 如：可同时启动多次QQ程序")]),t._v(" "),v("p",[t._v("同一个程序"),v("strong",[t._v("多次执行会对应多个进程")])]),t._v(" "),v("p",[t._v("当进程被创建时，操作系统会为该进程 分配一个唯一的、"),v("strong",[t._v("不重复的“身份证号”——PID（ProcessID，进程ID）")])]),t._v(" "),v("p",[t._v("操作系统要记录PID、进程所属用户ID（UID）")]),t._v(" "),v("p",[t._v("还要记录给进程分配了哪些资源（如：分配了多少内存、正在使用哪些I/O设备、正在使用哪些文件）")]),t._v(" "),v("p",[t._v("这些信息都被保存在一个"),v("strong",[t._v("数据结构PCB（ProcessControlBlock）实际上是个结构体")]),t._v("中，即进程控制块 操作系统需要对各个并发运行的进程进行管理，"),v("strong",[t._v("但凡管理时所需要的信息，都会被放在PCB中")])]),t._v(" "),v("p",[v("strong",[t._v("PCB是进程存在的唯 一标志，当进程被创 建时，操作系统为其 创建PCB，当进程结束时，会回收其PCB。")])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("程序段、数据段、PCB三部分组成了进程实体（进程映像）")])]),t._v(" "),v("p",[t._v("引入进程实体的概念后，可把"),v("strong",[t._v("进程定义为： 进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025101122161.png",alt:"image-20231025101122161"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("进程PCB中，"),v("strong",[t._v("会有一个变量state来表示进程的当前状态")]),t._v("。如：1表示创建态、2表示就绪态、3表示运行态… 为了对同一个状态下的各个进程进行统一的管理，"),v("strong",[t._v("操作系统会将各个进程的PCB组织起来。")])]),t._v(" "),v("p",[v("strong",[t._v("每一种状态对应一个队列，一个队列有自己的指针")])]),t._v(" "),v("p",[t._v("通常会把优先级高的进程放在队头")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025101747249.png",alt:"image-20231025101553879"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025101806663.png",alt:"image-20231025101806663"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025101838727.png",alt:"image-20231025101838727"}})]),t._v(" "),v("h3",{attrs:{id:"原子性的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原子性的实现"}},[t._v("#")]),t._v(" 原子性的实现")]),t._v(" "),v("p",[v("strong",[t._v("进程控制通过原语来实现")])]),t._v(" "),v("p",[v("strong",[t._v("原语是一种特殊的程序， 它的执行具有原子性。")])]),t._v(" "),v("p",[v("strong",[t._v("如何实现原子性？")])]),t._v(" "),v("p",[t._v("可以用"),v("strong",[t._v("关中断指令和开中断指令这两个特权指令实现原子性")])]),t._v(" "),v("p",[t._v("正常情况："),v("strong",[t._v("CPU每执行完一条指令都会例行检查是否有中断信号需要处理")]),t._v("，如果有， 则暂停运行当前这段程序，转而执行相应的中断处理程序")]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("CPU"),v("strong",[t._v("执行了关中断指令之后，就不再例行检查中断信号，直到执行开中断指令之后 才会恢复检查。")])]),t._v(" "),v("p",[v("strong",[t._v("这样，关中断、开中断之间的这些指令序 列就是不可被中断的，这就实现了“原子性”")])]),t._v(" "),v("h2",{attrs:{id:"线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025110648773.png",alt:"image-20231025105909114"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025110745039.png",alt:"image-20231025111102575"}})]),t._v(" "),v("p",[t._v("有的进程可能需要“同时”做很多事，而传统 的进程只能串行地执行一系列程序。为此，引 入了“线程”，来增加并发度。")]),t._v(" "),v("p",[v("strong",[t._v("引入线程后，线程成为了程序执行流的最小单位")])]),t._v(" "),v("p",[v("strong",[t._v("线程是一个基本的CPU执行单元， 也是程序执行流的最小单位")]),t._v("。")]),t._v(" "),v("p",[t._v("引入线程之后，不仅是进程之间可以并发，进程内的各线程之间也可以并发，从而进一步提升了 系统的并发度，使得一个进程内也可以并发处理各种任务（如QQ 视频、文字聊天、传文件）")]),t._v(" "),v("p",[t._v("引入线程后，"),v("strong",[t._v("进程只作为除CPU之 外的系统资源的分配单元")]),t._v("（如打 印机、内存地址空间等都是分配 给进程的）。")]),t._v(" "),v("p",[v("strong",[t._v("线程则作为处理机的分配单元。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025110905392.png",alt:"image-20231025110745039"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025110759247.png",alt:"image-20231025110759247"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231025113054747.png",alt:"image-20231025113024103"}})]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"同步-互斥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步-互斥"}},[t._v("#")]),t._v(" 同步 && 互斥")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231031091704182.png",alt:"image-20231031091704182"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231031091724835.png",alt:"image-20231031092039669"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("同步：访问临界资源的顺序问题")])]),t._v(" "),v("p",[v("strong",[t._v("互斥：一段时间只允许一个进程使用")])]),t._v(" "),v("h2",{attrs:{id:"信号量-p、v操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信号量-p、v操作"}},[t._v("#")]),t._v(" 信号量 P、V操作")]),t._v(" "),v("p",[v("strong",[t._v("信号量其实就是一个变量 ，可以用一个信号量 来表示系统中某种资源的数量")]),t._v("，"),v("strong",[t._v("比如：系统中只有一台打印机，就可以设置一个初值为 1 的信号量。")])]),t._v(" "),v("p",[v("strong",[t._v("P( S ) —— 申请一个资源S，如果资源不够就阻塞等待")])]),t._v(" "),v("p",[v("strong",[t._v("V( S ) —— 释放一个资源S，如果有进程在等待该资源，则唤醒一个进程")])]),t._v(" "),v("p",[v("strong",[t._v("实现互斥的P操作一定要在实现同步的P操作之后。")])]),t._v(" "),v("p",[v("strong",[t._v("V操作不会导致进程阻塞，因此两个V操作顺序可以交换")])]),t._v(" "),v("h2",{attrs:{id:"管程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#管程"}},[t._v("#")]),t._v(" 管程")]),t._v(" "),v("p",[t._v("相当于对P/V操作的进一步封装，直接使用即可")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231031113935912.png",alt:"image-20231031113935912"}})]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"内存管理-todo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存管理-todo"}},[t._v("#")]),t._v(" 内存管理   （TODO）")]),t._v(" "),v("p",[t._v("内存可存放数据。"),v("strong",[t._v("程序执行前需要先放到内存中才能被CPU处理——缓和CPU与硬盘之间的速度矛盾")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107090602499.png",alt:"image-20231107090440736"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("程序经过"),v("strong",[t._v("编译、链接")]),t._v(" 后生成的指令中指明 的是"),v("strong",[t._v("逻辑地址（相对地址），即：相对于 进程的起始地址而言 的地址")])]),t._v(" "),v("p",[t._v("然后要转入实际的物理地址，"),v("strong",[t._v("这中间就有个转化的过程")])]),t._v(" "),v("p",[v("strong",[t._v("这个转入过程称为装入")])]),t._v(" "),v("p",[t._v("三种装入方式：")]),t._v(" "),v("h3",{attrs:{id:"绝对装入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#绝对装入"}},[t._v("#")]),t._v(" 绝对装入")]),t._v(" "),v("p",[t._v("绝对装入：在编译时，如果知道"),v("strong",[t._v("程序将放到内存中的哪个位置，编译程序将产生绝对地址的目标代码")]),t._v("。 装入程序按照装入模块中的地址，将程序和数据装入内存。")]),t._v(" "),v("p",[t._v("相当于直接写物理地址")]),t._v(" "),v("h3",{attrs:{id:"静态重定位装入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态重定位装入"}},[t._v("#")]),t._v(" 静态重定位装入")]),t._v(" "),v("p",[t._v("静态重定位：又称可重定位装入。"),v("strong",[t._v("编译、链接后的装入模块的地址都是从0开始的")]),t._v("，指令中**使用的地址、数据存放的地址都是相对于起始地址而言的逻辑地址。**可根据内存的当前情况，将装入模块装入 到内存的适当位置。装入时对地址进行“重定位”，将逻辑地址变换为物理地址（"),v("strong",[t._v("地址变换是在装入 时一次完成的")]),t._v("）。")]),t._v(" "),v("p",[t._v("静态重定位的特点是在一个作业装入内存时，"),v("strong",[t._v("必须分配其要求的全部内存空间")]),t._v("，如果没有足够的内存，就不能装入该作业。 作业一旦进入内存后，"),v("strong",[t._v("在运行期间就不能再移动，也不能再申请内存空间")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107091332895.png",alt:"image-20231107091534770"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"动态运行时装入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动态运行时装入"}},[t._v("#")]),t._v(" 动态运行时装入")]),t._v(" "),v("p",[t._v("动态重定位：又称动态运行时装入。编译、链接后的装入模块的地址都是从0开始的。装入程序把装入模块装入内存后，"),v("strong",[t._v("并不会立即把逻辑地址转换为物理地址，而是把地址转换推迟到程序真正要执行 时才进行。因此装入内存后所有的地址依然是逻辑地址。这种方式需要一个重定位寄存器的支持。")]),t._v("（用到时再转化成物理地址）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107092708599.png",alt:"image-20231107092708599"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),v("p",[v("strong",[t._v("静态链接")]),t._v("：在程序运行之前， 先将各目标模块及它们所需 的库函数连接成一个完整的 可执行文件（装入模块）， 之后不再拆开。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107091534770.png",alt:"image-20231107091858932"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("装入时动态链接")]),t._v("：将各目标 模块装入内存时，边装入边 链接的链接方式")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107091920381.png",alt:"image-20231107091920381"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("运行时动态链接：在程序执行中需要该目标模块时，才 对它进行链接。其优点是便于修改和更新，便于实现对目标模块的共享")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107091943372.png",alt:"image-20231107092106119"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"内存保护"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存保护"}},[t._v("#")]),t._v(" 内存保护")]),t._v(" "),v("p",[t._v("1.设置上下限寄存器在CPU中设置一对上、下限寄存器，存放进程的上、下限地址。进程的指令要访问某个地址时，CPU检查是否越界")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107092213529.png",alt:"image-20231107092213529"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("2.采用重定位寄存器（又称"),v("strong",[t._v("基址寄存器")]),t._v("）和界地址寄存器（又称"),v("strong",[t._v("限长寄存器")]),t._v("）进行越界检查。重定 位寄存器中存放的是进程的起始物理地址。界地址寄 存器中存放的是进程的最大逻辑地址")]),t._v(" "),v("p",[t._v("基址和限长就能知道范围了")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107092530983.png",alt:"image-20231107092808492"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"内存扩充"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存扩充"}},[t._v("#")]),t._v(" 内存扩充")]),t._v(" "),v("ul",[v("li",[t._v("交换")]),t._v(" "),v("li",[t._v("覆盖")]),t._v(" "),v("li",[t._v("虚拟内存空间")])]),t._v(" "),v("p",[t._v("覆盖技术的思想："),v("strong",[t._v("将程序分为多个段（多个模块）")]),t._v("。 "),v("strong",[t._v("常用的段常驻内存，不常用的段在需要时调入内存")]),t._v("。 内存中分为"),v("strong",[t._v("一个“固定区”和若干个“覆盖区”。")]),t._v(" 需要常驻内存的段放在“固定区”中，调入后就不再 调出（除非运行结束） 不常用的段放在“覆盖区”，需要用到时调入内存， 用不到时调出内存")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107092857247.png",alt:"image-20231107092857247"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("交换（对换）技术的设计思想："),v("strong",[t._v("内存空间紧张时，系统将内存中某些进程暂时换出外存，把外存中 某些已具备运行条件的进程换入内存（进程在内存与磁盘间动态调度）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107093151448.png",alt:"image-20231107093151448"}})]),t._v(" "),v("p",[t._v("这里与后面的磁盘管理有一定的联系")]),t._v(" "),v("p",[t._v("通常把磁盘空间分为"),v("strong",[t._v("文件区和对换区两部分")]),t._v("。"),v("strong",[t._v("文件区主要用于存放文件")]),t._v("，主要追求存储空间的利用率，因此对文件区空间的管理采 用离散分配方式；"),v("strong",[t._v("对换区空间只占磁盘空间的小部分，被换出的进程数据就存放 在对换区。")])]),t._v(" "),v("p",[t._v("对换区速度更快，"),v("strong",[t._v("对换区的I/O速度比文件区的更快。")])]),t._v(" "),v("p",[v("strong",[t._v("（注意：PCB 会常驻内存，不会被换出外存）")])]),t._v(" "),v("p",[t._v("虚拟内存")]),t._v(" "),v("p",[v("strong",[t._v("传统的存储管理")])]),t._v(" "),v("p",[v("strong",[t._v("一次性：作业必须一次性全部装入内存后才能开始运行。这会造成两个问题：")])]),t._v(" "),v("p",[v("strong",[t._v("①作业很大时，不能全 部装入内存，导致大作业无法运行；")])]),t._v(" "),v("p",[t._v("②当大量作业要求运行时，由于内存无法容纳所有作业，因此只 有少量作业能运行，导致多道程序并发度下降。")]),t._v(" "),v("p",[t._v("驻留性：一旦作业被装入内存，就会一直驻留在内存中，直至作业运行结束**。事实上，在一个时间段内，只需要访问作业的一小部分数据即可正常运行，这就导致了内存中会驻留大量的、暂时用不到的数据，浪费了宝贵的内存资源。**")]),t._v(" "),v("p",[t._v("虚拟内存技术  "),v("strong",[t._v("换入换出")]),t._v(" "),v("strong",[t._v("（页面置换算法）")])]),t._v(" "),v("p",[v("strong",[t._v("相当于只留一部分在内存中")])]),t._v(" "),v("p",[v("strong",[t._v("虚拟内存的实现需要建立在离散分配的内存管理方式基础上。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107112103548.png",alt:"image-20231107112103548"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"分页管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分页管理"}},[t._v("#")]),t._v(" 分页管理")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107112208217.png",alt:"image-20231107112242448"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("请求分页存储管理与基本分页存储管理的主要区别： 在程序执行过程中，当所访问的信息不在内存时，由操作系统负责将所需信息从外存调入内存，然 后继续执行程序。 "),v("strong",[t._v("若内存空间不够，由操作系统负责将内存中暂时用不到的信息换出到外存。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107112242448.png",alt:"image-20231107112208217"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("页表机制   （数据结构上入手）")]),t._v(" "),v("p",[t._v("注意这里的数据结构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231107112707493.png",alt:"image-20231107112707493"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("引发缺页中断后后面就是那些缺页置换算法")]),t._v(" "),v("p",[t._v("动态分区分配没有内部碎片，但是有外部碎片。")]),t._v(" "),v("p",[t._v("内部碎片，分配给某进程的内存区域中，如果"),v("strong",[t._v("有些部分没有用上")]),t._v("。")]),t._v(" "),v("p",[t._v("外部碎片，是指内存中的"),v("strong",[t._v("某些空闲分区由于太小而难以利用")]),t._v("。")]),t._v(" "),v("p",[t._v("如果内存中空闲空间的总和本来可以满足某进程的要求， 但由于进程需要的是一整块连续的内存空间，因此这些 “碎片”不能满足进程的需求。")]),t._v(" "),v("p",[v("strong",[t._v("可以通过紧凑（拼凑，Compaction）技术来解决外部碎片")])]),t._v(" "),v("h3",{attrs:{id:"分段、页表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分段、页表"}},[t._v("#")]),t._v(" 分段、页表")]),t._v(" "),v("p",[t._v("TODO")]),t._v(" "),v("p",[t._v("感觉这后面的得自己画画导图之类的。")]),t._v(" "),v("h2",{attrs:{id:"文件管理-todo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件管理-todo"}},[t._v("#")]),t._v(" 文件管理  （TODO）")]),t._v(" "),v("h2",{attrs:{id:"io设备管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#io设备管理"}},[t._v("#")]),t._v(" IO设备管理")]),t._v(" "),v("h3",{attrs:{id:"io控制器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#io控制器"}},[t._v("#")]),t._v(" IO控制器")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108103025032.png",alt:"image-20231108103025032"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("CPU无法直接控制I/O设备的机械部件")]),t._v("，因此I/O设备还要有一个"),v("strong",[t._v("电子部件作为CPU和I/O设备机械部 件之间的“中介”")]),t._v("，"),v("strong",[t._v("用于实现CPU对设备的控制。")])]),t._v(" "),v("p",[v("strong",[t._v("这个电子部件就是I/O控制器，又称设备控制器")]),t._v("。CPU可控制I/O控制器，又由I/O控制器来控制设备的机械部件。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108103529474.png",alt:"image-20231108103529474"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"io控制方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#io控制方式"}},[t._v("#")]),t._v(" IO控制方式")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108103659865.png",alt:"image-20231108103659865"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108104418910.png",alt:"image-20231108104418910"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108104433216.png",alt:"image-20231108104433216"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("与“中断驱动方式”相比，"),v("strong",[t._v("DMA方式（ Direct Memory Access，直接存储器存取")]),t._v("。主要用于块设备的 I/O控制）有这样几个改进：")]),t._v(" "),v("p",[t._v("①数据的"),v("strong",[t._v("传送单位是“块”")]),t._v("。不再是一个字、一个字的传送；")]),t._v(" "),v("p",[t._v("②"),v("strong",[t._v("数据的流向是从设备直接放入内存，或者从内存直接到设备")]),t._v("。不再需要CPU作为“快递小哥”。")]),t._v(" "),v("p",[t._v("③"),v("strong",[t._v("仅在传送一个或多个数据块的开始和结束时，才需要CPU干预。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108104544887.png",alt:"image-20231108104544887"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108104609265.png",alt:"image-20231108104609265"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108104711060.png",alt:"image-20231108104711060"}})]),t._v(" "),v("ol",[v("li",[t._v("CPU干预的频率 "),v("strong",[t._v("仅在传送一个或多个数据块的开始和结束时，才需要CPU干预。")])]),t._v(" "),v("li",[t._v("数据传送的单位 每次读/写一个或多个块（注意："),v("strong",[t._v("每次读写的只能是连续的多个块， 且这些块读入内存后在内存中也必须是连续的")]),t._v("） 4.")]),t._v(" "),v("li",[t._v("数据的流向"),v("strong",[t._v("不再需要经过CPU")]),t._v(" ，"),v("strong",[t._v("读操作（数据输入）：I/O设备->内存 、写操作（数据输出）：内存->I/O设备")])]),t._v(" "),v("li",[t._v("优点：数据传输以“块”为单位，CPU介入频率进一步降低。数据的传输不再需要先经过CPU再写入内存，数据传输效率进一步增加。CPU和I/O设备的并行性得到提升。")]),t._v(" "),v("li",[t._v("缺点：CPU每发出一条I/O指令，"),v("strong",[t._v("只能读/写一个或多个连续的数据块。 如果要读/写多个离散存储的数据块，或者要将数据分别写到不同的内存区域时，CPU要分别发出多条 I/O指令，进行多次中断处理才能完成。")])])]),t._v(" "),v("h3",{attrs:{id:"io软件层次结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#io软件层次结构"}},[t._v("#")]),t._v(" IO软件层次结构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108105559056.png",alt:"image-20231108105559056"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108110700835.png",alt:"image-20231108110700835"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"spooling假脱机技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spooling假脱机技术"}},[t._v("#")]),t._v(" Spooling假脱机技术")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108111729064.png",alt:"image-20231108111729064"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("为什么称为“脱机”——"),v("strong",[t._v("脱离主机的控制进行的输入/输出操作。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108111946951.png",alt:"image-20231108111946951"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("“假脱机技术”，又称“SPOOLing 技术”是用软件的方式模拟脱机技术。")]),t._v(" "),v("p",[v("strong",[t._v("在磁盘上开辟出两个 存储区域——“输入井”和“输出井”")])]),t._v(" "),v("p",[t._v("“输入井”模拟 脱机输入时的磁 带，用于收容I/O 设备输入的数据")]),t._v(" "),v("p",[t._v("“输出井”模拟脱机输出时的磁带，用于收容用户进程输出的数据")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108112110197.png",alt:"image-20231108112110197"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108112139127.png",alt:"image-20231108112139127"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108112159678.png",alt:"image-20231108112159678"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108112621218.png",alt:"image-20231108112621218"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("虽然系统中只有一个台打印机，但每个进程提出打印请求时"),v("strong",[t._v("系统都会为在输出井中为其分配一个存储区（相当于分配了一个逻辑设备）")]),t._v("，使"),v("strong",[t._v("每个用户进程都觉得自己在独占 一台打印机，从而实现对打印机的共享。")])]),t._v(" "),v("p",[v("strong",[t._v("SPOOLing 技术可以把一台物理设备虚拟成逻辑上的多台设备，可将独占式设备改造成共享设备")])]),t._v(" "),v("h3",{attrs:{id:"缓冲区管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区管理"}},[t._v("#")]),t._v(" 缓冲区管理")]),t._v(" "),v("p",[v("strong",[t._v("缓冲区是一个存储区域")]),t._v("，可以由"),v("strong",[t._v("专门的硬件寄存器组成，也可利用内存作为缓冲区")]),t._v("。")]),t._v(" "),v("p",[t._v("使用硬件作为缓冲区的成本较高，容量也较小，一般仅用在对速度要求非常高的场合（如存储器 管理中所用的联想寄存器，由于对页表的访问频率极高，因此使用速度很快的联想寄存器来存放 页表项的副本）")]),t._v(" "),v("p",[v("strong",[t._v("一般情况下，更多的是利用内存作为缓冲区，“设备独立性软件”的缓冲区管理就是要组织管理 好这些缓冲区")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://czynotebook.oss-cn-beijing.aliyuncs.com/notebook/image-20231108113728963.png",alt:"image-20231108113728963"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("当缓冲区数据非空时，不能往缓冲区冲入数据，只能从缓冲区把数据传出；")])]),t._v(" "),v("p",[v("strong",[t._v("当缓冲区为空时， 可以往缓冲区冲入数据，但必须把缓冲区充满以后，才能从缓冲区把数据传出。")])]),t._v(" "),v("h3",{attrs:{id:"磁盘调度算法-todo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#磁盘调度算法-todo"}},[t._v("#")]),t._v(" 磁盘调度算法 TODO")])])}),[],!1,null,null,null);v.default=o.exports}}]);