<template>
    <div class="q-pa-md">
      <div class="row">
        <q-badge color="primary">
        {{ $t("Password.length") }} 
        </q-badge>

        <q-slider
        v-model="pwdLength"
        :min="3"
        :max="50"
        :step="1"
        label
        @change="generatePassword"
        />
      </div>
      <div class="row">
        <q-badge color="primary">
        {{ $t("Password.include") }} 
        </q-badge>
      </div>
      <div class="row">
            <q-option-group
            :options="includeLetters"
            type="checkbox"
            v-model="selectLetters"
            inline
            @update:model-value="generatePassword"
            />
      </div>
      <div class="row">
        <div class="col col-12 items-start">
        <q-input inline :label-color="resultColor" outlined v-model="password" :label="$t('Password.password')" @blur="checkQuality">
            <template v-slot:append>
            <q-badge :color="resultColor" >{{ $t('Password.strength') + $t(`Password.${quality}`) }}</q-badge>
            </template>
            <template v-slot:prepend>
            <q-btn round flat icon="refresh" @click="generatePassword"/>
            </template>
        </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col col-auto"> 
            <q-chip :color="resultColor" text-color="white">
            {{ $t("Password.qualityDetail", {count, crackTime, units: $t(`Password.${units}`) }) }} 
            </q-chip>
        </div>
        <div class="col col-auto">
            <q-chip color="gray" icon="info">
                {{  $t("Password.hint") }}
            </q-chip>
        </div>
      </div>
    </div>
</template>
<script src="./Password"></script>