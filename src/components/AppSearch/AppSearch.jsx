import { useState } from 'react';
import { Notify } from 'notiflix';

import {
  WrapApp,
  Input,
  Form,
  Button,
  IconSearch,
} from 'components/AppSearch/AppSearchStyled';

export default function SearchBox({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notify.failure('Please, enter the name of film');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <WrapApp>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <IconSearch />
        </Button>
        <Input
          onChange={handleChange}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie"
          value={searchQuery}
        />
      </Form>
    </WrapApp>
  );
}
