<template>
  <v-layout
    v-if="useful"
    justify-center
    align-center
  >
    <v-flex class="text-truncate my-2 text-right">
      <v-tooltip bottom>
        <span
          slot="activator"
          @click="toggleReveal"
        >{{ displayValue }}</span>
        <span>{{ tooltip }}</span>
      </v-tooltip>
    </v-flex>

    <v-flex
      class="my-0"
      shrink
    >
      <v-tooltip left>
        <v-btn
          slot="activator"
          small
          icon
          class="my-0"
        >
          <v-icon small>
            mdi-content-copy
          </v-icon>
        </v-btn>
        <span>{{ $i18n('copy_value_to_clipboard') }}</span>
      </v-tooltip>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { copyStringToClipboard } from "../copyStringToClipboard";

const protectedText = "**********";

export default {
    props: ["field"],
    data: () => ({
        revealed: false
    }),
    computed: {
        displayValue: function (this: any) {
            return this.field.type === "password" && !this.revealed
                ? protectedText
                : this.field.value;
        },
        tooltip: function (this: any) {
            return (
                (this.field.name ? this.field.name : "[ " + $STR("no_name") + " ]") +
        ": " +
        (this.displayValue === protectedText
            ? $STR("click_to_reveal_hide")
            : this.field.value)
            );
        },
        useful: function (this:any) {
            return this.field.type !== "checkbox" && this.displayValue.length > 0;
        }
    },
    methods: {
        toggleReveal: function (this: any) {
            this.revealed = !this.revealed;
        },
        copyValue: function (this: any) {
            copyStringToClipboard(this.field.value);
        }
    }
};
</script>
