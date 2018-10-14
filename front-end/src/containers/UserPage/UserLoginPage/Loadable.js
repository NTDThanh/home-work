/**
 *
 * Asynchronously loads the component for UserLoginPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
