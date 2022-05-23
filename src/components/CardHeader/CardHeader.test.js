import CardHeader from './index'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("h1");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders advice text from props', () => {
  act(() => {
    render(<CardHeader advice={{"advice": "Advice #1", "id": 1}}/>, container);
  });
  expect(container.textContent).toBe("Advice #1");
});

test('renders advice text from props', () => {
  act(() => {
    render(<CardHeader advice={{"advice": "Advice #20", "id": 20}}/>, container);
  });
  expect(container.textContent).toBe("Advice #20");
});

test('renders advice text if undefined', () => {
  act(() => {
    render(<CardHeader advice={{}}/>, container);
  });
  expect(container.textContent).toBe("Unable to load");
});