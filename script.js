//This function can create new links as needed.
function createNewLink(className, idName, name, hrefName) {
    let newLink = document.createElement('A');
    let newClass = className;
    let newId = idName;
    newLink.textContent = name;
    let newHref = hrefName;

    newLink.setAttribute("class", newClass);
    newLink.setAttribute("id", newId);
    newLink.setAttribute("href", newHref);
    return newLink;
}

const list = document.getElementById('list');
const firstItem = document.getElementById('link1');

//adds links that will only be shown in hamburger menu.
list.insertBefore(createNewLink("nav-items", "newHome", 'Home', "/index.html"), firstItem);
list.appendChild(createNewLink("nav-items", "newDiscord", 'Discord', "https://discord.com/channels/587299617981464599/590731489608597505"));

//This function will run onload if screen size is mobile.
function hamburger() {
    if (screen.width <= 420) {
        document.getElementById('hamburger1').removeAttribute("href");
        document.getElementById('hamburger').onclick = function () {
            document.querySelector("ul").style.flexDirection = "column";
            document.querySelector("ul").style.lineHeight = "4rem";
            document.getElementById('hamburger').style.marginLeft = "250%";
            document.querySelector("nav").style.position = "fixed";

            //redisplay nav-items
            if (document.getElementById('link1')) {
                document.getElementById('link1').style.display = "flex";
            }
            if (document.getElementById('link2')) {
                document.getElementById('link2').style.display = "flex";
            }
            if (document.getElementById('link3')) {
                document.getElementById('link3').style.display = "flex";
            }
            if (document.getElementById('link4')) {
                document.getElementById('link4').style.display = "flex";
            }
            //Warning!! Only uncomment this when you are certain we want to link the merch store.
            // if (document.getElementById('link5')) {
            //     document.getElementById('link5').style.display = "flex";               
            // }
            if (document.getElementById('newHome')) {
                document.getElementById('newHome').style.display = "flex";
            }
            if (document.getElementById('newDiscord')) {
                document.getElementById('newDiscord').style.display = "flex";
            }
            document.getElementById('hamburger').onclick = function () {
                document.querySelector("newHome").style.display = "none";
            }
        }
    }
}

