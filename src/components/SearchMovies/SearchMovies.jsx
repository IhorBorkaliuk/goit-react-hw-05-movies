// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { FaSearch } from 'react-icons/fa';
// import {
//   SearchForm,
//   SearchFormInput,
//   ButtonSearchMovie,
// } from './FormSearchMovie';

export const searchMovies = ({ onSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchQuery = e => {
//     setSearchQuery(e.currentTarget.value.toLowerCase().trim());
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (searchQuery.trim() === '') {
//       toast.error('Please enter a word to search for movies!');
//       return;
//     }

//     onSubmit(searchQuery);
//     resetForm();
//   };

//   const resetForm = () => {
//     setSearchQuery('');
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchFormInput
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movie"
//           onChange={handleSearchQuery}
//           name="searchQuery"
//           value={searchQuery}
//         />
//         <ButtonSearchMovie type="submit">
//           <FaSearch fontSize={16} />
//         </ButtonSearchMovie>
//       </SearchForm>
//     </>
//   );
};

// FormSearchMovies.propTypes = {
//   onSubmit: PropTypes.func,
// };
