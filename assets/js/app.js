const toggleBtn = document.getElementById("toggle-btn");
function toggle() {
  toggleBtn.classList.toggle("active_toggle");
}
function showPassword() {
  const inputType = document.getElementById("password");
  if (inputType.type === "password") {
    inputType.type = "text";
  } else {
    inputType.type = "password";
  }
}

// table data
var dataArray = [
  {
    id: 26166,
    name: "Mark Nagelvoort",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "12/10/2023",
    vehicle: "1GXUDEE80DHZZUA",
  },
  {
    id: 26161,
    name: "Customer 2",
    department: "Cash",
    status: "Used",
    category: "Vehicle Sale",
    date: "12/10/2023",
    vehicle: "QEVRUDEE80D778S",
  },
  {
    id: 26166,
    name: "Mark Nagelvoort",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "12/10/2023",
    vehicle: "1GXUDEE80DHZZUA",
  },
];

// Function to populate the template with data
function populateTemplate(data) {
  var template = document.querySelector("#template").content.cloneNode(true);

  template.querySelector(".fw-medium:nth-child(1)").textContent = data.id;
  template.querySelector(".fw-medium:nth-child(2)").textContent = data.name;
  template.querySelector(".fw-medium:nth-child(3)").textContent =
    data.department;
  template.querySelector(".fw-medium:nth-child(4)").textContent = data.status;
  template.querySelector(".fw-medium:nth-child(5)").textContent = data.category;
  template.querySelector(".fw-medium:nth-child(6)").textContent = data.date;
  template.querySelector(".fw-medium:nth-child(7)").textContent = data.vehicle;

  return template;
}

// Function to add populated templates to the DOM
function renderData(dataArray) {
  var container = document.getElementById("table_container");

  dataArray.forEach(function (item) {
    var template = populateTemplate(item);
    container.appendChild(template);
  });
}

// Call renderData function with the sample data array
renderData(dataArray);
