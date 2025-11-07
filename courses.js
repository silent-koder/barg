// Data
const resources = [
  {
    title: "CHEM101 Midterm Review Sheet",
    course: "CHEM101",
    semester: "First Semester",
    file: "chem101_midterm.pdf",
  },
  {
    title: "PHYS203 Final Exam Guide",
    course: "PHYS203",
    semester: "First Semester",
    file: "phys203_final.pdf",
  },
  {
    title: "HIST110 Lecture Notes Week 3",
    course: "HIST110",
    semester: "First Semester",
    file: "hist110_week3.pdf",
  },
  {
    title: "MATH150 Assignment 4",
    course: "MATH150",
    semester: "First Semester",
    file: "math150_assignment4.pdf",
  },
  {
    title: "BIO105 Lab Report Template",
    course: "BIO105",
    semester: "Second Semester",
    file: "bio105_lab_report.pdf",
  },
];

// DOM Elements
const tableBody = document.getElementById("resourcesBody");
const searchInput = document.getElementById("searchInput");
const courseFilter = document.getElementById("courseFilter");
const semesterFilter = document.getElementById("semesterFilter");
const clearFilters = document.getElementById("clearFilters");

// Render Table
function renderResources(filtered = resources) {
  tableBody.innerHTML = "";

  filtered.forEach((item) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-slate-50";

    row.innerHTML = `
      <td class="px-4 py-2 font-medium text-slate-600">${item.title}</td>
      <td class="hidden sm:table-cell px-4 py-2 text-slate-600">${item.course}</td>
      <td class=" md:table-cell px-4 py-3 text-slate-600">${item.semester}</td>
      <td class="px-4 py-2">
        <div class="flex items-center gap-2">
          
          <button onclick="downloadFile('${item.file}')" class="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 p-2 sm:p-0 w-10 sm:w-auto h-10 sm:h-auto mx-auto">
            <span class="material-icons text-lg">download</span>
            <span class="hidden sm:inline">Download</span>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Filtering Logic
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const course = courseFilter.value;
  const semester = semesterFilter.value;

  const filtered = resources.filter(
    (res) =>
      res.title.toLowerCase().includes(search) &&
      (course === "" || res.course === course) &&
      (semester === "" || res.semester === semester)
  );

  renderResources(filtered);
}

// Event Listeners
searchInput.addEventListener("input", applyFilters);
courseFilter.addEventListener("change", applyFilters);
semesterFilter.addEventListener("change", applyFilters);
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  courseFilter.value = "";
  semesterFilter.value = "";
  renderResources();
});

// Simulated Download
function downloadFile(filename) {
  const link = document.createElement("a");
  link.href = `./pdfs/${filename}`; // place PDFs in /pdfs folder
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Initial Render
renderResources();
