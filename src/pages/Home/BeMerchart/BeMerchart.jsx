import React from 'react';
import location from '../../../assets/location-merchant.png'

const BeMerchart = () => {
    return (
       <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] mb-10 rounded-4xl p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={location}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary text-black">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchart;