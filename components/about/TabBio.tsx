import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function TabBio() {
  return (
    <>
      <Box pl={3} mb={3}>
        <Typography color='text.primary' variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
          About me
        </Typography>

        <Typography color='text.primary' variant='body1' mb={1}>
            I am Juan David Sanmartín, a bilingual web developer from Colombia.
        </Typography>

        <Typography color='text.primary' variant='body1' mb={1}>
            I have three years and six months of experience with programming languages such as <b>Javascript</b>, <b>C#</b> and <b>Python</b>. Working on Front End and Back End environments.

        </Typography>

        <Typography color='text.primary' variant='body1' mb={1}>
            I am a team player and a creative person who likes to find alternative solutions to add more value to the users. 
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography color='text.primary' variant='h5' sx={{textAlign: 'center'}}>
            Hard Skills
          </Typography>
          <List
            sx = {{
              listStyleType: 'disc',
              '& .MuiListItem-root': {
                display: 'list-item',
                color: 'text.primary'
              },
              pl: 5
             }}
          >
            {
              [
                'Logic',
                'Quick Adaptation',
                'Analytic Thinking',
                'Problem Solving',
                'Quick Learning',
                'Lateral Thinking',
              ].map((x,i) =>
                <ListItem key={`hard-skill-${i}`}>
                  <Typography color='text.primary' variant='h6'>{x}</Typography>
                </ListItem>
              )
            }
          </List>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color='text.primary' variant='h5' sx={{textAlign: 'center'}}>
            Soft Skills
          </Typography>
          <List
            sx = {{
              listStyleType: 'disc',
              '& .MuiListItem-root': {
                display: 'list-item',
                color: 'text.primary'
              },
              pl: 5,
             }}
          >
            {
              [
                'Responsibility',
                'Compromise',
                'Flexibility',
                'Team Player',
                'Diplomacy',
              ].map((x,i) =>
                <ListItem key={`hard-skill-${i}`}>
                  <Typography color='text.primary' variant='h6'>{x}</Typography>
                </ListItem>
              )
            }
          </List>
        </Grid>
      </Grid>
    </>
  )
}
