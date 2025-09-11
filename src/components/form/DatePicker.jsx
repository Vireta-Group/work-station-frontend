

import { useEffect, useRef, useState } from "react"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"
import { SlCalender } from "react-icons/sl"

export default function DatePicker({ id, mode = "single", onChange, defaultDate, label, placeholder }) {
    const inputRef = useRef(null)
    const [selectedDate, setSelectedDate] = useState(defaultDate || "")

    useEffect(() => {
        const flatPickrInstance = flatpickr(inputRef.current, {
            mode,
            static: true,
            monthSelectorType: "static",
            dateFormat: "Y-m-d",
            defaultDate,
            onChange: (selectedDates) => {
                setSelectedDate(selectedDates[0])
                if (onChange) {
                    onChange(selectedDates)
                }
            },
        })

        return () => {
            flatPickrInstance.destroy()
        }
    }, [id, mode, onChange, defaultDate])

    return (
        <div>
            {label && (
                <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    id={id}
                    ref={inputRef}
                    value={selectedDate}
                    placeholder={placeholder}
                    className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-sm 
                    placeholder:text-gray-400 focus:outline-none focus:ring-2 
                    dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  
                    border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 
                    dark:border-gray-700 dark:focus:border-brand-800"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                    <SlCalender className="size-5" />
                </span>
            </div>
        </div>
    )
}
