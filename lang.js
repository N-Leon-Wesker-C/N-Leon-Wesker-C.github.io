// lang.js
const translations = {
  zh: {
    nav_about:"关于我",
    nav_research:"研究方向",
    nav_projects:"项目经历",
    nav_blog:"博客",
    nav_contact:"联系我",

    hero_badge:"北京交通大学 · 数据科学 · 2027届",
    hero_tag:"系统 · AI基础设施 · 硬件解耦",
    hero_desc:"我专注于操作系统与AI基础设施的交叉领域研究，核心方向是利用硬件解耦技术优化大规模大模型推理服务的资源效率与性能。",
    hero_about:"了解更多",
    hero_cv:"个人简历",

    about_label:"关于我",
    about_role:"2027fall",
    cv:"简历 PDF",
    bio:`我是北京交通大学数据科学专业大三本科生，预计2027年6月毕业。我的研究方向聚焦于操作系统、分布式系统与AI基础设施的交叉领域。
我主要探索<strong>硬件解耦</strong>技术如何提升大模型推理服务的资源利用率、降低延迟，并优化端到端服务质量。
我具备RDMA通信、分布式共识（Raft）、操作系统内核开发（RISC‑V/ByteOS）、LSM‑Tree存储引擎等实战经验，目前正在研究大模型KV缓存的GPU内存优化。
我正在积极寻找<strong>科研实习机会与2027年博士入学机会</strong>。`,

    research_label:"研究方向",
    research_title:"核心研究领域",
    r1_title:"硬件解耦",
    r1_desc:"将计算、内存、存储解耦为独立网络组件，重新设计面向解耦硬件的操作系统抽象。",
    r2_title:"大模型推理系统",
    r2_desc:"分离式推理架构、KV缓存管理、RDMA跨节点传输、SLO感知调度，面向高吞吐低延迟场景。",
    r3_title:"AI负载操作系统",
    r3_desc:"重新设计调度、内存管理与I/O路径，让传统系统更好地支撑现代AI工作负载。",
    r4_title:"分布式存储",
    r4_desc:"分布式键值存储、一致性与容错设计，是大模型缓存与持久化存储的关键支撑技术。",

    proj_label:"项目经历",
    proj_title:"科研与工程项目",
    p1_tag:"操作系统 · RISC‑V · 竞赛",
    p1_title:"AIOS — 面向AI任务的操作系统",
    p1_desc:"基于RISC‑V架构ByteOS扩展AI感知调度器，新增任务标识字段与动态优先级机制，实现无侵入式系统调用接口，在混合负载下验证效果。",
    p2_tag:"GPU · Triton · 内核优化",
    p2_title:"FlashAttention‑2 前向核实现",
    p2_desc:"使用Triton复现FA‑2前向计算，推导在线softmax等价性，实现分块核降低内存复杂度，基于Roofline模型分析A100性能瓶颈。",
    p3_tag:"分布式系统 · 存储",
    p3_title:"高性能分布式键值存储系统",
    p3_desc:"基于Raft实现分布式共识，C++实现LSM‑Tree存储引擎，支持O_DIRECT、mmap，使用cgroups v2实现多租户隔离，写放大≤10倍。",
    p4_tag:"RDMA · AVX‑512 · 分布式计算",
    p4_title:"异构分布式计算引擎",
    p4_desc:"实现多进程架构，RDMA结果传输（P99延迟降低60%），AVX‑512向量化核（4倍吞吐），O(log n) DAG调度，可直接用于大模型KV缓存迁移。",

    nav_blogs:"博客",
    blog_label: "博客",
    blog_title: "技术博客",
    blog1_tag: "系统 · 随笔",
    blog1_title: "硬件解耦与大模型推理的思考",
    blog1_desc: "记录我对硬件解耦、内存池化、RDMA 加速 LLM 推理的理解与实践。",
    blog2_tag: "学习 · 笔记",
    blog2_title: "操作系统学习笔记：调度与虚拟化",
    blog2_desc: "整理调度器、内存管理、系统虚拟化的核心知识点与实现思路。",

    contact_label:"联系",
    contact_title:"联系方式",
    contact_intro:"欢迎通过邮件或 GitHub 与我联系，我会尽快回复。",

    quote:"“问题不在于硬件是否解耦——<br>而在于软件应该如何跟上。”",
    quote_attr:"灵感来自 LegoOS, OSDI '18",

    footer_logo:"聂畅 · 系统研究",
    footer_copy:"23271071@bjtu.edu.cn · 北京交通大学 · 2027届"
  },
  en: {
    nav_about:"About",
    nav_research:"Research",
    nav_projects:"Projects",
    nav_blog:"Blog",
    nav_contact:"Contact",

    hero_badge:"Beijing Jiaotong University · Data Science · Class of 2027",
    hero_tag:"Systems · AI Infrastructure · Disaggregation",
    hero_desc:"I build systems at the boundary of operating systems and AI infrastructure. My focus is how disaggregated hardware reshapes large-scale LLM serving.",
    hero_about:"About Me",
    hero_cv:"CV (PDF)",

    about_label:"About",
    about_role:"PhD Applicant · 2027",
    cv:"CV (PDF)",
    bio:`I am a third-year undergraduate in Data Science at Beijing Jiaotong University (expected graduation: June 2027). My research lies at the intersection of operating systems, distributed systems, and AI infrastructure.
Specifically, I explore how <strong>hardware disaggregation</strong> improves resource utilization and reduces inference latency for large-scale LLM serving.
I have hands-on experience with <strong>RDMA communication, distributed consensus (Raft), OS kernel development (RISC-V/ByteOS), and LSM-tree storage engines</strong>. I am currently working on GPU memory optimization for LLM KV cache.
I am actively seeking <strong>research internships and PhD positions for Fall 2027</strong>.`,

    research_label:"Research Interests",
    research_title:"Research Directions",
    r1_title:"Hardware Disaggregation",
    r1_desc:"Decoupling CPU, memory, and storage into network-attached components. Redesigning OS abstractions for disaggregated hardware.",
    r2_title:"LLM Inference Systems",
    r2_desc:"Disaggregated serving with separate Prefill/Decode stages. KV cache management, cross-node RDMA, and SLO-aware scheduling.",
    r3_title:"OS for AI Workloads",
    r3_desc:"Redesigning scheduling, memory management, and I/O for AI inference. Bridging classical systems and modern AI infrastructure.",
    r4_title:"Distributed Storage",
    r4_desc:"Consistency, fault tolerance, and I/O tradeoffs in distributed KV stores. Critical for persistent KV cache and checkpoints in LLM pipelines.",

    nav_blogs:"Blogs",
    blog_label: "Blog",
    blog_title: "Technical Blog",
    blog1_tag: "Systems · Notes",
    blog1_title: "Hardware Disaggregation for LLM Inference",
    blog1_desc: "My thoughts on hardware disaggregation, memory pooling, and RDMA for large model inference.",
    blog2_tag: "Study · Notes",
    blog2_title: "OS Study Notes: Scheduling & Virtualization",
    blog2_desc: "Key concepts of OS scheduling, memory management, and virtualization.",

    proj_label:"Projects",
    proj_title:"Project Experience",
    p1_tag:"OS · RISC-V · Competition",
    p1_title:"AIOS — AI-Aware Operating System",
    p1_desc:"Extended ByteOS (RISC-V) with an AI-aware scheduler. Added PCB fields for AI task identification and dynamic priority boosting; implemented custom syscalls for zero-intrusion annotation.",
    p2_tag:"GPU · Triton · Kernel Optimization",
    p2_title:"FlashAttention-2 Forward Kernel",
    p2_desc:"Reproduced FlashAttention-2 forward pass in Triton. Derived online softmax equivalence; implemented block-tiled kernel to reduce memory from O(N²) to O(N).",
    p3_tag:"Distributed Systems · Storage",
    p3_title:"High-Performance Distributed KV Store",
    p3_desc:"Built a distributed KV store with Raft consensus (Go, Jepsen validated) and C++ LSM-tree engine (O_DIRECT write, mmap read). Multi-tenant isolation via cgroups v2.",
    p4_tag:"RDMA · AVX-512 · Distributed Computing",
    p4_title:"Heterogeneous Distributed Compute Engine",
    p4_desc:"Multi-process engine with RDMA result transfer (P99 60% lower than TCP) and AVX-512 kernels (4× throughput). O(log n) DAG scheduler.",

    contact_label:"Contact",
    contact_title:"Contact Me",
    contact_intro:"Feel free to reach out via email or GitHub.",

    quote:"\"The question is not whether hardware should be disaggregated —<br>it is how the software should follow.\"",
    quote_attr:"— Inspired by LegoOS, OSDI '18",

    footer_logo:"Chang Nie · Systems Research",
    footer_copy:"23271071@bjtu.edu.cn · Beijing Jiaotong University · Class of 2027"
  }
};