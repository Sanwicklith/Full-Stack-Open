import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [person, setPerson] = useState({
    name: '',
    number: '',
  });
  const [filter, setFilter] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPersonName = person.name.trim().toLowerCase();

    // Extract names from the persons array and convert to lowercase, with a null check
    const personNames = persons.map(p => (p.name ? p.name.toLowerCase() : ''));

    // Check if newPerson is already in the personNames array
    if (personNames.includes(newPersonName)) {
      alert(`${person.name} is already added to phonebook`);
      setPerson({ name: '', number: '' });
    } else {
      setPersons(persons.concat({ name: person.name.trim(), number: person.number.trim() }));
      setPerson({ name: '', number: '' });
    }
  };

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleFilter = e => {
    const filterStr = e.target.value;
    setFilter(filterStr);
    const filteredPersons = persons.filter(person => {
      return person.name.toLowerCase().includes(filterStr.toLowerCase());
    });
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="filter">
        filter shown with:{' '}
        <input
          name="filter"
          type="text"
          placeholder="Filter names"
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input name="name" onChange={handleChange} type="text" value={person.name} />
        </div>
        <div>
          number: <input name="number" onChange={handleChange} type="text" value={person.number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((p, i) => (
          <p key={i}>
            {p.name} {p.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
