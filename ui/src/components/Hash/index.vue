<template>
    <div class="q-pa-md">
      <div class="row">
        {{ $t('Hash.plainText') }}:
        <q-input
          v-model="textSource"
          filled
          autogrow
        />
      </div>
      <div class="row">
        <div class="col-lg-1 col-md-4 col-xs-6">
          <q-btn-dropdown split color="primary" :label="algorithmList[0]" @click="onItemClick(algorithmList[0])" style="width: 120px">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick(algorithm)" v-for="algorithm in algorithmList.slice(1)" :key="algorithm" >
                <q-item-section>
                  <q-item-label>{{ algorithm }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="col-lg-1 col-md-4 col-xs-6">
          <q-toggle
            :label="$t(`Hash.${upperCase}`)"
            color="pink"
            false-value="lowerCase"
            true-value="upperCase"
            v-model="upperCase"
            @update:model-value="onItemClick(algorithmList[0])"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-xs-12">
          <q-input
          type="number"
          standout 
          v-model="repeatCount"
          :label="$t('Hash.repeatCount')"
          :max="10"
          :min="1"
        /> 
        </div>
        <div class="col-lg-8 col-xs-12">
          <q-input
          standout 
          v-model="textKey"
          :label="$t('Hash.appendKey')"
        /> 
        </div>
        
      </div>
      <div class="row">
        <q-input
          v-model="textResult"
          :placeholder="$t('Hash.resultText')"
        /> 
      </div>
  </div>
</template>
<script src="./Hash"></script>