/**
 *
 * Asynchronously loads the component for TakeATest
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
