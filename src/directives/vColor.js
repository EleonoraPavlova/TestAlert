let interval
let defaultColor

const mouseover = event => {
  event.target.style.color = "pink"
  //текущий элемент, изменение цвета наведение над обьектом
}
const mouseout = event => {
  event.target.style.color = defaultColor
}

export default {
  mounted(el, binding) {
    //вызывается один раз при отрисовке элемента
    console.log(el)
    console.log(binding)//в консольке это dir

    defaultColor = binding.value
    el.style[binding.arg] = binding.value

    //blink title
    if (binding.modifiers.blink) {
      let flag = true
      setInterval(() => {
        el.style.color = flag ? '#fff' : binding.value
        flag = !flag
      }, 900)
    }

    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover) //мышка над елементом 
      el.addEventListener('mouseout', mouseout) //мышка уводим от елемента
    }
  },
  updated(el, binding) {
    //если хотим отследить динамику
    el.style[binding.arg] = binding.value
  },
  unmounted(el) {
    //удаление очистка карточки, чего либо
    console.log('unmounted')
    if (interval) {
      clearInterval(interval)
    }
    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  },
}
