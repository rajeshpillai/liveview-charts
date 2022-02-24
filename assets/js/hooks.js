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

Hooks.MuuriHook = {
  async mounted() {
    // const { default: Muuri } = await import("muuri");
    console.log("Muuri mounted...");
    this.grid = new Muuri(this.el, {
      dragEnabled: true,
      dragSortPredicate: { action: "swap" },
      layout: { fillGaps: true },
    });

    window.grid = this.grid;
  },

  updated() {
    const newChildren = Array.from(this.el.children).filter((c) => {
      return !c.classList.contains("muuri-item");
    });

    this.grid.add(newChildren, { index: 0 });
  },
  reconnected() {
    this.grid.refreshItems();
    this.grid.layout();
  },
};

export function cloneContainer(from, to) {
  to.classList.add("muuri");
  to.style.cssText = from.style.cssText;
}

export function cloneItem(from, to) {
  const muuriClasses = Array.from(from.classList).filter((c) =>
    c.startsWith("muuri")
  );
  to.classList.add(...muuriClasses);
  to.style.cssText = from.style.cssText;
}



export default Hooks;
