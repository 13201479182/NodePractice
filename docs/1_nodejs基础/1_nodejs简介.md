# Node.js简介及简单使用功能

1. Node.js概述、特点以及适用场景
    - 概述 
      ```
        一个采用了GoogleV8引擎和事件驱动的javascript服务端运行环境,可脱离传统服务器独立运行。
      ``` 
    - 特点 
      ```
        1. 它是一个服务端的javascript运行环境
        2. 它依赖谷歌的v8引擎解释和执行代码
        3. 事件循环驱动 
        4. 非阻塞型异步IO
        5. 单线程(js的引擎只有一个实例，且在nodejs的主线程中执行, 错误会引起整个应用的退出)
        6. 轻量可伸缩
      ```
    - 适用场景 
      ```
        1. 擅长处理IO,即高并发应用场景
        2. 不擅长做计算,单线程劣势

        应用: 长连接的实时交互应用程序, 如聊天室、考试系统等
      ``` 
    - 参考资料
      > [1. 理解一下5种IO模型、阻塞IO和非阻塞IO、同步IO和异步IO](https://cloud.tencent.com/developer/article/1684951)

      > [2. 一文吃透异步I/O和事件循环](https://juejin.cn/post/7002106372200333319)

      > [3. Linux IO模式及 select、poll、epoll详解](https://segmentfault.com/a/1190000003063859)

2. Node.js 全局对象
    - 全局对象的定义
      - 全局对象的属性
      - 隐士定义的变量
      - 在最外层定义的对象
    - 常用的全局变量和全局函数
      ```
        1. __filename:  当前正在执行脚本的文件名
        2. __dirname:   当前正在执行脚本所在的目录
      ```
    - 执行进程相关的信息:
      ```
        Process
        - 属性
          - 1. abort
            用途: 终止当前进程
          - 2. arch
            用途: 获取运行当前进程对应的cpu架构 x64
          - 3. argv
            用途: 获取当前进程运行前传入的命令行参数
          - 4. chdir
            用途: 更改当前进程的工作目录
          - 5. cpuUseage
            用途: 获取当前进程用户和系统对cpu的利用时间(微秒)
          - 6. env
            用途: 获取当前用户环境的环境变量,不会映射至进程外
          - 7. execArgv
            用途: 获取当前进程运行前传入的命令行选项
          - 8. execPath
            用途: 获取执行当前进程对应的node可执行文件的绝对路径
          - 9. exit
            用途: 指示当前进程尽快退出
          - 10. exitCode
            用途: 全局配置当前进程正常exit时的状态码
          - 11. hrtime.bigint
            用途: 以纳秒为单位返回大整型,用于计算差值
          - 12. pid
            用途: 当前进程的标识,由操作系统分配,无法配置
          - 13. kill
            用途: 发送特定信号至具体的进程标识
          - 14. memoryUsage
                - rss: 当前进程分配到的内存总量
                - heapTotal: 当前v8分配到的的内存总量
                - heapUsed: 当前v8使用的内存总量
                - external: 当前管理v8的c++对象和arrayBuffers对象使用的内存总量
                - arrayBuffers: ArrayBuffer和SharedArrayBuffer使用的内存总量
          - 15. queueMicrotask(global)
            用途: 用于将任务添加至微任务队列,执行顺序优于nextTick,等同promise
          - 16. nextTick
            用途: 用于将任务添加至nextTick队列,执行顺序低于promise
          - 17. pid
            用途: 获取当前进程号
          - 18. ppid
            用途: 获取当前父进程号
          -

        - 事件
      ```
  