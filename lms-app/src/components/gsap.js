import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


// Example usage of some plugins
// Note: The following examples are simplified and may not work out of the box. They are meant to illustrate basic usage.

// Example using ScrollTrigger
gsap.to(".element", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

// Example using Draggable
Draggable.create(".draggable-element", { type: "x,y" });

// Example using MotionPathPlugin
gsap.to(".motion-path-element", {
  motionPath: {
    path: ".motion-path",
    align: ".motion-path",
    autoRotate: true,
    start: 0,
    end: 1,
  },
});

// Example using TextPlugin
gsap.to(".text-element", {
  text: "Hello GSAP!",
  ease: "none",
});
