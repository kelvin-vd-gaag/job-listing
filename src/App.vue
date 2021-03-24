<template>
  <div>
    <header>
      <div class="filter">
        <div class="filter-container">
          <div class="tablets">
            <span v-for="tag in tags" @click="removeTag(tag)">{{ tag }}</span>
          </div>
          <span class="clear-button" v-on:click="clearTags">Clear</span>
        </div>
      </div>
    </header>
    <div class="job-listings">
      <div class="job-item">
        <JobList @add-to-tags="addTag"
                 v-for="item in jobFilter"
                 v-bind:key="item.id"
                 v-bind:item="item"

        ></JobList>
      </div>
    </div>
  </div>
</template>

<script>

import JobList from "./components/JobList";
import data from './data.json'

export default {
  name: 'app',
  data() {
    return {
      tags: this.$tags,
      filteredJobs: [],
    }
  },
  components: {
    JobList
  },
  methods: {

    addTag(tag) {
      /*TODO: Currently it's required to change the state of filteredJobs to trigger the computed property. I think this is against  best practices as it feels like a hack*/
      this.filteredJobs = [];

      //Checks if the selected tag isn't already in the array
      //If the tag is NOT in the array, add it to the array.
      if (!this.$tags.includes(tag)) {
        this.$tags.push(tag)
      }
    },

    removeTag(tag) {
      /*TODO: Currently it's required to change the state of filteredJobs to trigger the computed property. I think this is against  best practices as it feels like a hack*/
      this.filteredJobs = [];

      //Sends through the selected tag and looks for the index number in the tags array.
      //Then removes that index from the arrray
      let index = this.$tags.indexOf(tag);
      this.$tags.splice(index, 1)

    },

    clearTags() {
      /*TODO: Currently it's required to change the state of filteredJobs to trigger the computed property. I think this is against  best practices as it feels like a hack*/
      this.filteredJobs = [];

      //Removes every entry from the array
      while (this.$tags.length > 0) {
        this.$tags.pop();
      }
    },



  },

  computed: {
    //gets triggered when the state of filteredJob Changes
    jobFilter: function () {

      //Loop through all available jobs.
      for (let b = 0; b < data.length; b++) {
        //Checks if a selected tag exists in a job.
        check: if (this.$tags.every(i => data[b].languages.includes(i)) === true) {
          //If a match has been found, adds that specific job to the array of filtered jobs.
          this.filteredJobs.push(data[b])
          break check;
        }
      }
      return this.filteredJobs;
    }
  }

}
</script>

