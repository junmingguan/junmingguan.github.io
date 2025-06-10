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
    \frac{\mathbb{E}[\theta \mid Z=z]}{\mathbb{E}[\theta \mid Z=z-1]} \geq 1,
$$
which amounts to showing

$$
    \frac{\int e^{-\theta} \theta^{z+1}dG(\theta)}{\int e^{-\theta}\theta^{z}dG(\theta)} \geq \frac{\int e^{-\theta} \theta^{z}dG(\theta)}{\int e^{-\theta} \theta^{z-1}dG(\theta)}.
$$

**Idea**: Consider the measure \\(dH_{z}(\theta) = e^{-\theta} \theta^{z}dG(\theta)\\). It boils down to showing \\(h(z) = \int dH_z\\) is log-convex, so that \\(\text{log}(h(z+1))+\text{log}(h(z-1)) \geq 2\text{log}(h(z))\\).

Note that
$$
    \frac{d }{dz}h(z) = \int e^{-\theta} \theta^{z}\text{ln}\theta dG(\theta) = \mathbb{E}_{H_{z}} [\text{ln}\theta].
$$

This is because the function \\(a(\theta) = e^{-\theta} \theta^{z} \text{ln} \theta\\) is bounded (think about the Gamma function) hence integrable with respect to $$G$$, a probability measure, so one can differentiate the expectation (see Klenke). Similarly,
\\(e^{-\theta} \theta^{z} (\text{ln} \theta)^2\\) is bounded, and thus
$$
     \frac{d^{2} }{dz^{2}}h(z) = \int e^{-\theta} \theta^{z}(\text{ln}\theta)^{2} dG(\theta) = \mathbb{E}_{H_{z}} [(\text{ln}\theta)^{2}].
$$

By Cauchy-Schwarz, we have
$$
    (\mathbb{E}_{H_{z}} [\text{ln} \theta])^{2} = h^{(1)}(z)^{2} \leq \mathbb{E}_{H_{z}}[1]\mathbb{E}_{H_{z}}[(\text{ln} \theta)^{2}] = h(z)h^{(2)}(z).
$$

So $$h(z)$$ is log-convex, due to the fact that

$$
    \big( \text{log}(h(z)) \big)^{''} = \frac{h(z)h^{(2)}(z)-h^{(1)}(z)^2}{h^{(1)}(z)^{2}} \geq 0.
$$