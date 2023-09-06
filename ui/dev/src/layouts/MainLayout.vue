<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          to="/"
          icon="home"
        />

        <q-toolbar-title>
          {{ $t('mainContext.title') }}
        </q-toolbar-title>

        <div>
          <q-select
            v-model="locale"
            :options="localeOptions"
            :label="$t('mainContext.language')"
            dense
            borderless
            emit-value
            map-options
            options-dense
            style="min-width: 150px"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from 'ui' // "ui" is aliased in quasar.conf.js
import { useI18n } from 'vue-i18n'

export default {
  name: 'MainLayout',

  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      version,
      locale,
      localeOptions: [
        { value: 'en', label: 'English' },
        { value: 'zh-CN', label: '简体中文' }
      ]
    }
  }
}
</script>
