import LineChart from "./line-chart"

let Hooks = {};

Hooks.LineChart = {
  mounted() {
    console.log("Linechart mounted...");
    // const { labels, values } = JSON.parse(this.el.dataset.chartData)
    this.chart = new LineChart(this.el);
    this.chart.render();
  }
}


export default Hooks;
