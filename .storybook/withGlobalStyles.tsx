import { StoryFn } from '@storybook/addons'
import 'bootstrap/dist/css/bootstrap.min.css';

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    {storyFn()}
  </>
)

export default withGlobalStyles
