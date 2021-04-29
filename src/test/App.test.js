import renderer from 'react-test-renderer';
import App from '../App';


test('Page Render Correctly', () => {
  const tree = renderer
  .create(<App/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});