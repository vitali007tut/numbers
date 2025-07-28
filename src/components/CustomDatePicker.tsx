import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleInputFocus = () => {
        if (error) {
            setError('');
        }
    };

    const handleClickButton = () => {
        if (!selectedDate) { 
                setError(`Please select a date`);
            return;
        }
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        setSelectedDate(null);
        navigate(`/${month}-${day}/date`);
    };

    return (
        <>
            <div className="input-container">
                <DatePicker
                    id="datePickerInput"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onFocus={handleInputFocus}
                    wrapperClassName="w-9/12 text"
                    dateFormat="MM / dd"
                    placeholderText="Choose date..."
                    className={`w-full bg-transparent placeholder:text-slate-400 text border border-slate-300 rounded-md px-4 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-slate-400 ${
                        error ? 'error-input' : ''
                    }`}
                    popperClassName="z-10"
                    calendarClassName="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mt-1 w-64"
                    dayClassName={() =>
                        'h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-100 cursor-pointer'
                    }
                    weekDayClassName={() => 'text-xs font-medium text-gray-500 py-1 text-center'}
                    todayButton="Today"
                    showMonthDropdown
                />

                <button onClick={handleClickButton} className="button">
                    DATE
                </button>
            </div>
            {error && <div className="error-message">{error}</div>}
        </>
    );
};

export default CustomDatePicker;
