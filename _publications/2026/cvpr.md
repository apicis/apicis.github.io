---
title:          "Lifelong Imitation Learning with Multimodal Latent Replay and Incremental Adjustment"
selected:       true
pub:            "Conference on Computer Vision and Pattern Recognition (CVPR)"
pub_date:       "2026"
abstract: >-
  We introduce a lifelong imitation learning framework that enables continual policy refinement across sequential tasks under realistic memory and data constraints. Our approach departs from conventional experience replay by operating entirely in a multimodal latent space, where compact representations of visual, linguistic, and robot's state information are stored and reused to support future learning. To further stabilize adaptation, we introduce an incremental feature adjustment mechanism that regularizes the evolution of task embeddings through an angular margin constraint, preserving inter-task distinctiveness. Our method establishes a new state of the art in the LIBERO benchmarks, achieving 10-17 point gains in AUC and up to 65% less forgetting compared to previous leading methods. Ablation studies confirm the effectiveness of each component, showing consistent gains over alternative strategies. The code is available at: https://github.com/yfqi/lifelong_mlr_ifa
cover: /assets/images/covers/cvpr_2026.png
authors:
  - F. Yu
  - M. Tiezzi
  - T. Apicella
  - C. Beyan
  - V. Murino
links:
  arXiv: https://doi.org/10.48550/arXiv.2603.10929
  code: https://github.com/yfqi/lifelong_mlr_ifa
---
