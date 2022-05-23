import CardBody from './index'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
  container = document.createElement("h2");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders advice body text from props with decorative quotation marks', () => {
  act(() => {
    render(<CardBody advice={{"advice": "When in doubt, Google a photo of a cat."}}/>, container);
  });
  expect(container.textContent).toBe("“When in doubt, Google a photo of a cat.”")
});

test('renders advice body text from props with decorative quotation marks', () => {
  act(() => {
    render(<CardBody advice={{"advice": "Don't make assumptions."}}/>, container);
  });
  expect(container.textContent).toBe("“Don't make assumptions.”")
});

test('renders advice body text from props when it is undefined', () => {
  act(() => {
    render(<CardBody advice={{"advice": undefined}}/>, container);
  });
  expect(container.textContent).toBe("Please try refreshing the page.")
});