/**
 *
 * Asynchronously loads the component for ExerciseCreateEditPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
