---
title:          "Embodied Image Captioning: Self-supervised Learning Agents for Spatially Coherent Image Descriptions"
selected:       false
pub:            "International Conference on Computer Vision (ICCV)"
pub_date:       "2025"
order:           2025-01
abstract: >-
  We present a self-supervised method to improve an agent's abilities in describing arbitrary objects while actively exploring a generic environment. This is a challenging problem, as current models struggle to obtain coherent image captions due to different camera viewpoints and clutter. We propose a three-phase framework to fine-tune existing captioning models that enhances caption accuracy and consistency across views via a consensus mechanism. First, an agent explores the environment, collecting noisy imagecaption pairs. Then, a consistent pseudo-caption for each object instance is distilled via consensus using a large language model. Finally, these pseudo-captions are used to fine-tune an off-the-shelf captioning model, with the addition of contrastive learning. We analyse the performance of the combination of captioning models, exploration policies, pseudo-labeling methods, and fine-tuning strategies, on our manually labeled test set. Results show that a policy can be trained to mine samples with higher disagreement compared to classical baselines. Our pseudo-captioning method, in combination with all policies, has a higher semantic similarity compared to other existing methods, and fine-tuning improves caption accuracy and consistency by a significant margin. Code and test set annotations available at https://hsp-iit.github.io/embodiedcaptioning/
cover: /assets/images/covers/iccv_2025.png
authors:
  - T. Galliena
  - T. Apicella
  - S. Rosa
  - P. Morerio
  - A. Del Bue
  - L. Natale
links:
  arXiv: https://doi.org/10.48550/arXiv.2504.08531
  website: https://hsp-iit.github.io/embodied-captioning/
  code: https://github.com/hsp-iit/embodied-captioning
  testing set: https://huggingface.co/datasets/TommyBsk/Embodied-Captioning
---
