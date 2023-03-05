//Gsap
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        toggleActions: "restart pause reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.6
});

gsap.from(".vpn-speed .left", {
    scrollTrigger: {
        trigger: ".card",
        start: "20% 20%",
        toggleActions: "restart paus reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 2,
});

gsap.from(".vpn-speed .right", {
    scrollTrigger: {
        trigger: ".card",
        start: "20% 20%",
        toggleActions: "restart pause reverse pause"
    },
    y: -50,
    opacity: 0,
    duration: 2,
});
///////
gsap.from(".map .left", {
    scrollTrigger: {
        trigger: ".vpn-speed",
        start: "70% 20%",
        toggleActions: "restart paus reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 2,
});

gsap.from(".map .right", {
    scrollTrigger: {
        trigger: ".vpn-speed",
        start: "70% 20%",
        toggleActions: "restart pause reverse pause"
    },
    y: -50,
    opacity: 0,
    duration: 2,
});
///////
gsap.from(".info .left", {
    scrollTrigger: {
        trigger: ".map",
        start: "50% 20%",
        toggleActions: "restart paus reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 2,
});

gsap.from(".info .right", {
    scrollTrigger: {
        trigger: ".map",
        start: "50% 20%",
        toggleActions: "restart pause reverse pause"
    },
    y: -50,
    opacity: 0,
    duration: 2,
});
///////
gsap.from(".setup .left", {
    scrollTrigger: {
        trigger: ".info",
        start: "60% 20%",
        toggleActions: "restart paus reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 2,
});

gsap.from(".setup .right", {
    scrollTrigger: {
        trigger: ".info",
        start: "60% 20%",
        toggleActions: "restart pause reverse pause"
    },
    y: -50,
    opacity: 0,
    duration: 2,
});
///////
gsap.from(".box", {
    scrollTrigger: {
        trigger: ".setup",
        start: "90% 20%",
        toggleActions: "restart paus reverse pause"
    },
    x: -50,
    opacity: 0,
    duration: 2,
    stagger: 0.6,
});
///////
gsap.from(".plan-card", {
    scrollTrigger: {
        trigger: ".plan",
        start: "top center",
        toggleActions: "restart paus reverse pause"
    },
    Y: -50,
    opacity: 0,
    duration: 2,
});

gsap.from(".First-anime", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
gsap.from(".hero-img", { opacity: 0, duration: 1, y: 30, delay: 1.4 });


