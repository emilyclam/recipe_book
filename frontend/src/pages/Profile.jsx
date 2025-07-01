import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Button, SubTitle } from '@components/ui';

const Profile = () => {
  const { savedRecipes } = useOutletContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
      <SubTitle>Hello, Chef</SubTitle>
      <p>Username: </p>
      <p>Password: ***</p>
      <p>Saved Recipes: {savedRecipes.length || 0}</p>
      <Button onClick={logout}>Logout</Button>
    </>
  )
};

export default Profile;