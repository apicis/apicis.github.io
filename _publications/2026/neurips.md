---
title:          "HIDRA: Hierarchical Dual-Routing Attention for Replay-Free Lifelong Imitation Learning"
selected:       true
pub:            "Conference on Neural Information Processing Systems (NeurIPS)"
pub_date:       "2026"
order:           2026-09
abstract: >-
  Robotic agents operating in real-world environments must adapt continuously from a stream of multimodal demonstrations, often under constraints that preclude storing or revisiting past data. In this replay-free, single-pass lifelong imitation learning setting, sequential updates can progressively distort the representation space, making expert-based approaches particularly sensitive to routing interference, causing expert selection to degrade over time. We propose HIDRA, a structured routing framework that mitigates this issue through a hierarchical dual-attention mechanism, which decouples instruction-level expert retrieval from context-dependent refinement. To further stabilize routing under representation drift, HIDRA introduces a key-level geometric regularization that enforces both alignment within tasks and separation across tasks. The resulting approach enables reliable expert selection while supporting an expandable set of experts for continual adaptation. We evaluate HIDRA on several LIBERO benchmark suites, including more challenging variants with heterogeneous task sequences and paraphrased language instructions. Our approach consistently outperforms both replay-free and replay-based baselines, improving AUC and forward transfer while maintaining low forgetting, with stronger gains under high interference and language variation. Code will be released.
cover: /assets/images/covers/neurips_2026.png
authors:
  - F. Yu
  - M. Tiezzi
  - C. Beyan
  - T. Apicella
  - V. Murino
links:
  # arXiv: 
  code: https://github.com/yfqi/HIDRA 
---
