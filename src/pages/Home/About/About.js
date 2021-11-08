import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={4}>
                    <Box>
                        <Typography variant="h2"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></Typography>
                    </Box>
                    <Box sx={{ marginX: 3 }}>
                        <Typography variant="h5">Opening Hour</Typography>
                        <Typography variant="h6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, veritatis.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default About;