/**
 *
 * Asynchronously loads the component for ExerciseCreatePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
