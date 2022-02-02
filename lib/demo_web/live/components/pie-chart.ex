defmodule DemoWeb.PieChart do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use DemoWeb, :live_component

  def mount(socket) do
    {:ok, socket}
  end

  @spec render(any) :: Phoenix.LiveView.Rendered.t()
  def render(assigns) do
    ~H"""
    <div phx-hook="PieChart"
      data-labels={"#{Jason.encode!(@labels)}"}
      data-series={"#{Jason.encode!(@series)}"}
    />

    """
  end
end
