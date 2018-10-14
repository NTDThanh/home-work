/**
 *
 * Asynchronously loads the component for ExerciseDetailPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
