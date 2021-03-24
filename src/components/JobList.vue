<template>
    <div>
      <div class="job-container">

        <div class="thumbnail">
          <img v-bind:src="'src/assets/' + item.logo"
               v-bind:alt=item.company>
        </div>
        <div class="description">

          <div class="company-name">
            {{ item.company }}
          </div>
          <div class="job-title">
            {{ item.position }}
          </div>
          <div class="job-footer">
            <ul>
              <li>{{ item.postedAt }}</li>
              <li>{{ item.contract }}</li>
              <li>{{ item.location }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="job-tags">
        <span v-for="tag in item.languages" v-on:click="addToTags(tag)">{{ tag }}</span>
      </div>
    </div>

</template>


<script>


export default {
  name: "JobList",
  props: ['item'],
  data: function () {
    return {

    }
  },

  methods: {
    addToTags(tag) {
      //When a tag has been added sends a message to the parent to trigger 'add-to-tags with the selected tag
      this.$emit('add-to-tags', tag);
    },
  },


}
</script>
