const toggleBtn = document.getElementById("toggle-btn");
function toggle() {
  toggleBtn.classList.toggle("active_toggle");
}
function showPassword(e) {
  e.classList.toggle("eye_line")
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
    id: 26156,
    name: "Customer 3",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "01/10/2023",
    vehicle: "F34FACD97REFBSDI",
  },
  {
    id: 25789,
    name: "Customer 4",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "29/09/2023",
    vehicle: "87FDSIUFSIUD7FBIJ",
  },
  {
    id: 25379,
    name: "Customer 5",
    department: "Cash",
    status: "Used",
    category: "Vehicle Sale",
    date: "28/09/2023",
    vehicle: "PODASK88GHEQW4",
  },
  {
    id: 24839,
    name: "Customer 6",
    department: "Cash",
    status: "New",
    category: "Vehicle Sale",
    date: "28/09/2023",
    vehicle: "7EUHRNAJDFNOIUO",
  },
  {
    id: 23949,
    name: "Customer 7",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "28/09/2023",
    vehicle: "263ETGYAUDBFUIDF",
  },
  {
    id: 25789,
    name: "Customer 8",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "23/09/2023",
    vehicle: "87FDSIUFSIUD7FBIJ",
  },
  {
    id: 25379,
    name: "Customer 9",
    department: "Cash",
    status: "Used",
    category: "Vehicle Sale",
    date: "22/09/2023",
    vehicle: "PODASK88GHEQW4",
  },
  {
    id: 24839,
    name: "Customer 10",
    department: "Cash",
    status: "New",
    category: "Vehicle Sale",
    date: "22/09/2023",
    vehicle: "7EUHRNAJDFNOIUO",
  },
  {
    id: 23949,
    name: "Customer 11",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "21/09/2023",
    vehicle: "263ETGYAUDBFUIDF",
  },
  {
    id: 24839,
    name: "Customer 12",
    department: "Cash",
    status: "New",
    category: "Vehicle Sale",
    date: "21/09/2023",
    vehicle: "7EUHRNAJDFNOIUO",
  },
  {
    id: 23949,
    name: "Customer 13",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "18/09/2023",
    vehicle: "263ETGYAUDBFUIDF",
  },
  {
    id: 23949,
    name: "Customer 14",
    department: "Finance",
    status: "New",
    category: "Vehicle Sale",
    date: "17/09/2023",
    vehicle: "263ETGYAUDBFUIDF",
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

function moveToNext(currentInput, nextInputId) {
  if (currentInput.value.length === 1) {
      document.getElementById(nextInputId).focus();
  }
}

function moveToPrev(currentInput, prevInputId) {
  if (currentInput.value.length === 0) {
      document.getElementById(prevInputId).focus();
  }
}