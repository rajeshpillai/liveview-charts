defmodule DemoWeb.SparkLine do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_component

  def mount(socket) do
    socket = assign(socket, :fill_color, "#DCE6EC")
    {:ok, socket}
  end

  @spec render(any) :: Phoenix.LiveView.Rendered.t()
  def render(assigns) do
    ~H"""
    <div id="spark-line" phx-hook="SparkLine"
      class="item-content"
      data-title= {@title}
      data-subtitle= {@subtitle}
      data-fill-color = {@fill_color}
      data-chart-data={"#{Jason.encode!(@data)}"}>
    </div>
    """
  end
end
