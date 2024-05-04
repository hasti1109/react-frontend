import React, {useEffect,useState} from 'react';
import './styles/App.css'
import Card from './components/Card';
import Modal from './components/Modal';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="App">
        {data.map((item, index) => (
          <Card key={index} data={item} handleOpenModal={() => handleOpenModal(item)}/>
        ))}
      </div>
      {showModal && (
        <Modal data={selectedData} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
