---
title: Projects
layout: page
---

# My projects

## Image Completion using Deep Convolutional Generative Adversarial Nets
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/images/image-completion.png" alt="image-completion">
        <figcaption class="caption"></figcaption>
    </div>

    <div class="toright">
        <p>Image inpainting refers to the task of filling up the missing or corrupted parts of an image.
        A context aware image inpainting method should be capable of suggesting new and relevant content for completing an image.
        This project aims to reconstruct missing information using a Deep Convolutional Generative Adversarial Network.
        A <i>contextual loss</i> determines what kind of information is required to fill in for the missing content.
        A <i>perceptual loss</i> is in place which plays the role of an adversary saying whether the new content looks like what would be a good solution or not, as there can be multiple valid solutions given some context.</p>
    </div>
</div>

Implemented in <u>Python</u> using <u>TensorFlow</u>.

URL: <https://github.com/saikatbsk/ImageCompletion-DCGAN>

<div class="breaker"></div>

## Vincent: AI Artist
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/images/ai-artist.png" alt="ai-artist">
        <figcaption class="caption"></figcaption>
    </div>

    <div class="toright">
        <p>Style transfer is the technique of recomposing images in the style of
        other images. Vincent is an implementation of the popular
        <a href="https://arxiv.org/abs/1508.06576">neural-style paper</a>.</p>
    </div>
</div>

Implemented in <u>Python</u> using <u>Keras</u>, <u>Scipy</u>, and <u>Scikit-learn</u>.

URL: <https://github.com/saikatbsk/Vincent-AI-Artist>

<div class="breaker"></div>

## DeepDream
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/images/deep-dream.png" alt="deep-dream">
        <figcaption class="caption"></figcaption>
    </div>

    <div class="toright">
        <p>Baking my own Deep Dream. This is an implementation of the popular
        conv filter visualization technique known as <a href="https://research.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html">Inceptionism</a>
        introduced in Google Research Blog.</p>
    </div>
</div>

Implemented in <u>Python</u> using <u>Keras</u>, <u>Scipy</u>.

URL: <https://github.com/saikatbsk/DeepDream>

<div class="breaker"></div>

## Understanding-CNN
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/assets/images/understanding-cnn.png" alt="understanding-cnn">
        <figcaption class="caption"></figcaption>
    </div>

    <div class="toright">
        <p>Visualizing ConvNet layers provide a deep Understanding of how
        neural networks see the world. Maximizing the responses from conv
        filters give us a neat visualization of the convnet's modular-hierarchical
        decomposition of its visual space. The first layers basically just encode
        direction and color. These direction and color filters then get combined
        into basic grid and spot textures. These textures gradually get
        combined into increasingly complex patterns. The filters become more
        intricate as they start incorporating information from an increasingly
        larger spatial extent.</p>
    </div>
</div>

Implemented in <u>Python</u> using <u>Keras</u>, <u>Scipy</u>.

URL: <https://github.com/saikatbsk/Understanding-CNN>

<div class="breaker"></div>

Some older projects..

## Wave: A Perceptive User Interface
<div class="side-by-side">
    <div class="toleft">
        <iframe width="560" height="310" src="https://www.youtube.com/embed/C7uDw6NdlJ4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="toright">
        <p>A perceptive user interface based on real-time hand detection and
        tracking. Requires a webcam. Useful for applications such as gesturebased
        point and click interfaces.</p>
    </div>
</div>

Implemented in <u>C++</u> using <u>OpenCV</u>.

URL: <https://github.com/saikatbsk/Wave>

<div class="breaker"></div>

## ISHARA: Mouse Control with Gesture
<div class="side-by-side">
    <div class="toleft">
        <iframe width="560" height="310" src="https://www.youtube.com/embed/B1_xtdR8pn4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="toright">
        <p>An interface for controlling mouse pointer using finger gestures.
        Requires a webcam. Includes gestures for emulating click (left and
        right) and scroll using color markers.</p>
    </div>
</div>

Implemented in <u>C++</u> using <u>OpenCV</u>, and <u>Qt</u>.

URL: <https://github.com/saikatbsk/Ishara>
