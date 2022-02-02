class PieChart {
  constructor(el, labels, series) {
    this.el = el;
    this.labels = labels;
    this.series = series;
  }
  render() {
    var options = {
      series: this.series,
      chart: {
      width: 380,
      type: 'pie',
    },
    labels: this.labels,
    responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    console.log(options);
    
    var chart = new ApexCharts(this.el, options);
    
    chart.render();
  }
}

export default PieChart;