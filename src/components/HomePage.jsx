import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Assuming you have a Card component
import { Box, Stack, Typography } from '@mui/material';

const HomePage = ({ cards }) => {
  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row" }, height: '100vh'}}>
      <Box sx={{
        height: { sx: 'column', md: '92vh' },
        px: { sx: 0, md: 2 },
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }}>
        <div className="grid-container">
          {cards.map((card) => (
            <Link
              to={`/component/${card.id}`}
              key={card.id}
              className="card-link"
            >
              <Card title={card.title} />
            </Link>
          ))}
        </div>
      </Box>
    </Stack>
  );
};

export default HomePage;
