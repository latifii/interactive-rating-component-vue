<template>
  <base-card>
    <div>
      <img src="@/assets/illustration-thank-you.svg" alt="thank you icon">
    </div>
    <p class="result">You selected {{resRating}} out of 5</p>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </base-card>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "RatingResponse",
  components: {
    BaseCard,
  },
  computed:{
     resRating (){
        return this.$route.params.rating;
     }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
.result{
 border-radius : $border-radius; 
 background-color: $color-hightmedium-grey ;
 color:$color-orange;
 font-size: $font-size-p;
 padding: 6px 20px;
 margin:0 auto;
 width: fit-content;
 opacity: .7;
}
h2{
  margin:0;
  font-size:$font-size-l;
  color:$color-white;
}
p{
  @include paragraph;
  text-align: center;
}
</style>