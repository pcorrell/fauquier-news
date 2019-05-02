const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    selected: ''
  },
  mounted() {
    axios.get("https://newsapi.org/v2/everything -G -d q=fauquier -d apiKey=3f0d145189a442debea66f9614883f40")
    .then(response => {this.results = response.data.articles})
  }
});
