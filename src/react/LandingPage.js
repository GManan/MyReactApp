import { Box } from '@mui/material';
import React from 'react';

const LandingPage = ({ loggedIn }) => {
    return (
        !loggedIn &&
        <div id='LandingPage'>
            <Box position="relative">
                {/* Background Image */}
                <img
                    src="https://www.bht-berlin.de/fileadmin/_processed_/c/8/csm_BHT-Webseite_Klimabeirat_2a3cdabb85.png"  // Replace with your actual image URL
                    alt="Background"
                // style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                />
            </Box >
        </div>
    );
};

export default LandingPage;
