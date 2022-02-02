import LineChart from "./chart-types/line-chart"
import LineColumnChart from "./chart-types/line-column-chart";
import PieChart from "./chart-types/pie-chart";
import SparkLine from "./chart-types/spark-line";

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
    const fill_color = this.el.dataset.fillColor;


    this.chart = new SparkLine(this.el, labels, values, title, subtitle, fill_color);
    this.chart.render();
  }
}


Hooks.LineColumnChart = {
  mounted() {
    console.log("SparkLine mounted...", this.el.dataset.chartData);
    const { labels, values } = JSON.parse(this.el.dataset.chartData)
    const title  = this.el.dataset.title
    const subtitle  = this.el.dataset.subtitle
    const fill_color = this.el.dataset.fillColor;


    this.chart = new LineColumnChart(this.el, labels, values, title, subtitle, fill_color);
    this.chart.render();
  }
}


Hooks.PieChart = {
  mounted() {
    console.log("PieChart mounted...", this.el.dataset.labels);
    const labels  = JSON.parse(this.el.dataset.labels)
    const series = JSON.parse(this.el.dataset.series)

    console.log("HP: ", labels, series);
    this.chart = new PieChart(this.el, labels, series);
    this.chart.render();
  }
}



export default Hooks;
