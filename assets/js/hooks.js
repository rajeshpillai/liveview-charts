import LineChart from "./line-chart"

let Hooks = {};

Hooks.LineChart = {
  mounted() {
    console.log("Linechart mounted...", this.el.dataset.chartData);
    const { labels, values } = JSON.parse(this.el.dataset.chartData)
    this.chart = new LineChart(this.el, labels, values);
    this.chart.render();
  }
}


export default Hooks;
