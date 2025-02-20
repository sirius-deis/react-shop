import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from './list';

describe('List component', () => {
  const list = [{_id: 1, name: "1"}, {_id: 2, name: "2"}, {_id: 3, name: "3"}];
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <List list={list} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render component with children', () => {
    render(
      <MemoryRouter>
        <List list={list} />
      </MemoryRouter>,
    );
    const content = screen.queryAllByRole('listitem');
    expect(content.length).toBe(3);
    expect(content[0].textContent).toBe('1');
    expect(content[1].textContent).toBe('2');
    expect(content[2].textContent).toBe('3');
  });
});
