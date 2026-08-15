---
title:          "Memory-Augmented Vision-Language Agents for Persistent and Semantically Consistent Object Captioning"
selected:       true
pub:            "Preprint"
pub_date:       "2026"
order:           2026-02
abstract: >-
  Vision-Language Models (VLMs) often yield inconsistent descriptions of the same object across viewpoints, hindering the ability of embodied agents to construct consistent semantic representations over time. Previous methods resolved inconsistencies using offline multi-view aggregation or multi-stage pipelines that decouple exploration, data association, and caption learning, with limited capacity to reason over previously observed objects. In this paper, we introduce a unified, memory-augmented Vision-Language agent that simultaneously handles data association, object captioning, and exploration policy within a single autoregressive framework. The model processes the current RGB observation, a top-down explored map, and an object-level episodic memory serialized into object-level tokens, ensuring persistent object identity and semantic consistency across extended sequences. To train the model in a self-supervised manner, we collect a dataset in photorealistic 3D environments using a disagreement-based policy and a pseudo-captioning model that enforces consistency across multi-view caption histories. Extensive evaluation on a manually annotated object-level test set, demonstrate improvements of up to +11.86% in standard captioning scores and +7.39% in caption self-similarity over baseline models, while enabling scalable performance through a compact scene representation. Code, model weights, and data are available at https://hsp-iit.github.io/epos-vlm/.
cover: /assets/images/covers/epos_vlm.png
authors:
  - T. Galliena
  - S. Rosa
  - T. Apicella
  - P. Morerio
  - A. Del Bue
  - L. Natale

links:
  arXiv: https://doi.org/10.48550/arXiv.2603.24257
  website: https://hsp-iit.github.io/epos-vlm/
  # code: 
---
