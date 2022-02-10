# Learning Goals

- How to defining components as functions
- How to return a function component's UI defined using JSX
- How to pass props to components
- How to access the properties on props within a component

# Stretch Goal

- Use CSS to style the floorplan so each section has a different background color

# Instructions

Define the following components and code them such that they fulfill their responsibilities:

 | Component | Responsibilities |
 |---|---|
 | `<FloorPlan>` | Rendered by `<App>`<br>Renders the following components:<br>- A `<Kitchen>` component<br>- A `<LivingRoom>` component<br>- Three `<Bedroom>` components<br>- Two `<Bath>` components<br>**Render the components in any order you wish to make the floor plan more interesting** |
 | `<Kitchen>` | Renders the text "Kitchen" and the following components:<br>- A `<Oven>` component<br>- A `<Sink>` component |
 | `<LivingRoom>` | Renders the text "Living Room" |
 | `<Bedroom>` | Accepts a `bedNum` prop and renders the text "Bedroom [bedNum]" (substituting the value of the `bedNum` prop) |
 | `<Bath>` | Accepts a `size` prop and renders the text "[size] Bath", i.e., "Half Bath", "Full Bath" |
 | `<Oven>` | Renders the text "Oven" |
 | `<Sink>` | Renders the text "Sink" |