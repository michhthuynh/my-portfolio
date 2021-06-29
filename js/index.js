const menuButton = document.getElementById('navbar__bars')
const menuList = document.getElementById('navbar__menu')

function handleClickOpen() {
  menuButton.innerHTML = '<i class="fas fa-times" onclick="handleClickClose()"></i>'
  menuList.classList.add('expanded')
}

function handleClickClose() {
  menuButton.innerHTML = '<i class="fas fa-bars" onclick="handleClickOpen()"></i>'
  menuList.classList.remove('expanded')
}

$(window).resize(function () {
  console.log('resize called');
  if ($(window).width() > 768) {
    menuList.classList.remove('expanded')
    menuButton.innerHTML = '<i class="fas fa-bars" onclick="handleClickOpen()"></i>'
  }
})