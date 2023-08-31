import Components from './components/Component'


const version = __UI_VERSION__

function install (app) {
  Components.forEach(Com => {
    app.component(Com.name, Com)
  });

}

export {
  version,
  Components,

  install
}
