
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Chip,
} from '@mui/material';

const missions = [
  {
    id: 1,
    name: 'Harvest Corn',
    description: 'Harvest 100 units of corn from your farm.',
    objectives: ['Harvest 100 units of corn'],
    rewards: ['50 Coins', '10 XP'],
    status: 'available',
  },
  {
    id: 2,
    name: 'Mine Gold',
    description: 'Extract 50 units of gold ore from the mines.',
    objectives: ['Mine 50 units of gold ore'],
    rewards: ['200 Coins', '30 XP'],
    status: 'in progress',
  },
  {
    id: 3,
    name: 'Catch Fish',
    description: 'Catch 75 fish from the lake.',
    objectives: ['Catch 75 fish'],
    rewards: ['100 Coins', '20 XP'],
    status: 'completed',
  },
  // Add more missions as needed
];

export default function Missions() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Missions
      </Typography>
      <Grid container spacing={4}>
        {missions.map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {mission.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {mission.description}
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Objectives:
                  </Typography>
                  <ul>
                    {mission.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </Box>
                <Box mt={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Rewards:
                  </Typography>
                  <ul>
                    {mission.rewards.map((reward, index) => (
                      <li key={index}>{reward}</li>
                    ))}
                  </ul>
                </Box>
              </CardContent>
              <CardActions>
                {mission.status === 'available' && (
                  <Button variant="contained" color="primary">
                    Start Mission
                  </Button>
                )}
                {mission.status === 'in progress' && (
                  <Button variant="outlined" color="secondary">
                    Complete Mission
                  </Button>
                )}
                <Chip
                  label={mission.status.replace(/_/g, ' ')}
                  color={mission.status === 'completed' ? 'success' : 'default'}
                  size="small"
                  sx={{ ml: 'auto' }}
                    />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};