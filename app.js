const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    selected: ''
  },
  mounted() {
    axios.get("https://newsapi.org/v2/everything?q=fauquier&pageSize=50&sortBy=publishedAt&apiKey=3f0d145189a442debea66f9614883f40")
    .then(response => {this.results = response.data.articles})
  }
});
