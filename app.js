// BACKEND URL — nanti kita isi
const BACKEND_URL = "";

const form = document.getElementById("quizForm");
const resultEl = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const topic = document.getElementById("topic").value;
  const grade = document.getElementById("grade").value;
  const type = document.getElementById("type").value;
  const count = parseInt(document.getElementById("count").value);

  resultEl.textContent = "⏳ Menghubungkan AI...";

  const resp = await fetch(`${BACKEND_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, grade, type, count })
  });

  const data = await resp.json();

  resultEl.textContent = data.quizText || "Gagal memuat.";
});
