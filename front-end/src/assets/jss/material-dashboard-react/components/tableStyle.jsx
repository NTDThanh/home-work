import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
} from 'assets/jss/material-dashboard-react.jsx';
import tasksStyle from 'assets/jss/material-dashboard-react/components/tasksStyle.jsx';

const tableStyle = theme => ({
  ...tasksStyle,
  warningTableHeader: {
    color: warningColor,
  },
  primaryTableHeader: {
    color: primaryColor,
  },
  dangerTableHeader: {
    color: dangerColor,
  },
  successTableHeader: {
    color: successColor,
  },
  infoTableHeader: {
    color: infoColor,
  },
  roseTableHeader: {
    color: roseColor,
  },
  grayTableHeader: {
    color: grayColor,
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em',
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle',
    borderBottom: 'none',
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  buttonAdd: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'white',
  },
});

export default tableStyle;
