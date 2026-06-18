// ==========================================================
// AURURAH
// SCRIPT.JS
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // ELEMENTS
    // ======================================================

    const disclaimer = document.getElementById("disclaimer");
    const enterBtn = document.getElementById("enterBtn");

    const menuOverlay = document.getElementById("menuOverlay");
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");

    // ======================================================
    // LOCAL STORAGE
    // ======================================================

    const STORAGE_KEY = "aururah-entered";

    /*
    ---------------------------------------------------------
    RESET FOR TESTING

    Uncomment and refresh page:

    localStorage.removeItem("aururah-entered");

    ---------------------------------------------------------
    */

    // ======================================================
    // CHECK IF USER ALREADY ENTERED
    // ======================================================

    const hasEntered =
        localStorage.getItem(STORAGE_KEY);

    if (hasEntered === "true") {

        disclaimer.style.display = "none";

    }

    // ======================================================
    // ENTER BUTTON
    // ======================================================

    if (enterBtn) {

        enterBtn.addEventListener("click", () => {

            localStorage.setItem(
                STORAGE_KEY,
                "true"
            );

            disclaimer.classList.add("entered");

            disclaimer.addEventListener(
                "transitionend",
                () => {

                    disclaimer.style.display = "none";

                },
                { once: true }
            );
        });
    }

    // ======================================================
    // MENU OPEN
    // ======================================================

    function openMenu() {

        menuOverlay.classList.add("active");

        menuOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "menu-open"
        );
    }

    // ======================================================
    // MENU CLOSE
    // ======================================================

    function closeMenu() {

        menuOverlay.classList.remove("active");

        menuOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }

    // ======================================================
    // BUTTON EVENTS
    // ======================================================

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openMenu
        );
    }

    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );
    }

    // ======================================================
    // ESC KEY CLOSE
    // ======================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuOverlay.classList.contains(
                    "active"
                )
            ) {
                closeMenu();
            }
        }
    );

    // ======================================================
    // CLICK OUTSIDE LINKS AREA
    // ======================================================

    menuOverlay.addEventListener(
        "click",
        (event) => {

            const clickedOverlay =
                event.target === menuOverlay;

            if (clickedOverlay) {
                closeMenu();
            }
        }
    );

    // ======================================================
    // AUTO CLOSE WHEN LINK CLICKED
    // ======================================================

    const menuLinks =
        document.querySelectorAll(
            ".menu-link"
        );

    menuLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );
    });

});