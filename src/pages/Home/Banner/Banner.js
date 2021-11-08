import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <Container sx={{ my: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Your New Smile <br /> Starts Here</Typography>
                        <Typography variant="h6" sx={{ marginTop: 2 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora impedit debitis in deleniti culpa repellat molestiae velit suscipit, cumque veniam. Modi, obcaecati? Officiis obcaecati ea quidem tenetur distinctio repudiandae!</Typography>
                        <Button sx={{ marginTop: 2 }} variant="contained">Get Appoietnment</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default Banner;