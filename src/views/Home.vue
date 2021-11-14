<template>
  <div>
    {{ favoriteCurrenciesList }}
  </div>
</template>

<script>
import { FAVORITE_CURRENCIES } from '@/store/actions.type';
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      favoriteCurrenciesList: [],
    }
  },
  mounted() {
    this.$store.dispatch(FAVORITE_CURRENCIES).then(() => {
      this.favoriteCurrenciesList = this.favoriteCurrencies
    })
  },
  computed: {
    ...mapGetters(['favoriteCurrencies'])
  }
};

</script>

<style></style>
