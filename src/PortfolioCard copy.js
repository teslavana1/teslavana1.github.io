import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import "./PortfolioCard.css";

export default function PortfolioCard({
    src,
    wide,
    company,
    title,
    body,
    bullets,
    productUrl
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
        <Grid
            container
            item
            direction="column"
            height="400px"
            minWidth={{
                xs: "85%",
                sm: "56%",
                md: wide ? "35%" : "35%",
                lg: wide ? "28%" : "28%",
            }}
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
                "&:hover .overlay": { opacity: { md: 1 } },
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
                    backgroundImage:
                        "linear-gradient(0deg, rgba(30, 136, 229,.75), rgba(30, 136, 229,.15))",
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
                    <Button href={productUrl} color="primary" variant="contained">
                        Product
                    </Button>
                    <Button
                        onClick={handleClick}
                        variant="text"
                        color="inherit"
                        sx={{ display: { xs: "inline-block", md: "none", color: "white" } }}
                    >
                        {open ? "Less Info" : "More Info"}
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    );
}

// const Card = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     boxSizing: 'content-box',
//     position: 'relative',
//     color: 'white',
//     minHeight: '400px',
//     width: '300px',
//     minWidth: '300px',
//     alignItems: 'center',
//     border: 'none',
//     borderRadius: '12px',
//     textAlign: 'left',
//     backgroundImage: 'linear-gradient(0deg, rgba(100,100,255,.6), rgba(100,100,255,.2))',
// })

// const Overlay = styled('div')({
//     boxSizing: 'border-box',
//     position: 'absolute',
//     borderRadius: '12px',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,.8)',
//     opacity: 0,
//     transition: 'all .2s ease-in-out',
//     zIndex: 1,
// })
