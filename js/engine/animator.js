/**
 * Animation Engine - Pure Vanilla JS
 * Coordinates step-based timeline execution, speed scaling, and state transitions.
 */

(function (global) {
  'use strict';

  class TimelineAnimator {
    constructor(options = {}) {
      this.steps = [];
      this.currentStep = 0;
      this.isPlaying = false;
      this.playbackSpeed = 1.0;
      this.stepIntervalMs = 1800; // Base time per step
      this.timerId = null;

      // Callbacks
      this.onStepChange = options.onStepChange || (() => {});
      this.onPlayStateChange = options.onPlayStateChange || (() => {});
    }

    loadSteps(steps) {
      this.pause();
      this.steps = steps || [];
      this.currentStep = 0;
      this.notifyStep();
    }

    play() {
      if (this.isPlaying || this.steps.length === 0) return;
      
      // If we're at the end, restart from step 0
      if (this.currentStep >= this.steps.length - 1) {
        this.currentStep = 0;
        this.notifyStep();
      }

      this.isPlaying = true;
      this.onPlayStateChange(true);
      this.scheduleNextTick();
    }

    pause() {
      if (!this.isPlaying) return;
      this.isPlaying = false;
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      this.onPlayStateChange(false);
    }

    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }

    scheduleNextTick() {
      if (!this.isPlaying) return;
      
      const delay = this.stepIntervalMs / this.playbackSpeed;
      this.timerId = setTimeout(() => {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
          this.notifyStep();
          this.scheduleNextTick();
        } else {
          this.pause();
        }
      }, delay);
    }

    stepForward() {
      this.pause();
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.notifyStep();
      }
    }

    stepBackward() {
      this.pause();
      if (this.currentStep > 0) {
        this.currentStep--;
        this.notifyStep();
      }
    }

    goToStep(index) {
      this.pause();
      if (index >= 0 && index < this.steps.length) {
        this.currentStep = index;
        this.notifyStep();
      }
    }

    reset() {
      this.pause();
      this.currentStep = 0;
      this.notifyStep();
    }

    setSpeed(speed) {
      this.playbackSpeed = parseFloat(speed) || 1.0;
    }

    notifyStep() {
      const stepData = this.steps[this.currentStep] || null;
      this.onStepChange({
        currentIndex: this.currentStep,
        totalSteps: this.steps.length,
        stepData: stepData
      });
    }
  }

  global.TimelineAnimator = TimelineAnimator;
})(typeof window !== 'undefined' ? window : globalThis);
