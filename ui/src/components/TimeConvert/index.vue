<template>
    <div class="q-pa-md">
      <div class="row">
        <div class="col col-sm-5 col-md-3">
            <q-chip clickable @click="timeStampClick" icon="alarm">
                {{ timeStamp }}
            </q-chip>
        </div>
        <div class="col col-auto">
            <span> &lt;- -&gt; </span>
        </div>
        <div class="col col-sm-5 col-md-3">
            <q-chip clickable @click="localeStringClick" icon="alarm">
                {{ localeString }}
            </q-chip>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-5 col-md-3">
            <q-input
            standout 
            v-model="inputTimeStamp"
            :label="$t('TimeConvert.timeStamp')"
            /> 
        </div>
        <div class="col col-auto">
            <q-btn color="primary" :label="$t('TimeConvert.convert')" @click="convertToLocale()">
            </q-btn>
        </div>
        <div class="col col-sm-5 col-md-3">
            <q-input
            standout 
            v-model="resultLocaleTime"
            :label="$t('TimeConvert.localeTime')"
            /> 
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-5 col-md-3">
            <q-input
            standout 
            v-model="inputLocaleTime"
            :label="$t('TimeConvert.localeTime')"
            /> 
        </div>
        <div class="col col-auto">
            <q-btn color="primary" :label="$t('TimeConvert.convert')" @click="convertToStamp()">
            </q-btn>
        </div>
        <div class="col col-sm-5 col-md-3">
            <q-input
            standout 
            v-model="resultTimeStamp"
            :label="$t('TimeConvert.timeStamp')"
            /> 
        </div>
      </div>
    </div>
</template>
<script src="./TimeConvert"></script>