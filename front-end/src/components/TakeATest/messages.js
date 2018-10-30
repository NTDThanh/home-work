/*
 * TakeATest Messages
 *
 * This contains all the text for the TakeATest component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.TakeATest.header',
    defaultMessage: 'This is the TakeATest component !',
  },
  skillAssessment: {
    id: 'app.components.TakeATest.skillAssessment',
    defaultMessage: 'Skill assessment:',
  },
  nextQuestion: {
    id: 'app.components.TakeATest.nextQuestion',
    defaultMessage: 'Next Question',
  },
  finish: {
    id: 'app.components.TakeATest.finish',
    defaultMessage: 'Finish',
  },
  approximatelyQuestion: {
    id: 'app.components.TakeATest.approximatelyQuestion',
    defaultMessage: 'Approximately {countQuestion} questions remaining',
  },
});
