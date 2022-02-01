defmodule DemoWeb.ChartDemoLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_view

  alias DemoWeb.LineChart
  alias DemoWeb.SparkLine


  def mount(_params, _session, socket) do
    {:ok, assign(socket, :chart_data, get_chart_data())}
  end

  @spec render(any) :: Phoenix.LiveView.Rendered.t()
  def render(assigns) do
    ~H"""
      <div class="row">
      <div class="card" style="width:20rem;">
        <%= live_component @socket, SparkLine,
              id: 1,
              data: get_chart_data(),
              subtitle: "In Progress" ,
              title: "150"
        %>
      </div>

      <div class="card" style="width:20rem;">
      <%= live_component @socket, SparkLine,
            id: 2,
            data: get_chart_data(),
            subtitle: "Awaiting",
            title: "40"
           %>
      </div>

      <div class="card" style="width:20rem;">
      <%= live_component @socket, SparkLine,
            id: 3,
            data: get_chart_data(),
            subtitle: "On Hold",
            title: "15"
            %>
      </div>

    </div>

    <div class="row mt-5">
      <div class="card" style="width:60rem;">

          <%= live_component @socket, LineChart,
                id: 4,
                data: get_chart_data() %>

      </div>
    </div>
    """
  end

  defp get_chart_data do
    chart_data = %{
      labels: ["10-Jan-2022","11-Jan-2022","12-Jan-2022","13-Jan-2022","14-Jan-2022","15-Jan-2022","16-Jan-2022"],
      values: [50,30,45,33,35,89]
    }

    chart_data
  end


end
