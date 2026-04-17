// ================= SIDEBAR GENERATOR =================

const sidebar = document.querySelector(".sidebar");

if (sidebar) {

    let html = "<h3>Lessons</h3>";

    for (let i = 1; i <= 30; i++) {

        let num = i.toString().padStart(2, '0');
        let file = `lesson${num}.html`;

        html += `<a href="${file}" id="lesson-${num}">Lesson ${i}</a>`;
    }

    sidebar.innerHTML = html;

    // Highlight current page
    const current = window.location.pathname.split("/").pop();

    if (current.startsWith("lesson")) {
        const id = current.replace(".html", "").replace("lesson", "");
        const active = document.getElementById(`lesson-${id}`);

        if (active) {
            active.style.background = "rgba(255,255,255,0.35)";
        }
    }
}