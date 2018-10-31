/**
 *
 * Asynchronously loads the component for QuestionListPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
