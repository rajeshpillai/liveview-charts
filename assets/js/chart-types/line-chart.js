class LineChart {
  constructor(el, labels, values) {
    this.el = el;
    this.labels = labels;
    this.values = values;
  }
  render() {
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'tickets',
        data: this.values
      }],
      xaxis: {
        categories: this.labels
      }
    }
    
    var chart = new ApexCharts(this.el, options);
    
    chart.render();
  }
}

export default LineChart;