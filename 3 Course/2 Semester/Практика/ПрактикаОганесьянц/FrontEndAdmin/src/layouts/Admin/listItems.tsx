import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin/models/dentalDisease')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="dentalDisease" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/dentalProcedure')}>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="dentalProcedure" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/medicalRecord')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="medicalRecord" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>
    </div>
  );
};
