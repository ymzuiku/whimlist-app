import { View as RNView } from 'react-native';
import withStyles from '@blankapp/ui/src/withStyles';

import FormField from './FormField';

const Form = withStyles('Form')(RNView);

Form.Field = FormField;

export default Form;
