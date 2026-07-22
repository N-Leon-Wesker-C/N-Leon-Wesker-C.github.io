// ===== 英文翻译表 =====
// HTML 中的中文是唯一数据源，这里只存对应的英文
// 切中文 → 自动恢复 HTML 原文，切英文 → 从这里取值替换
// 新增内容只需：① HTML 写中文 + data-i18n="key"  ② 在这里加一行英文

const translations = {

  // ---- 导航 ----
  nav_about: "About",
  nav_research: "Research",
  nav_projects: "Projects",
  nav_blog: "Blog",
  nav_contact: "Contact",

  // ---- Hero ----
  hero_badge: "Beijing Jiaotong University · Data Science · Class of 2027",
  hero_tag: "Systems · AI Infrastructure · Disaggregation",
  hero_desc: "I focus on the intersection of operating systems and AI infrastructure, with a core focus on leveraging hardware disaggregation to optimize resource efficiency and performance for large-scale LLM inference serving.",
  hero_about: "About Me",
  hero_cv: "CV (PDF)",

  // ---- 关于我 ----
  about_label: "About",
  about_role: "PhD Applicant · Fall 2027",
  cv: "CV (PDF)",
  bio: `I am a third-year undergraduate in Data Science at Beijing Jiaotong University (expected graduation: June 2027). My research lies at the intersection of operating systems, distributed systems, and AI infrastructure.
I primarily explore how <strong>hardware disaggregation</strong> improves resource utilization, reduces latency, and optimizes end-to-end quality of service for large-scale LLM inference serving.
I have hands-on experience with RDMA communication, distributed consensus (Raft), OS kernel development (RISC-V/ByteOS), and LSM-tree storage engines. I am currently working on GPU memory optimization for LLM KV cache.
I am actively seeking <strong>research internships and PhD positions for Fall 2027</strong>.`,

  // ---- 研究方向 ----
  research_label: "Research Interests",
  research_title: "Research Directions",
  r1_title: "Hardware Disaggregation",
  r1_desc: "Decoupling compute, memory, and storage into independent network-attached components; redesigning OS abstractions for disaggregated hardware.",
  r2_title: "LLM Inference Systems",
  r2_desc: "Disaggregated inference architecture, KV cache management, RDMA-based cross-node transfer, SLO-aware scheduling for high-throughput and low-latency serving.",
  r3_title: "OS for AI Workloads",
  r3_desc: "Redesigning scheduling, memory management, and I/O paths to transform traditional systems into hyper-scale heterogeneous resource orchestration engines for AI compute clusters.",
  r4_title: "Distributed Systems",
  r4_desc: "Scaling beyond single-machine hardware limits through horizontal scaling, achieving high performance, high availability, and massive data storage.",

  // ---- 项目经历 ----
  proj_label: "Projects",
  proj_title: "Project Experience",
  p1_tag: "OS · RISC-V · Competition",
  p1_title: "AIOS — AI-Aware Operating System",
  p1_desc: "Extended ByteOS (RISC-V) with an AI-aware scheduler. Added task identification fields and dynamic priority boosting; implemented non-intrusive syscall interface; validated under mixed workloads.",
  p2_tag: "GPU · Triton · Kernel Optimization",
  p2_title: "FlashAttention-2 Forward Kernel Implementation",
  p2_desc: "Reproduced FA-2 forward pass in Triton. Derived online softmax equivalence; implemented block-tiled kernel to reduce memory complexity; analyzed A100 performance bottlenecks via Roofline model.",
  p3_tag: "Distributed Systems · Storage",
  p3_title: "High-Performance Distributed Key-Value Store",
  p3_desc: "Implemented Raft-based distributed consensus with Go; C++ LSM-tree storage engine with O_DIRECT and mmap; multi-tenant isolation via cgroups v2; write amplification ≤ 10×.",
  p4_tag: "RDMA · AVX-512 · Distributed Computing",
  p4_title: "Heterogeneous Distributed Compute Engine",
  p4_desc: "Multi-process architecture with RDMA result transfer (P99 latency reduced by 60%); AVX-512 vectorized kernels (4× throughput); O(log n) DAG scheduler; applicable to LLM KV cache migration.",
  p5_tag: "LLM · RAG · Spring Boot",
  p5_title: "LLM-Based Intelligent Payment Risk Control System",
  p5_desc: "Designed and implemented an LLM+RAG-driven intelligent risk control backend; refactored core payment services using Go + Spring Boot.",

  // ---- 博客 ----
  blog_label: "Blog",
  blog_title: "Technical Blog",

  // ---- 生活博客 ----
  life_label: "Life",
  life_title: "Day-to-Day",
  blog1_tag: "Systems · Essay",
  blog1_title: "Thoughts on Hardware Disaggregation and LLM Inference",
  blog1_desc: "Notes on hardware disaggregation, memory pooling, and RDMA-accelerated LLM inference.",
  blog1_body_p1: "Hardware disaggregation decouples compute, memory, and storage into independent network-attached components, fundamentally breaking the constraints of traditional monolithic servers. This architecture is particularly well-suited for resource-intensive workloads such as large language model inference.",
  blog1_body_p2: "In LLM deployment scenarios, KV caches consume substantial GPU memory. By leveraging hardware disaggregation with RDMA-based cross-node transfer, caches can be offloaded to remote memory pools, significantly reducing per-GPU memory pressure while improving overall cluster resource utilization.",
  blog1_body_p3: "Compared to traditional TCP communication, RDMA bypasses the OS kernel to reduce copy overhead, effectively lowering cross-node data transfer latency. It is one of the core optimization directions for distributed LLM inference.",
  blog2_tag: "Study · Notes",
  blog2_title: "OS Study Notes: Scheduling and Virtualization",
  blog2_desc: "Core concepts of scheduler, memory management, and system virtualization.",
  blog2_body_p1: "Process scheduling is a core module of operating systems. Different scheduling algorithms target different workload scenarios. General-purpose systems commonly use CFS (Completely Fair Scheduler), while AI-specialized systems customize real-time scheduling policies for compute-intensive workloads.",
  blog2_body_p2: "Memory management handles the mapping between virtual and physical addresses. Paging and segmentation mechanisms ensure process isolation, and they also serve as the foundational layer for containerization and virtualization technologies.",
  blog2_body_p3: "Hardware virtualization leverages CPU virtualization instruction sets to enable multiple virtual machines to run in parallel, widely adopted in cloud servers and distributed clusters.",

  // ---- 联系 ----
  contact_label: "Contact",
  contact_title: "Contact Me",
  contact_intro: "Feel free to reach out via email or GitHub. I will respond as soon as possible.",

  // ---- 名言 ----
  quote: '"The question is not whether hardware should be disaggregated —<br>it is how the software should follow."',
  quote_attr: "— Inspired by LegoOS, OSDI '18",

  // ---- 页脚 ----
  footer_logo: "Chang Nie · Systems Research",
  footer_copy: "23271071@bjtu.edu.cn · Beijing Jiaotong University · Class of 2027"
};
