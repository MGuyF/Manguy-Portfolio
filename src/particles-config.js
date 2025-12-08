const particlesConfig = {
  fullScreen: {
    enable: false
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: false,
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 150,
        size: 3,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
    }
  },
  retina_detect: true,
  background: {
    color: "transparent",
  }
};

export default particlesConfig;
