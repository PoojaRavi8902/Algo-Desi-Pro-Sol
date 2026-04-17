// ================= SIDEBAR GENERATOR =================

const sidebar = document.querySelector(".sidebar");

if (sidebar) {

    let html = "<h3>Lessons</h3>";

    // Lessons
    for (let i = 1; i <= 30; i++) {
        let num = i.toString().padStart(2, '0');
        let file = `lesson${num}.html`;

        html += `<a href="${file}" id="lesson-${num}">Lesson ${i}</a>`;
    }

    // Divider
    html += "<hr>";

    // Extra Tools Section
    html += "<h3>Tools</h3>";
    html += `<a href="trace-simulator.html" id="trace-tool">Trace Simulator</a>`;

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

    // Highlight Trace Simulator
    if (current === "trace-simulator.html") {
        const tool = document.getElementById("trace-tool");

        if (tool) {
            tool.style.background = "rgba(255,255,255,0.35)";
        }
    }
}
