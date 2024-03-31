const hertaSpaceStation = [
  "Base Zone",
  "Storage Zone B1",
  "Storage Zone F1",
  "Storage Zone F2",
  "Supply Zone F1",
  "Supply Zone F2",
  "Seclusion Zone F2",
];

const jarilloVI = [
  "Outlying Snow Plains",
  "Black Water Pass",
  "Corridor of Fading Echoes",
  "Everwinter Hill",
  "Great Mine",
  "Rivet Town F1",
  "Robot Settlement F1",
];

const xianzhouLoufu = [
  "Cloudford F1",
  "Cloudford F2",
  "Stargazer Navalia",
  "Divination Comission F1",
  "Divination Comission F2",
  "Artisanship Commission",
  "Alchemy Comission F1",
  "Alchemy Comission F2",
  "Fyxestroll Garden",
  "Scalegorge Waterscape",
];

function showSections(planet) {
  const sectionButtonsContainer = document.getElementById(
    "sectionButtonsContainer"
  );
  sectionButtonsContainer.innerHTML = ""; // Clear existing buttons

  if (planet == "hss") {
    hertaSpaceStation.forEach((buttonText) => {
      const sectionButton = document.createElement("button");
      sectionButton.classList.add("sectionButton");
      sectionButton.textContent = buttonText;
      sectionButtonsContainer.appendChild(sectionButton);

      // Add click event listener to each button
      sectionButton.addEventListener("click", function () {
        // Get the image container
        const zoomableImageContainer =
          document.querySelector(".zoomable-image");

        // Remove any existing image
        const existingImage = zoomableImageContainer.querySelector("img");
        if (existingImage) {
          existingImage.remove();
        }

        // Create and append new image based on the button clicked
        const newImageSrc = `css/Star Rail/Maps Location/Herta Space Station/HSS ${buttonText}.png`;
        const newImage = document.createElement("img");
        newImage.src = newImageSrc;
        newImage.classList.add("test");
        zoomableImageContainer.appendChild(newImage);
      });
    });
  }
  if (planet == "jvi") {
    jarilloVI.forEach((buttonText) => {
      const sectionButton = document.createElement("button");
      sectionButton.classList.add("sectionButton");
      sectionButton.textContent = buttonText;
      sectionButtonsContainer.appendChild(sectionButton);

      // Add click event listener to each button
      sectionButton.addEventListener("click", function () {
        // Get the image container
        const zoomableImageContainer =
          document.querySelector(".zoomable-image");

        // Remove any existing image
        const existingImage = zoomableImageContainer.querySelector("img");
        if (existingImage) {
          existingImage.remove();
        }

        // Create and append new image based on the button clicked
        const newImageSrc = `css/Star Rail/Maps Location/Jarilo VI/J6 ${buttonText}.png`;
        const newImage = document.createElement("img");
        newImage.src = newImageSrc;
        newImage.classList.add("test");
        zoomableImageContainer.appendChild(newImage);
      });
    });
  }
  if (planet == "xtl") {
    xianzhouLoufu.forEach((buttonText) => {
      const sectionButton = document.createElement("button");
      sectionButton.classList.add("sectionButton");
      sectionButton.textContent = buttonText;
      sectionButtonsContainer.appendChild(sectionButton);

      // Add click event listener to each button
      sectionButton.addEventListener("click", function () {
        // Get the image container
        const zoomableImageContainer =
          document.querySelector(".zoomable-image");

        // Remove any existing image
        const existingImage = zoomableImageContainer.querySelector("img");
        if (existingImage) {
          existingImage.remove();
        }

        // Create and append new image based on the button clicked
        const newImageSrc = `css/Star Rail/Maps Location/Xianzhou the Loufu/${buttonText}.png`;
        const newImage = document.createElement("img");
        newImage.src = newImageSrc;
        newImage.classList.add("test");
        zoomableImageContainer.appendChild(newImage);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sectionButtonsContainer = document.getElementById(
    "sectionButtonsContainer"
  );
  sectionButtonsContainer.innerHTML = ""; // Clear existing buttons
  hertaSpaceStation.forEach((buttonText) => {
    const sectionButton = document.createElement("button");
    sectionButton.classList.add("sectionButton");
    sectionButton.textContent = buttonText;
    sectionButtonsContainer.appendChild(sectionButton);

    // Add click event listener to each button
    sectionButton.addEventListener("click", function () {
      // Get the image container
      const zoomableImageContainer = document.querySelector(".zoomable-image");

      // Remove any existing image
      const existingImage = zoomableImageContainer.querySelector("img");
      if (existingImage) {
        existingImage.remove();
      }

      // Create and append new image based on the button clicked
      const newImageSrc = `css/Star Rail/Maps Location/Herta Space Station/HSS ${buttonText}.png`;
      const newImage = document.createElement("img");
      newImage.src = newImageSrc;
      newImage.classList.add("test");
      zoomableImageContainer.appendChild(newImage);
    });
  });
  // Zoomable image functionality
  const zoomableImage = document.querySelector(".zoomable-image");
  let scale = 1;
  let isDragging = false;
  let startX,
    startY,
    translateX = 0,
    translateY = 0;

  zoomableImage.addEventListener("wheel", function (event) {
    event.preventDefault();

    // Adjust the zoom sensitivity by changing the value of 0.1
    const zoomDelta = -event.deltaY * 0.001;

    // Limit the minimum and maximum scale
    scale = Math.min(Math.max(0.5, scale + zoomDelta), 3);

    // Apply the zoom level
    zoomableImage.style.transform = `scale(${scale})`;

    // Adjust the translate values based on the zoom level
    translateX *= scale / (scale - zoomDelta);
    translateY *= scale / (scale - zoomDelta);

    // Apply the adjusted translation
    zoomableImage.style.transform += `translate(${translateX}px, ${translateY}px)`;
  });

  zoomableImage.addEventListener("mousedown", function (event) {
    event.preventDefault(); // Prevent default drag behavior

    isDragging = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      translateX = event.clientX - startX;
      translateY = event.clientY - startY;
      zoomableImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });
});
