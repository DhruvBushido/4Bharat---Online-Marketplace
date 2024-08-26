var allSelector = {
    image: document.querySelector(".client-img img"),
    name: document.querySelector(".name"),
    title: document.querySelector(".title"),
    review: document.querySelector(".review p"),
    prev: document.querySelector(".prev"),
    next: document.querySelector(".next"),
    random: document.querySelector(".random-btn")
  }
  
  var images = [
    "p1.jpg",
    "p2.jpg",
    "p3.jpg",
    "p4.jpg"
  ];
  
  var names = [
    "Susan Smith",
    "Israel Oliveira",
    "Bruno Salvadori",
    "Andrea Piacquadio"
  ];
  
  var titles = [
    "WEB DEVELOPER",
    "PHOTOGRAPHER",
    "ARTIST",
    "JUDGE"
  ];
  
  var reviews = [
    "Kutchi embroidery sarees captivate with their kaleidoscopic threads, weaving stories of culture and artistry.",
    "Vibrant hues and meticulous stitches converge in Kutchi sarees, celebrating the heritage of Gujarat",
    "Each Kutchi embroidery saree is a masterpiece of skill, a harmonious blend of tradition and contemporary allure.",
    "The artistry of Kutchi embroidery transforms every saree into a visual symphony, a celebration of Indian craftsmanship."
  ];
  
  var update = 0;
  
  // next button event
  allSelector.next.addEventListener("click", function () {
    if (update >= names.length - 1) {
      update = 0;
    } else {
      update++;
    }
  
    allSelector.image.src = images[update];
    allSelector.name.innerText = names[update];
    allSelector.title.innerText = titles[update];
    allSelector.review.innerText = reviews[update];
  });
  
  // prev button event
  allSelector.prev.addEventListener("click", function () {
    if (update <= 0) {
      update = names.length - 1;
    } else {
      update--;
    }
  
    allSelector.image.src = images[update];
    allSelector.name.innerText = names[update];
    allSelector.title.innerText = titles[update];
    allSelector.review.innerText = reviews[update];
  });
  
  allSelector.random.addEventListener("click", function () {
    update = Math.floor(Math.random() * names.length);
  
    allSelector.image.src = images[update];
    allSelector.name.innerText = names[update];
    allSelector.title.innerText = titles[update];
    allSelector.review.innerText = reviews[update];
  });