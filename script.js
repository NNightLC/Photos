$(".grid").imagesLoaded(function () {
  $(".grid").masonry({
    itemSelector: ".grid-item",
  });
});

const images = [
  {
    src: "https://i.ibb.co/xG5C6ZW/z5814368596138-147252f6dea535c8ea1c7236d8450675.jpg",
    desc: "This stunning photograph captures the delicate beauty of a water lily in its early stages of bloom. Surrounded by vibrant green leaves, the white petals are gently unfurling, revealing a hint of yellow within. The soft, diffused light creates a peaceful atmosphere, highlighting the intricate details of the flower.",
    title: "A Water Lily in Bloom",
  },
  {
    src: "https://i.ibb.co/RDDFFW4/z5814368594311-9185637726ba7c847ef98c78fba7ca90.jpg",
    desc: "Description of Image 2",
  },
  {
    src: "https://i.ibb.co/5BLmL59/z5814368592184-847253b0d0f4c5aa8afda28a63011a72.jpg",
    desc: "Description of Image 3",
  },
  {
    src: "https://i.ibb.co/LCrxnhN/z5814368584468-5c24a2f0f0b4e8e76e4723042f86d6d6.jpg",
    desc: "Description of Image 4",
  },
  {
    src: "https://i.ibb.co/m8jnWdH/z5814368582938-16d7732d20e81d24f58b4b4eafe7f47f.jpg",
    desc: "Description of Image 5",
  },
  {
    src: "https://i.ibb.co/df2HzGf/z5814368581573-242da4f83c8d61273425010be4115d90.jpg",
    desc: "Description of Image 6",
  },
  {
    src: "https://i.ibb.co/M2cyM4q/z5814368580945-fe2e5fb6cc8ed488301bbea671a206e3.jpg",
    desc: "Description of Image 7",
  },
  {
    src: "https://i.ibb.co/4wLMVJf/z5814368575368-aeda219b6831f3c3c0bd7ffd13cda302.jpg",
    desc: "Description of Image 8",
  },
  {
    src: "https://i.ibb.co/ZxzBYqc/z5814368576107-efdb2f62c8af49a929977bb351f494ff.jpg",
    desc: "Description of Image 9",
  },
  {
    src: "https://i.ibb.co/G5s2VD3/z5814368571455-9bb6dce91fc093f48563872850b5e516.jpg",
    desc: "Description of Image 10",
  },
  {
    src: "https://i.ibb.co/5BLmL59/z5814368592184-847253b0d0f4c5aa8afda28a63011a72.jpg",
    desc: "Description of Image 11",
  },
  {
    src: "https://i.ibb.co/hWSZq7Q/z5814368566887-3818697d1b5d43e3d0076e690ffad7ee.jpg",
    desc: "Description of Image 12",
  },
  {
    src: "https://i.ibb.co/hR1v2ZH/z5814368562267-0fa09c5293817eafa8ca5039764133bd.jpg",
    desc: "Description of Image 13",
  },
  {
    src: "https://i.ibb.co/JkLGr88/z5814368559710-4b2e90e32322a6414bcbce4c0505c3cc.jpg",
    desc: "Description of Image 14",
  },
  {
    src: "https://i.ibb.co/CMH3F7n/z5814368555558-432883834c9438569080ffc95d748a53.jpg",
    desc: "Description of Image 15",
  },
  {
    src: "https://i.ibb.co/N7V3zqq/z5814368552741-572deb44060e4f6516be383f825c9b45.jpg",
    desc: "Description of Image 16",
  },
  {
    src: "https://i.ibb.co/8c6ZCkk/z5814368552561-a9219c9be1217ee6b28936f6462c3146.jpg",
    desc: "Description of Image 17",
  },
  {
    src: "https://i.ibb.co/1djTrRT/z5814368548670-9b4dec6c6ad94c9367794ae066275591.jpg",
    desc: "Description of Image 18",
  },
  {
    src: "https://i.ibb.co/T4q6Q5n/z5814368546293-d6e873e8fbf8be3bd1c6c0be9766854f.jpg",
    desc: "Description of Image 19",
  },
  {
    src: "https://i.ibb.co/TML54P8/z5814368543882-b639d25a0d98be1e02960f39d517a100.jpg",
    desc: "Description of Image 20",
  },
  {
    src: "https://i.ibb.co/kGMkZ5w/z5814368541807-87233ad250c9e006943c50605b9bd6b1.jpg",
    desc: "This stunning photograph captures the delicate beauty of a water lily in its early stages of bloom. Surrounded by vibrant green leaves, the white petals are gently unfurling, revealing a hint of yellow within. The soft, diffused light creates a peaceful atmosphere, highlighting the intricate details of the flower.",
    title: "A Water Lily in Bloom",
  },
  {
    src: "https://i.ibb.co/fQsrd7G/z5814368541806-bd2fea60e2623f95549c7e06378bd598.jpg",
    desc: "Description of Image 22",
  },
  {
    src: "https://i.ibb.co/PrK8rzD/z5814368541805-72ca31fb3051b53a4ebfecb8bcc48ab9.jpg",
    desc: "Description of Image 23",
  },
  {
    src: "https://i.ibb.co/kBR1CkK/z5814368529921-0979b9b9ca4cac14adbe25504e622676.jpg",
    desc: "Description of Image 24",
  },
  {
    src: "https://i.ibb.co/nCyLpk3/z5814368527415-38f537c79b507e2538a70785a3c6a6fb.jpg",
    desc: "Description of Image 25",
  },
  {
    src: "https://i.ibb.co/dcFdKtd/z5814368528065-709ef5afd45ba869564c313836044729.jpg",
    desc: "Description of Image 26",
  },
  {
    src: "https://i.ibb.co/DPFCNcK/z5814368521213-f051e75d075ae02145a4eb335f11ccce.jpg",
    desc: "Description of Image 27",
  },
  {
    src: "https://i.ibb.co/jLH3Ygy/z5814368519616-66df5faea83c81b8ef6a6549964109d7.jpg",
    desc: "Description of Image 28",
  },
  {
    src: "https://i.ibb.co/Gp6BfDd/z5814368518947-8c9f40d700243c7c91732cc23930bb2b.jpg",
    desc: "Description of Image 29",
  },
  {
    src: "https://i.ibb.co/8sQpY63/z5814368516764-e8acf1e9b5e954adba70e661a82ec59c.jpg",
    desc: "Description of Image 30",
  },
  {
    src: "https://i.ibb.co/GtY3WyW/z5814368512679-e5845a600c896bc286b765b304f10bfc.jpg",
    desc: "Description of Image 31",
  },
  {
    src: "https://i.ibb.co/MPgnzPy/z5814368511534-fc293092c0dfa4981c08978594e80c35.jpg",
    desc: "Description of Image 32",
  },
  {
    src: "https://i.ibb.co/w08W01N/z5814368510032-ba53a15b71f3411cd1238db3091467d0.jpg",
    desc: "Description of Image 33",
  },
  {
    src: "https://i.ibb.co/dfjLZrY/z5814368506955-3412d6994e15876cddf97aadbfb1740a.jpg",
    desc: "Description of Image 34",
  },
];

