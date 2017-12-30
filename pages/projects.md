---
layout: page
permalink: "projects"
title: Projects
show-avatar: true
subtitle: Stuff I've Built
---

<style>
.pub-img {
    text-align: center
}

.pub-img > img {
    margin: 6px;
    border-radius: 4px;
}

.header {
    margin-bottom: 10px;
}
</style>

<h2 class="header">Image Completion using Deep Convolutional Generative Adversarial Nets</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/image-completion.png" />
    </div>
    <div class="col-md-6">
    Image inpainting refers to the task of filling up the missing or corrupted parts of an image.
    A context aware image inpainting method should be capable of suggesting new and relevant content for completing an image.
    This project aims to reconstruct missing information using a Deep Convolutional Generative Adversarial Network.
    A contextual loss determines what kind of information is required to fill in for the missing content.
    A perceptual loss is in place which plays the role of an adversary saying whether the new content looks like
    what would be a good solution or not, as there can be multiple valid solutions given some context.
    </div>
</div>

([Source](https://github.com/saikatbsk/ImageCompletion-DCGAN))

<hr>

<h2 class="header">Vincent: AI Artist</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/ai-artist.png" />
    </div>
    <div class="col-md-6">
    Style transfer is the technique of recomposing images in the style of other images. Vincent is an implementation of the popular <a href="https://arxiv.org/abs/1508.06576">neural-style paper</a>.
    </div>
</div>

([Source](https://github.com/saikatbsk/Vincent-AI-Artist))

<hr>

<h2 class="header">DeepDream</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/deep-dream.png" />
    </div>
    <div class="col-md-6">
    Baking my own Deep Dream. This is an implementation of the popular conv filter visualization technique known as
    <a href="https://research.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html">Inceptionism</a>
    introduced in Google Research Blog.
    </div>
</div>

([Source](https://github.com/saikatbsk/DeepDream))

<hr>

<h2 class="header">Visualizing ConvNets</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/understanding-cnn.png" />
    </div>
    <div class="col-md-6">
    Visualizing ConvNet layers provide a deep Understanding of how neural networks see the world.
    Maximizing the responses from conv filters give us a neat visualization of the convnet's modular-hierarchical
    decomposition of its visual space. The first layers basically just encode direction and color.
    These direction and color filters then get combined into basic grid and spot textures.
    These textures gradually get combined into increasingly complex patterns.
    The filters become more intricate as they start incorporating information from an increasingly larger spatial extent.
    </div>
</div>

([Source](https://github.com/saikatbsk/Understanding-CNN))

<hr>

<h2 class="header">TensorFlow-GAN</h2>

<div class="row">
    <div class="col-md-12">
    Generative Adversarial Nets using TensorFlow.
    </div>
</div>

([Source](https://github.com/saikatbsk/TensorFlow-GAN))

<hr>

<h2 class="header">CNN for Classifying Handwritten Digits.</h2>

<div class="row">
    <div class="col-md-12">
    CNN example for handwritten character recognition.
    </div>
</div>

([Source](https://github.com/saikatbsk/MNIST-CNN))

<hr>

<h2 class="header">Bag-of-Features Implementation in Octave</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/bof.png" />
    </div>
    <div class="col-md-6">
    Image classification using the Bag-of-Features model.
    Training images are represented using clustered and quantized Speeded-Up Robust Features (SURF).
    Classification using K-Nearest Neighbor. Accuracy on 10 classes of Caltech101 is 76.67%.
    Tested with GNU Octave (4.0.2).
    </div>
</div>

([Source](https://github.com/saikatbsk/bagOfFeatures))

<hr>

#### Older projects..

<h2 class="header">Wave: A Perceptive User Interface</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <iframe width="100%" height="310" src="https://www.youtube.com/embed/C7uDw6NdlJ4" frameborder="0" allowfullscreen=""></iframe>
    </div>
    <div class="col-md-6">
    A perceptive user interface based on real-time hand detection and tracking. Requires a webcam.
    Useful for applications such as gesturebased point and click interfaces.
    </div>
</div>

([Source](https://github.com/saikatbsk/Wave))

<hr>

<h2 class="header">Ishara: Mouse Control with Gesture</h2>

<div class="row">
    <div class="col-md-6 pub-img">
    <iframe width="100%" height="310" src="https://www.youtube.com/embed/B1_xtdR8pn4" frameborder="0" allowfullscreen=""></iframe>
    </div>
    <div class="col-md-6">
    An interface for controlling mouse pointer using finger gestures. Requires a webcam.
    Includes gestures for emulating click (left and right) and scroll using color markers.
    </div>
</div>

([Source](https://github.com/saikatbsk/Ishara))

<hr>

<h2 class="header">The Game of Life</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/game_of_life.gif" />
    </div>
    <div class="col-md-6">
    The 'Game of Life' is a 'cellular automaton', a simulation that shows how a simple beginning can give rise
    to complex mechanisms. A concept first devised by British mathematician John Horton Conway.
    </div>
</div>

([Source](https://github.com/saikatbsk/GameOfLife))

<hr>

<h2 class="header">tinyOS</h2>

<div class="row">
    <div class="col-md-12">
    A tiny operating system written in C. Currently, it can only print colored text on a vga screen.
    </div>
</div>

([Source](https://github.com/saikatbsk/tinyOS))

<hr>

#### Games I've build..

<h2 class="header">CrappyBird</h2>

<div class="row">
    <div class="col-md-6 pub-img">
        <img src="/public/img/crappybird.png" />
    </div>
    <div class="col-md-6">
    Yet another flappy bird clone!<br>
    Play it <a href="/public/games/crappybird/">here</a>.
    </div>
</div>

([Source](https://github.com/saikatbsk/CrappyBird))
