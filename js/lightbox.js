(function () {
  var gallery = document.querySelector(".wallpaper-gallery");
  if (!gallery) return;

  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Wallpaper preview");
  lightbox.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close wallpaper preview">&times;</button>' +
    '<div class="lightbox-frame"><img class="lightbox-image" alt="" /></div>';
  document.body.appendChild(lightbox);

  var preview = lightbox.querySelector(".lightbox-image");
  var closeButton = lightbox.querySelector(".lightbox-close");
  var lastFocused = null;

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (lastFocused) lastFocused.focus();
  }

  function open(image) {
    lastFocused = image;
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  gallery.querySelectorAll("img").forEach(function (image) {
    image.setAttribute("role", "button");
    image.setAttribute("tabindex", "0");
    image.setAttribute("aria-label", "Open " + image.alt + " full size");
    image.addEventListener("click", function () { open(image); });
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(image);
      }
    });
  });

  closeButton.addEventListener("click", close);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", function (event) {
    if (!lightbox.hidden && event.key === "Escape") close();
  });
})();
