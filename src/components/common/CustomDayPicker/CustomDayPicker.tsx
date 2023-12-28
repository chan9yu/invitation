import type {
	DayPickerDefaultProps,
	DayPickerMultipleProps,
	DayPickerRangeProps,
	DayPickerSingleProps
} from 'react-day-picker';
import { DayPicker } from 'react-day-picker';

import './CustomDayPicker.css';

type CustomDayPickerProps = DayPickerDefaultProps | DayPickerSingleProps | DayPickerMultipleProps | DayPickerRangeProps;

export default function CustomDayPicker(props: CustomDayPickerProps) {
	return <DayPicker {...props} />;
}
