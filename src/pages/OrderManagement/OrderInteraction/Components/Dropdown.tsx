import React, { useState } from 'react';

interface DropdownChooseProps {
    field: string[];
}

const DropdownChoose: React.FC<DropdownChooseProps> = ({ field }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <select onChange={handleSelectChange}>
                {field.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <input type="text" value={selectedValue} readOnly />
        </div>
    );
}

export default DropdownChoose;
