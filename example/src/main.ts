import { mount } from "ripple";
import { App } from "./App.ripple";
import "./main.css";

mount(App, {
  target: document.getElementById("app")!
});
