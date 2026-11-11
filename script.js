
/* =========================================
   FINISH CRAFT STUDIO — INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // LOADER
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hide");
        }, 500);
    });

    // FALLBACK: hide loader even if an external resource is slow
    setTimeout(() => {
        loader?.classList.add("hide");
    }, 4000);


    // HEADER SCROLL EFFECT
    const header = document.getElementById("header");

    function updateHeader() {
        if (window.scrollY > 40) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    menuToggle?.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navigation?.classList.toggle("active");
    });

    document.querySelectorAll(".navigation a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle?.classList.remove("active");
            navigation?.classList.remove("active");
        });
    });


    // SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }


    // CURRENT YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


// =========================================
// THREE.JS ARCHITECTURAL HERO
// =========================================

async function createArchitecturalScene() {

    const container = document.getElementById("hero3d");

    if (!container) return;

    try {

        const THREE = await import("three");

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            40,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );

        camera.position.set(0, 1.5, 9);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;

        container.appendChild(renderer.domElement);


        // LIGHTING
        const ambientLight = new THREE.AmbientLight(
            0xffffff,
            1.7
        );

        scene.add(ambientLight);

        const warmLight = new THREE.PointLight(
            0xd7a675,
            35,
            20
        );

        warmLight.position.set(3, 4, 5);
        scene.add(warmLight);

        const sideLight = new THREE.DirectionalLight(
            0xffffff,
            2
        );

        sideLight.position.set(-4, 3, 4);
        scene.add(sideLight);


        // MATERIALS
        const bronzeMaterial = new THREE.MeshStandardMaterial({
            color: 0xb88c5e,
            metalness: 0.72,
            roughness: 0.3
        });

        const darkMaterial = new THREE.MeshStandardMaterial({
            color: 0x38322b,
            metalness: 0.45,
            roughness: 0.42
        });

        const stoneMaterial = new THREE.MeshStandardMaterial({
            color: 0xb4a18b,
            metalness: 0.12,
            roughness: 0.72
        });


        // MAIN ARCHITECTURAL GROUP
        const architecture = new THREE.Group();

        scene.add(architecture);


        // LARGE ARCHITECTURAL WALL
        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(3.7, 4.7, 0.18),
            darkMaterial
        );

        wall.position.set(0.6, 0.5, -1.3);

        architecture.add(wall);


        // BRONZE PANEL
        const panel = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 3.2, 0.12),
            bronzeMaterial
        );

        panel.position.set(1.35, 0.5, -1.05);

        architecture.add(panel);


        // LIGHT STONE BLOCK
        const stoneBlock = new THREE.Mesh(
            new THREE.BoxGeometry(1.1, 2.1, 0.9),
            stoneMaterial
        );

        stoneBlock.position.set(-1.3, -0.65, 0.2);

        architecture.add(stoneBlock);


        // FLOATING RECTANGULAR ELEMENT
        const floatingPanel = new THREE.Mesh(
            new THREE.BoxGeometry(2.3, 0.13, 0.75),
            bronzeMaterial
        );

        floatingPanel.position.set(-0.15, 1.5, 0.5);

        architecture.add(floatingPanel);


        // DECORATIVE ARCHITECTURAL RING
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(1.1, 0.035, 16, 100),
            bronzeMaterial
        );

        ring.position.set(0.3, 0.2, 0.7);
        ring.rotation.y = 0.35;

        architecture.add(ring);


        // FLOOR
        const floor = new THREE.Mesh(
            new THREE.BoxGeometry(6, 0.12, 3),
            darkMaterial
        );

        floor.position.set(0, -2.4, -0.2);

        architecture.add(floor);


        // POSITION THE ARCHITECTURE
        architecture.position.set(0.15, 0, 0);
        architecture.rotation.y = -0.15;


        // POINTER MOVEMENT
        let pointerX = 0;
        let pointerY = 0;

        window.addEventListener("pointermove", event => {

            pointerX =
                (event.clientX / window.innerWidth - 0.5) * 2;

            pointerY =
                (event.clientY / window.innerHeight - 0.5) * 2;

        });


        // ANIMATION
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        function animate() {

            requestAnimationFrame(animate);

            if (!reducedMotion) {

                architecture.rotation.y +=
                    (pointerX * 0.08 - architecture.rotation.y + 0.15) * 0.015;

                architecture.rotation.x +=
                    (-pointerY * 0.04 - architecture.rotation.x) * 0.015;

                ring.rotation.z += 0.0015;

            }

            renderer.render(scene, camera);

        }

        animate();


        // RESPONSIVE RESIZE
        function resizeScene() {

            const width = container.clientWidth;
            const height = container.clientHeight;

            if (!width || !height) return;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

        }

        window.addEventListener("resize", resizeScene);

        resizeScene();

    } catch (error) {

        console.error(
            "Three.js scene could not be loaded:",
            error
        );

    }

}

createArchitecturalScene();
