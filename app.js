const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    selected: ''
  },
  mounted() {
    axios.get("https://newsapi.org/v2/everything%20-G%20-d%20q=fauquier%20-d%20apiKey=3f0d145189a442debea66f9614883f40")
    .then(response => {this.results = response.data.articles})
  }
});
