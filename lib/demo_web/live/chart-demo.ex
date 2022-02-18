defmodule DemoWeb.ChartDemoLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_view

  alias DemoWeb.LineChart
  alias DemoWeb.SparkLine
  alias DemoWeb.LineColumnChart
  alias DemoWeb.PieChart


  def mount(_params, _session, socket) do
    {:ok, assign(socket, chart_data: get_chart_data(), filter_month: "jan")}
  end

  def handle_event("filter-month",  %{"month" => month}, socket) do
    IO.inspect(month)
    socket =
      assign(socket,
       chart_data: get_chart_data()
      )
    {:noreply, socket}
  end


  defp get_chart_data do
    chart_data = %{
      labels: ["Jan","Feb","Mar","Apr","May"],
      values: [50,30,45,50,90]
    }
    chart_data
  end
end
