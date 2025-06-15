import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { blue, grey } from "material-ui-colors";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CardButton = styled(Button)(({ theme }) => ({
    backgroundColor: grey[100],
    color: grey[900],
    '&:hover': {
      backgroundColor: blue[600],
      color: grey[100]
    },
  }));

export default function Card({
    src,
    wide,
    company,
    logo,
    title,
    body,
    bullets,
    productUrl,
    theme,
    number
}) {

    const [open, setOpen] = useState(false);

    // const handleEnter = () => {
    //     setOpen(true);
    // };

    // const handleLeave = () => {
    //     setOpen(false);
    // };

    const handleClick = () => {
        setOpen(!open);
    };

    // const handleProductClick = (evt) => {
    //     evt.stopPropagation()
    //     evt.preventDefault()

    // }

    return (
        // <motion.div initial={{opacity: 0, y: '100vh'}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: number * .5}} style={{minWidth: '28%'}} >
        <Grid
            container
            item
            direction="column"
            height="400px"
            // minWidth={{
            //     xs: "85%",
            //     sm: "56%",
            //     md: wide ? "35%" : "35%",
            //     lg: wide ? "28%" : "28%",
            // }}
            minWidth='100%'
            borderRadius={2}
            position="relative"
            //   onMouseEnter={handleEnter}
            //   onMouseLeave={handleLeave}
            //   onClick={handleClick}
            overflow="hidden"
            bgcolor="white"
            justifyContent="flex-end"
            sx={{
                transition: 'all .3s ease-in-out',
                "&:hover .bullets": { opacity: { md: 1 }, maxHeight: { md: "300px" }, mb: {md: '10px'} },
                "&:hover .overlay": { opacity: { md: 1 } }
            }}
        >
            <Grid
                item
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                sx={{
                    // transition: '.3s ease-in-out', 
                    backgroundImage: theme === 'dark' ? "linear-gradient(0deg, rgba(0, 0, 0,.9), rgba(0, 0, 0, .55))" :
                        "linear-gradient(0deg, rgba(0, 0, 0,.75), rgba(0, 0, 0,.15))", 
                }}
            />
            <Grid
                item
                position="absolute"
                className="overlay"
                top={0}
                bottom={0}
                left={0}
                right={0}
                zIndex={2}
                bgcolor="rgba(0, 0, 0, .85)"
                sx={{ opacity: open ? 1 : 0, transition: "all .3s ease-in-out" }}
            />

            <Grid
                container
                item
                direction="column"
                position="absolute"
                height="300px"
                width="100%"
                top={0}
                rowGap="40px"
                justifyContent="center"
                alignItems="center"
            >
                {src.map((s) => (
                    <img
                        key={s}
                        src={s}
                        alt=""
                        style={{
                            objectFit: "contain",
                            width: "80%",
                            maxHeight: "80%",
                            zIndex: 1,
                        }}
                    />
                ))}
            </Grid>
            <Stack width="100%" p={3} alignSelf="flex-end" rowGap={1}>
                <Stack color="white" zIndex={2}>
                    <Typography fontSize="16px" color="rgba(255, 255, 255, .9)">
                        {company}
                    </Typography>
                    {/* <Grid container item>
                        <img src={logo} height='32px' style={{filter: 'grayscale(1)'}}/>
                    </Grid> */}
                    <Typography fontSize="24px">{title}</Typography>
                    {bullets ? (
                        <Grid
                            maxHeight={open ? "300px" : 0}
                            className="bullets"
                            marginBottom={open ? "10px" : 0}
                            sx={{
                                opacity: open ? 1 : 0,
                                transition: "all .3s ease-in-out",
                            }}>
                            <ul
                                style={{
                                    margin: 0,
                                    paddingInlineStart: "15px",
                                }}
                            >
                                {bullets.map((b) => (
                                    <li key={b}>
                                        <Typography fontSize="14px">{b}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ) : (
                        body ||
                        "Hello there! This is the body of the card that I want to create. It should work, but who the fuck really knows, am I right? Jeez this is getting long. Maybe I should just quit now and go to bed or something."
                    )}
                </Stack>
                <Grid
                    container
                    item
                    direction="row"
                    columnGap={1}
                    marginTop="auto"
                    justifyContent="space-between"
                    zIndex={2}
                    wrap="nowrap"
                >
                    <CardButton href={productUrl} sx={{ backgroundColor: grey[600], textTransform: 'initial'}}>
                        View
                    </CardButton>
                    <Button
                        onClick={handleClick}
                        variant="text"
                        sx={{ color: 'white', display: { xs: "inline-block", md: "none" } }}
                    >
                        {open ? "Less Info" : "More Info"}
                    </Button>
                </Grid>
            </Stack>
        </Grid>
        // </motion.div>
    );
}