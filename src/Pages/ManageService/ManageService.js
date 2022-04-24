import React from 'react';
import useServices from '../../useServices/useServices';

const ManageService = () => {

    const [services, setServices] = useServices([]);

    const handelDelete = (id) => {
        const proceed = window.confirm('Are tou Sure this item delete?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const reaming = services.filter(service => service._id !== id);
                        setServices(reaming);
                    }
                });
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='mb-4 text-center'>Manage Service {services.length}</h1>

            {
                services.map(service =>
                    <div className='d-flex align-items-center justify-content-between w-100 p-4 mb-4 shadow rounded-3'>
                        <div className='w-25'><img className='img-fluid' src={service.img} alt="" /></div>
                        <div key={service._id} className='w-50 d-flex justify-content-between '>{service.name}
                            <div onClick={() => handelDelete(service._id)} style={{ height: '10px', width: '10px', cursor: 'pointer' }} className=' d-flex align-items-center justify-content-center p-3 rounded-circle shadow'>X</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageService;