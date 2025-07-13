
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

export const useDraggable = () => {
  useEffect(() => {
    // Create draggable elements with horizontal movement only
    Draggable.create(".flair--1", {
      type: "x",
      bounds: ".container"
    });

    // Create draggable elements with rotation and inertia
    Draggable.create(".flair--3b", {
      type: "rotation",
      inertia: true
    });

    // Create draggable elements with bounds and inertia
    Draggable.create(".flair--4b", {
      bounds: ".container",
      inertia: true
    });

    return () => {
      // Cleanup draggable instances
      Draggable.get(".flair--1")?.kill();
      Draggable.get(".flair--3b")?.kill();
      Draggable.get(".flair--4b")?.kill();
    };
  }, []);
};