let currentIndex = 0; // Track the current image index

// Function to open modal with image index
function openModal(index) {
  currentIndex = index; // Set the current index
  const modalImage = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-desc");
  const modalTitle = document.getElementById("modal-title"); // Add this line

  // Get the current image and description
  const imageData = images[currentIndex];
  modalImage.src = imageData.src;
  modalDescription.textContent = imageData.desc;
  modalTitle.textContent = imageData.title; // Add this line

  // Create a temporary image element to extract color
  const img = new Image();
  img.crossOrigin = "Anonymous"; // Required for CORS images
  img.src = imageData.src;

  img.onload = function () {
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(img);
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.backgroundColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.2)`;
  };

  document.getElementById("modal").style.display = "flex"; // Show modal

  // Add event listener for keydown events
  document.addEventListener("keydown", handleKeydown);
}

// Function to move to the next image
function nextImage(event) {
  event.stopPropagation(); // Prevent modal from closing
  currentIndex = (currentIndex + 1) % images.length; // Loop to the first image
  openModal(currentIndex); // Update modal with the new image
}

// Function to move to the previous image
function prevImage(event) {
  event.stopPropagation(); // Prevent modal from closing
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
  openModal(currentIndex); // Update modal with the previous image
}

// Function to handle keydown events
function handleKeydown(event) {
  if (event.key === "ArrowRight") {
    nextImage(event); // Move to the next image
  } else if (event.key === "ArrowLeft") {
    prevImage(event); // Move to the previous image
  } else if (event.key === "Escape") {
    closeModal(event); // Close modal on Escape key
  }
}

// Close modal function
function closeModal(event) {
  const modalContent = document.querySelector(".modal-content");
  if (event.target === modalContent) return; // Prevent closing if clicking inside the content
  document.getElementById("modal").style.display = "none"; // Hide modal
  document.removeEventListener("keydown", handleKeydown); // Remove keydown event listener
}

// Event listeners for images in the grid
const gridImages = document.querySelectorAll(".grid-item"); // Adjust the selector to target your images
gridImages.forEach((gridItem, index) => {
  gridItem.addEventListener("click", () => {
    openModal(index); // Open modal with the image index
  });
});

// Event listener for closing the modal when clicking outside of the image
const modal = document.getElementById("modal");
modal.addEventListener("click", closeModal);

// Ensure to handle close button if you have one
const closeButton = document.getElementById("closeModal");
if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}
