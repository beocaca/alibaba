window.onload = function (e) {


  /*var element = document.querySelector('.country .translate--input--show')
  var elementDetailItem = document.querySelector('.country .translate--input--show .detail--item')
  element.onclick = (e) => {
    countryBox.classList.toggle('show-menu')
    setFocusToTextBox()
    e.stopPropagation()
  }*/

  var clsParentBox = 'itshavechange'
  var allInputShow = document.querySelectorAll('.translate--input--show')
  allInputShow.forEach((elm) => {

    elm.onclick = (e) => {
      var parentBox = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
      var clsName = parentBox.getAttribute('x-attribute')
      // x = coutry   languege currency
      parentBox.classList.toggle('show-menu')
      clsParentBox = '.' + clsName
      //='.stringClass'
      setFocusToTextBox(clsParentBox)

      var allParentBox = document.querySelectorAll('.translate--select')
      allParentBox.forEach(e => {
        var atrName = e.getAttribute('x-attribute')
        var atrNameCls = '.' + atrName
        if (atrNameCls !== clsParentBox) {
          hideMenu(atrNameCls)
        }
        console.log(atrNameCls)
      })

      var allMenuItemBox = document.querySelectorAll(clsParentBox + ' .input--detail .detail--item')
      var elementDetailItem = document.querySelector(clsParentBox + ' .translate--input--show .detail--item')
      allMenuItemBox.forEach((elm) => {
        elm.onclick = (e) => {

          var menuItem = e.target.parentElement.innerHTML
          elementDetailItem.innerHTML = menuItem
//xoa check item truoc
          var crrCheck1 = document.querySelector(clsParentBox + ' .check1')
          if (crrCheck1) {
            crrCheck1.classList.remove('check1')
          }
          console.log(crrCheck1)
//add only 1 check item
          elm.classList.toggle('check1')

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
  }

  window.addEventListener('click', function (e) {
    console.log(clsParentBox)
    if (document.querySelector(clsParentBox) === null || document.querySelector(clsParentBox).contains(e.target) == null) {

    } else {
      var parentBox = document.querySelector(clsParentBox)
      // parentBox.classList.toggle('show-menu')
      if (parentBox.classList.contains(('show-menu'))) {
        parentBox.classList.toggle('show-menu')
      }
    }
  })
}

