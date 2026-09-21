(function () {
  var ADMIN_PASS = "91648";
  var remainingWallpapers = [
    "wallpaper-01-dog.jpg",
    "wallpaper-02-cat.jpg",
    "wallpaper-03-lion.jpg",
    "wallpaper-04-monkey.jpg",
    "wallpaper-05-wolf.jpg",
    "wallpaper-06-fox.jpg",
    "wallpaper-07-elephant.jpg",
    "wallpaper-09-tiger.jpg",
    "wallpaper-10-panda.jpg",
    "wallpaper-11-horse.jpg",
    "wallpaper-12-bunny.jpg",
    "wallpaper-13-bear.jpg",
    "wallpaper-14-deer.jpg",
    "wallpaper-16-dolphin.jpg",
    "wallpaper-17-penguin.jpg",
    "wallpaper-18-giraffe.jpg",
    "wallpaper-19-zebra.jpg"
  ];

  var form = document.querySelector("#admin-login");
  var password = document.querySelector("#admin-password");
  var error = document.querySelector("#admin-error");
  var manager = document.querySelector("#admin-manager");
  var listing = document.querySelector("#wallpaper-list");

  function renderWallpapers() {
    remainingWallpapers.forEach(function (filename) {
      var card = document.createElement("article");
      card.className = "admin-card";
      card.innerHTML =
        '<img src="assets/' + filename + '" alt="Thumbnail for ' + filename + '" loading="lazy" />' +
        '<div class="admin-card-body"><code>' + filename + '</code>' +
        '<a class="btn btn-ghost" href="assets/' + filename + '" target="_blank" rel="noopener">Open full size</a></div>';
      listing.appendChild(card);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (password.value === ADMIN_PASS) {
      error.textContent = "";
      form.hidden = true;
      manager.hidden = false;
      renderWallpapers();
      password.value = "";
    } else {
      error.textContent = "Incorrect password.";
      password.select();
    }
  });
})();
