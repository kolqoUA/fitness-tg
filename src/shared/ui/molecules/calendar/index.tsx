import './styles.css';
import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';
import { uk } from 'date-fns/locale';
import { format } from 'date-fns';

interface Props {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const Calendar = (props: Props) => {
  return (
    <div className="calendar-card">
      <DayPicker
        mode="single"
        selected={props.selected}
        onSelect={props.onSelect}
        locale={uk}
        showOutsideDays // Показувати дні минулого/наступного місяця (сірі цифри)
        formatters={{
          // Робимо формат заголовка як на фото
          formatCaption: (date) => format(date, 'LLLL yyyy', { locale: uk })
        }}
      />
    </div>
  );
};

export default Calendar;