defmodule DemoWeb.LineChartLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_view

  def mount(_params, _session, socket) do
    temperature = 100
    {:ok, assign(socket, :temperature, temperature)}
  end

  def render(assigns) do
    ~H"""
    <div id="chart" phx-hook="LineChart">

    </div>
    """
  end


end
