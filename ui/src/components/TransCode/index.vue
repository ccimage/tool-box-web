<template>
    <div class="q-pa-md">
      <div class="row">
        {{ $t('TransCode.sourceText') }}:
        <q-input
          v-model="textSource"
          filled
          autogrow
        />
      </div>
      <div class="row">
        <div class="col col-sm-2 col-md-2 col-lg-2">
            <q-select standout v-model="selectMethod" :options="methodList" label="Standout" />
        </div>
        <div class="col-auto">
            <q-btn color="primary" icon="expand_more" :label="$t('TransCode.encode')" @click="encodeText()">
            </q-btn>
        </div>
        <div class="col-auto">
            <q-btn color="primary" icon="expand_less" :label="$t('TransCode.decode')" @click="decodeText()">
            </q-btn>
        </div>
      </div>
      <div class="row">
        {{ $t('TransCode.resultText') }}:
        <q-input
          v-model="textResult"
          filled
          autogrow
        />
      </div>
    </div>
</template>
<script src="./TransCode"></script>