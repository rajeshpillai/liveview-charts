function randomizeArray() {
  return [10, 150, 60, 100,350]
}
class SparkLine {
  constructor(el, labels, values, title, subtitle, fill_color) {
    this.el = el;
    this.labels = labels;
    this.values = values;
    this.title = title;
    this.subtitle = subtitle;
    this.fill_color = fill_color;
  }
  render() {
    var options = {
      series: [{
       data: randomizeArray()
      }],
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0
      },
      colors: [this.fill_color],

      title: {
        text: this.title,
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: this.subtitle,
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
    };
    
    var chart = new ApexCharts(this.el, options);
    
    chart.render();
  }
}

export default SparkLine;