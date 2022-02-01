import LineChart from "./line-chart"
import SparkLine from "./spark-line";

let Hooks = {};

Hooks.LineChart = {
  mounted() {
    console.log("Linechart mounted...", this.el.dataset.chartData);
    const { labels, values } = JSON.parse(this.el.dataset.chartData)
    this.chart = new LineChart(this.el, labels, values);
    this.chart.render();
  }
}

Hooks.SparkLine = {
  mounted() {
    console.log("SparkLine mounted...", this.el.dataset.chartData);
    const { labels, values } = JSON.parse(this.el.dataset.chartData)
    const title  = this.el.dataset.title
    const subtitle  = this.el.dataset.subtitle

    this.chart = new SparkLine(this.el, labels, values, title, subtitle);
    this.chart.render();
  }
}


export default Hooks;
