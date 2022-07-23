---
title: "TP 202: Distributed Systems in Rust"
date: 2022-08-24T00:00:00+08:00
tags: ["Rust", "Raft", "Percolator"]
toc: true
---

## Prelude

Long time no see ~ 最近在重拾 Rust，之前看完 [The Book] 就忙实习去了，没空 coding 约等于白学。吸取了教训，这回跟着 [Cheats] 和 [Course] 边学边写，和编译器玩得十分愉快，这里也推荐一下 [PNGme] 和 [Too Many Lists]。

摸螃蟹🦀成瘾后想找个 Lab 继续摸，奈何 Rust 偏冷，优质的 Lab 少得可怜。拔剑四顾心茫然之际，某锈蚀裙友推荐了 PingCAP 的 [Talent Plan]，因为对分布式有点兴趣，最后选了 [TP 202] 开摸。摸 Lab 前后用了差不多一个月，整个过程非常亦可赛艇，这里简单 review 一下 qwq

## Raft Lab

[Raft Lab] 是 [TP 202] 的核心 Lab，源自 [MIT 6.824] 的 [Lab 2] 和 [Lab 3]。[MIT 6.824] 之前我也摸过，但由于当时只有 Win 环境，还没开始就结束了（悲）。和 [MIT 6.824] 相比，实现 [Raft Lab] 时并发部分更为复杂：前者基于 Go 的有栈（Stackful）协程模型，用 Goroutine 直接乱杀；后者则基于 Rust 的无栈（Stackless）协程模型，需要用 Futures 和 `async` / `await` 语法等。

### Lab 2: Raft

[Raft] 是一种可容错（Fault Tolerant）的[共识（Consensus）]算法，用于解决分布式中多节点对某个提案（Proposal）达成一致的问题。[Raft] 的提出是为了替代 [Paxos]，它强调可理解（Understandable）和符合直觉，使算法更易于实现。

Lab 2 需要参考 [Raft Paper] 实现基本的 [Raft]，个人觉得算法和实现还算简单，但由于测试有一定随机性，debug 时会比较痛苦。和我一样英文苦手读不下 Paper 可以戳 [Raft zh-CN]，想学习更多有关 [Raft] 的知识可以戳 [The Raft Consensus Algorithm]。

#### Part A: Leader Election

#### Part B: Log

#### Part C: Persistence

#### Part D: Log Compaction

### Lab 3: KvRaft

#### Part A: Key/Value Service without Snapshots

#### Part B: Key/Value Service with Snapshots

## Percolator Lab

[The Book]: https://doc.rust-lang.org/book/
[Cheats]: https://cheats.rs
[Course]: https://course.rs
[PNGme]: https://picklenerd.github.io/pngme_book/
[Too Many Lists]: https://rust-unofficial.github.io/too-many-lists/
[Talent Plan]: https://tidb.net/talent-plan
[TP 202]: https://github.com/pingcap/talent-plan/tree/master/courses/dss
[Raft Lab]: https://github.com/pingcap/talent-plan/tree/master/courses/dss/raft
[MIT 6.824]: https://pdos.csail.mit.edu/6.824/
[Lab 2]: https://pdos.csail.mit.edu/6.824/labs/lab-raft.html
[Lab 3]: https://pdos.csail.mit.edu/6.824/labs/lab-kvraft.html
[Raft]: https://en.wikipedia.org/wiki/Raft_(algorithm)
[共识（Consensus）]: https://en.wikipedia.org/wiki/Consensus_(computer_science)
[Paxos]: https://en.wikipedia.org/wiki/Paxos_(computer_science)
[Raft Paper]: https://raft.github.io/raft.pdf
[Raft zh-CN]: https://github.com/maemual/raft-zh_cn
[The Raft Consensus Algorithm]: https://raft.github.io
[Percolator Lab]: https://github.com/pingcap/talent-plan/tree/master/courses/dss/percolator
