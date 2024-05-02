import React, { useState } from 'react';

const DonateBookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        condition: '',
        contactInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending data to the server or performing any necessary actions
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            title: '',
            author: '',
            condition: '',
            contactInfo: ''
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="donate-book-form">
                        <h2>Donate a Book</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Author:</label>
                                <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Condition:</label>
                                <select className="form-select" name="condition" value={formData.condition} onChange={handleChange}>
                                    <option value="">Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="like new">Like New</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                    <option value="poor">Poor</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Contact Information:</label>
                                <input type="text" className="form-control" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Donate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateBookForm;
