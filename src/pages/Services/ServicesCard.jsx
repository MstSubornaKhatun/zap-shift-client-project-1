import React from 'react';

const ServicesCard = ({service}) => {
    const { icon: Icon, title, description } = service
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 p-4 text-center">
            <div className="flex justify-center text-4xl text-primary mb-4">
                <Icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServicesCard;
