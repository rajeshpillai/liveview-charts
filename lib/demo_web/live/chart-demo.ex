defmodule DemoWeb.ChartDemoLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_view

  alias DemoWeb.LineChart
  alias DemoWeb.SparkLine
  alias DemoWeb.LineColumnChart

  def mount(_params, _session, socket) do
    {:ok, assign(socket, :chart_data, get_chart_data())}
  end


  defp get_chart_data do
    chart_data = %{
      labels: ["10-Jan-2022","11-Jan-2022","12-Jan-2022","13-Jan-2022","14-Jan-2022","15-Jan-2022","16-Jan-2022"],
      values: [50,30,45,33,35,89]
    }
    chart_data
  end
end
