import React, { useState } from 'react';

const CompClient = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!nom || nom.length < 2 || nom.length > 40 || /\d/.test(nom)) {
            newErrors.nom = 'Nom invalide';
        }
        if (!prenom || prenom.length < 2 || prenom.length > 30 || /\d/.test(prenom)) {
            newErrors.prenom = 'Prénom invalide';
        }
        if (!dateNaissance || new Date(dateNaissance) <= new Date('1950-01-01')) {
            newErrors.dateNaissance = 'Date de naissance invalide';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(`Nom: ${nom}, Prénom: ${prenom}, Date de Naissance: ${dateNaissance}`);
        }   
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md" style={{ backgroundImage: 'url(form.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{fontWeight: 'bold', color: 'white' }}>Inscription Client</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700" style={{fontWeight: 'bold', color: 'white' }}>Nom:</label>
                    <input
                        type="text"
                        value={nom}
                        placeholder='Ecrivez votre nom (min 2 caractères)'
                        onChange={(e) => setNom(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        style={{ opacity: 0.9, fontWeight: 'bold' }}
                    />
                    {errors.nom && <span className="text-red-500 text-md text-bold">{errors.nom}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" style={{fontWeight: 'bold', color: 'white' }}>Prénom:</label>
                    <input
                        type="text"
                        value={prenom}
                        placeholder='Ecrivez votre prénom (min 2 caractères)'
                        onChange={(e) => setPrenom(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        style={{ opacity: 0.9, fontWeight: 'bold'  }}
                    />
                    {errors.prenom && <span className="text-red-500 text-md text-bold">{errors.prenom}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" style={{fontWeight: 'bold', color: 'white' }}>Date de Naissance:</label>
                    <input
                        type="date"
                        value={dateNaissance}
                        onChange={(e) => setDateNaissance(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        style={{ opacity: 0.9 }}
                    />
                    {errors.dateNaissance && <span className="text-red-500 text-md text-bold">{errors.dateNaissance}</span>}
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                        Valider
                    </button>
                    <button
                        type="button"
                        onClick={() => alert(`Nom: ${nom}, Prénom: ${prenom}, Date de Naissance: ${dateNaissance}`)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none">
                        Visualiser
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompClient;