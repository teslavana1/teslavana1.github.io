import { Grid, Typography } from "@mui/material";
import React from "react";

export default function AppAboutText({ heading, text, color }) {
    return (
        <Grid item container direction='column' xs={12} md={6} py={2} justifyContent='center' position={{ md: 'absolute' }} height={{ md: 'calc(100vh - 56px)' }} mx={{xs: 2, md: 6}} zIndex={10}>
            <Typography variant="h4" color={color} marginBottom={3}>
                <b>{heading}</b>
            </Typography>
            {text.map(p => (
                <Typography key={p} variant="body1" color='text.primary' mb={2}>
                    {p}
                </Typography>
            ))}
            {/* <Typography variant="body1" color='text.primary' whiteSpace='break-spaces' mb={2}>
                "The user-to-user messaging feature was built from scratch. Each user model has an attribute that contains his/her messages.
            </Typography>

            <Typography variant="body1" color='text.primary' whiteSpace='break-spaces' mb={2}>
                When a user messages the author of a listing, that message has body, to, and from attibutes. It is added to the messages attribute of both the sender and the receiver.
            </Typography>

            <Typography variant="body1" color='text.primary' whiteSpace='break-spaces' mb={2}>
                When a user goes into his/her inbox, a list of all unique contacts is created from that user's messages' to/from attribute. Conversations are built from the messages who's to/from attribute is equal to a unique contact, and the conversation list is made up of the most recent correspondence with each unique conact.
            </Typography>

            <Typography variant="body1" color='text.primary' whiteSpace='break-spaces' mb={2}>
                When a conversation is selected from the conversation list, the conversation is presented in a familiar fashion, though the automatic scrolling is a work in progress."
            </Typography> */}
        </Grid>
    )
}