---
layout: post
title: Poisson f-modeling
date: 2025-4-12 17:30:00-0400
description: Monotonicity of Poisson posterior mean
tags: empirical-bayes math
categories: notes
related_posts: false
featured: true
---

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  TeX: {
    Macros: {
      RR: "{\\mathbb{R}}",
      EE, "{\\mathbb{E}}",
      vec: ["{\\mathbf{#1}}", 1],
      abs: ["\\left|#1\\right|", 1]
    }
  }
});
</script>

Suppose \\( Z\sim \text{Poi}(\theta)\\) and \\(\theta\sim G\in \mathcal{P}(\mathbb{R}_+)\\). The posterior mean of \\(\theta \mid Z=z\\) is given by:
$$
    \mathbb{E}[\theta \mid Z=z] = \frac{(z+1)f_G(z+1)}{f_G(z)},
$$
where
$$
    f_G(z) = \int e^{-\theta} \theta^{z}/z!dG(\theta).
$$

We want to show that $$\mathbb{E}[\theta \mid Z=z]$$ is monotonic in \\(Z=z\\). To do so, we want to show
$$
    \mathbb{E}[\theta \mid Z=z] \geq \mathbb{E}[\theta \mid Z=z-1],
$$
which amounts to showing

$$
\begin{equation}
 \frac{\int e^{-\theta} \theta^{z+1}dG(\theta)}{\int e^{-\theta}\theta^{z}dG(\theta)} \geq \frac{\int e^{-\theta} \theta^{z}dG(\theta)}{\int e^{-\theta} \theta^{z-1}dG(\theta)}. \label{eq:target}    
\end{equation}
$$

**Idea**: consider the measure $$dH(\theta)=e^{-\theta} \theta^{z-1} dG(\theta)$$. By Cauchy-Schwarz, we have

$$
    \left[ \int \theta \,dH(\theta)\right]^2 \leq \int \theta^2\, dH(\theta) \int 1\, dH(\theta),
$$

which is equivalent to $$\eqref{eq:target}$$.