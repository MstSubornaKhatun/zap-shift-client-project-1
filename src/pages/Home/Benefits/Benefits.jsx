import React from 'react';
import benefitImg1 from '../../../assets/benefits/tracking.png';
import benefitImg2 from '../../../assets/benefits/safe.png';
import benefitImg3 from '../../../assets/benefits/support.png';

const benefits = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image: benefitImg1
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: benefitImg2
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: benefitImg3
    }
];

const Benefits = () => {
    return (
        <div className="my-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

            <div className="space-y-6">
                {benefits.map(benefit => (
                    <div key={benefit.id} className="card card-side bg-base-100 shadow-md p-4 items-center">
                        
                        {/* Left Side - Image */}
                        <figure className="w-24 h-24 flex items-center justify-center">
                            <img src={benefit.image} alt={benefit.title} className="h-16 w-16 object-contain" />
                        </figure>

                        {/* Vertical Line */}
                        <div className="h-16 w-px bg-gray-300 mx-4"></div>

                        {/* Right Side - Title and Description */}
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
