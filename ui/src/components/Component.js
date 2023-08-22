import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'ToolBoxWeb',

  setup () {
    return () => h(QBadge, {
      class: 'ToolBoxWeb',
      label: 'ToolBoxWeb'
    })
  }
}
