---
title:          "Segmenting Object Affordances: Reproducibility and Sensitivity to Scale"
selected:       false
pub:            "European Conference on Computer Vision Workshops (ECCVW)"
pub_date:       "2024"
order:           2024-01
abstract: >-
  Visual affordance segmentation identifies image regions of an object an agent can interact with. Existing methods re-use and adapt learning-based architectures for semantic segmentation to the affordance segmentation task and evaluate on small-size datasets. However, experimental setups are often not reproducible, thus leading to unfair and inconsistent comparisons. In this work, we benchmark these methods under a reproducible setup on two single objects scenarios, tabletop without occlusions and hand-held containers, to facilitate future comparisons. We include a version of a recent architecture, Mask2Former, re-trained for affordance segmentation and show that this model is the best-performing on most testing sets of both scenarios. Our analysis shows that models are not robust to scale variations when object resolutions differ from those in the training set.
cover: /assets/images/covers/eccvw_2024.png
authors:
  - T. Apicella
  - A. Xompero
  - P. Gastaldo
  - A. Cavallaro
links:
  arXiv: https://doi.org/10.48550/arXiv.2409.01814
  website: https://apicis.github.io/aff-seg/
  code: https://github.com/apicis/aff-seg
  trained models: https://doi.org/10.5281/zenodo.13996314
  eval toolkit: https://github.com/apicis/aff-seg-eval 
---
