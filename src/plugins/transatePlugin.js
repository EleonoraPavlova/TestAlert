export default {
  install(app, options) {
    let current = "en"
    const changeLanguage = name => {
      current = name
      console.log(current)
    }
    console.log('app', app)
    console.log('options', options)
    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }
    //мультиязычность
    app.config.globalProperties.$i18n = key => {
      //app.title -> [app,title]
      return key.split('.').reduce((words, k) => {
        return words[k] || '===UNKNOWN===='
      }, options[current])

    }
    app.provide('changeI18N', changeLanguage)
  }
}