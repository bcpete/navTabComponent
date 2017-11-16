Vue.component('navtabs', {
  
  props: [],
  
  data() {
    return {
      navtabs: []
    }
  },
  
  template: 
  `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in navtabs" :class="{ 'is-active' : tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `,
  
  methods: {
    selectTab(selectedTab) {
      this.navtabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  },

  created() {
    this.navtabs = this.$children;
  }
});

Vue.component('tab', {
  props:{ 
    name: {
      required: true
    },
    selected: {
      default: false
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  template: 
  `
    <div v-show="isActive"><slot></slot></div>
  `,

  methods: {

  },

  mounted() {
    this.isActive = this.selected;
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
});
  
new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});