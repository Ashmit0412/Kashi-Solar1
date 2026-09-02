// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
        });
    });
}


// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.getElementById("header");

if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    });
}


// ===============================
// FOOTER YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// SOLAR ESTIMATE → WHATSAPP
// ===============================

const form = document.getElementById("estimateForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // Safely get a field value
        const getValue = (id) => {
            const element = document.getElementById(id);
            return element ? element.value.trim() : "";
        };

        const customerName = getValue("customerName");
        const customerMobile = getValue("customerPhone");
        const propertyType = getValue("propertyType");
        const monthlyBill = getValue("monthlyBill");
        const systemType = getValue("systemType");
        const location = getValue("location");


        // Basic validation
        if (!customerName) {
            alert("Please enter your name.");
            return;
        }

        if (!customerMobile) {
            alert("Please enter your mobile number.");
            return;
        }


        // WhatsApp message
        const msg =
`Hello Kashi Solar Renewables,

I would like to get a solar estimate.

Name: ${customerName}
Mobile: ${customerMobile}
Property: ${propertyType}
Monthly Electricity Bill: ${monthlyBill}
Preferred System: ${systemType}
Location: ${location}

Please advise me on a suitable solar solution and applicable PM Surya Ghar subsidy.`;


        // Kashi Solar Renewables WhatsApp number
        const whatsappNumber = "917266016888";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(msg);


        // Open WhatsApp
        window.open(whatsappURL, "_blank");

    });

} else {

    console.error("ERROR: estimateForm was not found in index.html.");

}