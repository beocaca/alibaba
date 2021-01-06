window.onload = function (e) {
  var clsParentBox = 'itshavechange'
  var countryBox = document.querySelector('.language')
  console.log(countryBox)
  /*var element = document.querySelector('.country .translate--input--show')
  var elementDetailItem = document.querySelector('.country .translate--input--show .detail--item')
  element.onclick = (e) => {
    countryBox.classList.toggle('show-menu')
    setFocusToTextBox()
    e.stopPropagation()
  }*/


  var allElement = document.querySelectorAll('.translate--input--show')
  allElement.forEach((elm) => {
    elm.onclick = (e) => {
      var parentBox = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
      var clsName = parentBox.getAttribute('x-attribute')
      // x = coutry   languege currency
      parentBox.classList.toggle('show-menu')
      clsParentBox = '.' + clsName
      //='.stringClass'
      setFocusToTextBox(clsParentBox)


      var allMenuItemBox = document.querySelectorAll(clsParentBox + ' .input--detail' + clsParentBox + '--detail  .detail--item')
      var elementDetailItem = document.querySelector(clsParentBox + ' .translate--input--show .detail--item')
      allMenuItemBox.forEach((elm) => {
        elm.onclick = (e) => {
          var MenuItem = e.target.parentElement.innerHTML
          elementDetailItem.innerHTML = MenuItem
          // console.log(e.target.parentElement)
          hideMenu(clsParentBox)
          console.log(clsParentBox)
          e.stopPropagation()
        }


      })


      e.stopPropagation()

    }
  })


  /*allElement.forEach(elm => {
    elm.onclick = (e) => {
      var parentBox = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
      console.log(parentBox, e)
      parentBox.classList.toggle('show-menu')

      var clsName = parentBox.getAttribute('x')
      setFocusToTextBox('.' + clsName) // .country
      //
      /!* if(parentBox.classList.contains('language')) {
         setFocusToTextBox('.language')
       }else if(parentBox.classList.contains('country')) {
         setFocusToTextBox('.country')
       }*!/

      e.stopPropagation()
    }

  })*/

  function hideMenu(parent) {
    document.querySelector(parent).classList.remove('show-menu')

  }

  function setFocusToTextBox(parent) { // .country .translate--input
    document.querySelector(parent + " .translate--input").focus();
    e.stopPropagation()
  }

  var allMenuItemCountry = document.querySelectorAll('.country .input--detail.country--detail  .detail--item')

  /*
    allMenuItemCountry.forEach(elm => {
      elm.onclick = function (e) {
        var htmlItem = e.target.parentElement.innerHTML
        elementDetailItem.innerHTML = htmlItem
        hideCountryBox()
        console.log(htmlItem)
        e.stopPropagation()
      }
    })
  */

  window.addEventListener('click', function (e) {
    if (document.querySelector(clsParentBox).contains(e.target)) {

    } else {
      var parentBox = document.querySelector(clsParentBox)
      // parentBox.classList.toggle('show-menu')
      if (parentBox.classList.contains(('show-menu'))) {
        parentBox.classList.toggle('show-menu')
      }
    }
  })
}

