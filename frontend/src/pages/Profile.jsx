import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

import { Button, SubTitle, SkinnyInput } from '@components/ui';
import api from '@api/api';
import { logout } from '@api/auth';

const Profile = () => {
  const { savedRecipes } = useOutletContext();
  const { profile, setProfile } = useOutletContext();
  const [newProfile, setNewProfile] = useState({});
  const [editState, setEditState] = useState(false);
  const [passwords, setPasswords] = useState({1: undefined, 2: undefined});
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    setNewProfile(profile);
  }, [])
    

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
    }, 2000);
  };

  const profileEditSave = () => {
    if (editState) {
      if (passwords[1] !== passwords[2]) {
        console.log(passwords)
        console.log("password doesn't match")
        clearPassword()
        triggerShake();
      } else {
        api.patch('/api/accounts/details', {...newProfile, 'password': passwords[1]})
          .then((res) => {
            console.log(res.data)
            clearPassword()
            setProfile(newProfile);
            setEditState(false);
          })
          .catch((err) => {
            triggerShake();
            console.error(err);
          })
      }
    } else {
      setEditState(true);
    }
  }

  const clearPassword = () => {
    setPasswords({1: undefined, 2: undefined});
  }

  const cancelEdit = () => {
    setEditState(false);
    setNewProfile(profile);
    clearPassword();
  }

  return (
    <>
      <SubTitle>Hello, {profile['username']}</SubTitle>
      <Container>
        <DetailGroup>
          <div>
            Username: {editState ?
              <SkinnyInput 
                value={newProfile['username']}
                onChange={(e) => setNewProfile(prev => ({
                  ...prev,
                  username: e.target.value
                }))}/> :
              profile['username'] }
          </div>
          <div>
            Email: {editState ?
             <SkinnyInput 
                value={newProfile['email']}
                onChange={(e) => setNewProfile(prev => ({
                  ...prev,
                  email: e.target.value
                }))}/> :
              profile['email'] }
          </div>
          <div>
            Password: {editState ? 
              <>
                <SkinnyInput 
                  placeholder='new password'
                  type='password'
                  value={passwords[1] || ''}
                  $shaking={shaking}
                  onChange={(e) => setPasswords(prev => ({
                    ...prev,
                    1: e.target.value
                  }))}/>
                <SkinnyInput
                  placeholder='reconfirm new password'
                  type='password'
                  value={passwords[2] || ''}
                  $shaking={shaking}
                  onChange={(e) => setPasswords(prev => ({
                    ...prev,
                    2: e.target.value
                  }))} />
              </> :
              '***'} 
          </div>
          <Button onClick={profileEditSave}>{editState ? 'Save' : 'Edit'}</Button>
          {editState ? <Button onClick={cancelEdit}>Cancel</Button> : <></>}
        </DetailGroup>
        <DetailGroup>
          <div>Saved Recipes: {savedRecipes ? savedRecipes.length : 0}</div>
          <div>Date Joined: {profile['date_joined']}</div>
        </DetailGroup>
      </Container>
      <Button onClick={logout}>Logout</Button>
    </>
  )
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 20px;
  margin-bottom: 50px;
`;

const DetailGroup = styled.div`
  border: 1px solid black;
  padding: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export default Profile;