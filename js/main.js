window.onload = function (e) {

  var clsParentBox = 'nono'
  var allInputShow = document.querySelectorAll('.translate--input--show')

  allInputShow.forEach(elm => {
    elm.onclick = (e) => {
      var parentBox = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
      var clsName = parentBox.getAttribute('x-attribute')
      parentBox.classList.toggle('show-menu')
      clsParentBox = '.' + clsName // not var

      var newInputAll = document.querySelectorAll(clsParentBox + ' .input--detail .detail--item')
      newInputAll.forEach(elm => {
        elm.onclick = (e) => {
          var newInput = e.target.parentElement
          var oldInput = document.querySelector(clsParentBox + ' .translate--input--show .detail--item')
          oldInput.innerHTML = newInput.innerHTML


          var currentCheck1 = document.querySelector(clsParentBox + ' .check1')
          if (currentCheck1) {
            currentCheck1.classList.remove('check1')
          }
          console.log(currentCheck1)

          elm.classList.add('check1')


          hideMenu(clsParentBox)
          e.stopPropagation()
        }
      })

      setFocusToTextBox(clsParentBox)

      var allParentBox = document.querySelectorAll('.translate--select')
      allParentBox.forEach(elm => {
        var artName = elm.getAttribute('x-attribute')
        var atrNameCls = '.' + artName
        if (atrNameCls !== clsParentBox) {
          hideMenu(atrNameCls)
        }
      })

      e.stopPropagation()
    }
  })

  function hideMenu(parent) {
    document.querySelector(parent).classList.remove('show-menu')
  }

  function setFocusToTextBox(parent) {
    document.querySelector(parent + ' .translate--input').focus()
  }

  window.addEventListener('click', function (e) {
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
