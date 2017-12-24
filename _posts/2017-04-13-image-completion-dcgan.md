---
title: "Image Completion using Deep Convolutional Generative Adversarial Network (DCGAN)"
layout: post
date: 2017-04-13
image:
headerImage: false
tag:
- generative adversarial network
- deep convolutional generative neural network
- gan
- dcgan
category: blog
author: saikatbasak
description:
published: false
---

Index
- [Introduction](#introduction)
- [DCGAN Building Blocks](#dcgan-building-blocks)

## Introduction

Jigsaw puzzles, love'em or hate'em, they take a significant amount of space in your childhood memory, inside the big brown cardboard box lying in your basement and in a corner of your mom's Windows 7 desktop. We loved to solve jigsaw puzzles as kids, at least I did.

<div style="text-align: center;"><img src="/public/img/life-puzzle.jpg" alt="life_puzzle"></div>

So, what is the strategy behind a perfect solution for a jigsaw puzzle? Well, you have a poster as a reference and you try to recreate that using pieces of cardboard that can be attached to each other. And while doing that, you constantly look at the content that is in the reference. You try to build up parts of the puzzle representing different content and choose the blocks that are visually similar to the part of the reference image that you are trying to recreate.

So, **content-awareness** and **visual similarity** are the to factors that lead to the successful reconstruction of a jigsaw puzzle.

We shall come back to the jigsaw puzzles later. Now, let me introduce you to the concept of image completion and image inpainting. Well, they are not much different in a sense that both these techniques refer to the reconstruction of missing or corrupted parts of an image. Photoshop's content-aware fill is a good example. It simplifies the process of removing objects from an image or even expanding the boundaries of a cropped image.

<div style="text-align: center;"><img src="/public/img/project-content-aware-fill-0.jpg" alt="content_aware_fill_example"></div>
<div style="text-align: center;"><small>Adobe's example of content-aware fill. (<a href="https://research.adobe.com/project/content-aware-fill/" target="blank">source</a>)</small></div>

**Now, what are generative adversarial nets? And, what is their role in image completion?**

Adversarial training, first proposed by Ian Goodfellow in his <a href="https://arxiv.org/abs/1406.2661" target="blank">NIPS-2014 paper</a>, is a way to train two neural networks simultaneously. The first one is the **Discriminator**, denoted as D(Y), takes an input (e.g. an image) and outputs a scalar indicating whether the image Y looks "natural" or not. The output of D(Y) can be a score turned into a probability using a softmax function. The probability is close to 1 if it's a fake image and close to 0, otherwise. The second network is a **Generator**, denoted by G(Z), where Z is usually a vector randomly sampled in a simple distribution (e.g. Gaussian). The role of this generator is to generate a fake image so as to train D(Y) to output the correct probability. During training, D is shown a real image and it adjusts its parameters to output the correct probability. Then it is shown an image generated by G. D, again, adjusts its parameters to make its output D(G(Z)), large (following the gradient of a predefined function). But G(Z) will train itself to generate more natural looking images in order to fool D. It does this by taking the gradient of D w.r.t Y for each sample it produces. In simple words, G tries to minimize the output of D while D tries to maximize it.

The scenario can be compared to two legendary Saiyans, Kakarot and Vegeta, fighting each other in a battle. Every blow they take only improves their power levels. **That doesn't kill a Saiyan, only makes him stronger**.

<div style="text-align: center;"><img src="/public/img/goku-vs-vegeta.gif" alt="goku-vs-vegeta"></div>
<div style="text-align: center;"><small>The generator and the discriminator train like arch rivals. Determined to destroy each other in battle, but destined to complement each other. Like Yin and Yang, like darkness and light, like Vegeta and Kakarot.</small></div>

## DCGAN Building Blocks

Goodfellow's original GAN idea has been heavily built on and improved. I'll be discussing one of the recent ideas presented by Alec Radford, Luke Metz, and Soumith Chintala at the International Conference on Learning Representations (ICLR), 2016. Their paper is titled, "<a href="https://arxiv.org/abs/1511.06434" target="blank">Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks</a>". We'll be referring it as DCGAN, for simplicity's sake.

The idea, again taken from the original GAN paper, is that we define a simple distribution and represent it as <img src="/public/img/dcgan/pz.jpg">. In our implementation <img src="/public/img/dcgan/pz.jpg"> will be a uniform distribution between -1 and +1 (inclusively). We represent sampling a number from this distribution as <img src="/public/img/dcgan/z_s_pz.jpg">.

For example, if <img src="/public/img/dcgan/pz.jpg"> is 5 dimensional, it can be sampled using Python with numpy:

```python
import numpy as np
z = np.random.uniform(-1, 1, 5)
```

Thus, we get a vector that we can now feed into the generator.

```
array([-0.69909036, -0.29043478, -0.18270163,  0.15331042, -0.9341358 ])
```

We'd like to define G(z) in such a way that it can take z as input and produce an image.

```python
def G(z):
    ...
    return image

z = np.random.uniform(-1, 1, 5)
imageSample = G(z)
```

Now, there are many ways to define G(z) using deep-learning, but as discussed earlier, we'll be using the DCGAN proposed by Radford et. al. The proposed method uses *fractionally-strided* convolutions to *upsample* images.

For the purpose of explaining *fractionally-strided convolution* and *upsampling*, I'll be using illustrations by Vincent Dumoulin found in his <a href="https://github.com/vdumoulin/conv_arithmetic" target="blank">conv_arithmetic</a> project.

First, let us take a recap of how normal convolutions work. We take a kernel and slide it over an input space (blue) to produce the output space (green). Here the output is smaller than the input.

<div style="text-align: center;"><img src="/public/img/dcgan/padding_strides.gif" alt="convolution"></div>
<div style="text-align: center;"><small>Illustration of a convolution with padding and strides. (<a href="https://github.com/vdumoulin/conv_arithmetic" target="blank">source</a>)</small></div>

Contrary to convolutions, fractionally-strided convolutions are used to upsample so that the output is larger than the input. Take for example a 3x3 input. And you may interpret a fractionally-strided convolution as expanding the pixels so that there are zeros in-between the pixels. The output here, is a 5x5 image.

<div style="text-align: center;"><img src="/public/img/dcgan/padding_strides_transposed.gif" alt="fractionally-strided convolution"></div>
<div style="text-align: center;"><small>Illustration of a fractionally-strided convolution with padding and fractional strides. (<a href="https://github.com/vdumoulin/conv_arithmetic" target="blank">source</a>)</small></div>

<small>***Note: Some papers have wrongly addressed fractionally-strided convolutions as deconvolutions. In computer vision, deconvolution has a completely different meaning.***</small>

The DCGAN paper presents one way to structure the generator G(z) using fractionally-strided convolutions.

<div style="text-align: center;"><img src="/public/img/dcgan/generator.png" alt="generator network"></div>
<div style="text-align: center;"><small>The generator architecture as presented in the DCGAN paper. (<a href="https://arxiv.org/abs/1511.06434" target="blank">source</a>)</small></div>