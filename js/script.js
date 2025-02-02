function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function onMenuClick() {
    var x = document.getElementById("navigation-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function searchFunction() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const blogPosts = document.querySelectorAll('.box');

    blogPosts.forEach(post => {
        const title = post.querySelector('h1').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || content.includes(searchQuery)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}