import { Grid, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import Card from "./Card"
import products from "../seeds/MechanicalSeeds";
import { useAnimation, motion } from "framer-motion";


export default function Projects({theme}) {

    const containerRef = useRef()
    const controls = useAnimation()

    const [animated, setAnimated] = useState(false)

    const animationVariants = {
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0 },
    };

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            controls.start('visible');
            setAnimated(true)
        } else {
            setAnimated(false)
            controls.start('hidden');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust the threshold value as needed
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    
    return (
        <Grid
            item
            container
            direction="column"
            px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            rowGap={4}
            alignItems='center'
            ref={containerRef}
        >
            <Typography variant='h2'>
                Projects
            </Typography>
            <Grid item container direction="row" wrap="nowrap" columnGap={2} overflow='scroll' maxWidth='100vw' pb={2}>
                {products.map((p, index) => (
                    <Grid container item 
                    minWidth={{
                        xs: "85%",
                        sm: "56%",
                        md: "35%",
                        lg: "28%",
                    }}>
                    <motion.div initial='hidden' exit='visible' animate={controls} variants={animationVariants} transition={{ duration: animated ? .3 : .6, delay: animated ? 0 : .4 * index, type: 'tween' }} style={{minWidth: '100%'}}  >
                    <Card
                        key={p.title}
                        theme={theme}
                        number={index}
                        {...p}
                    />
                    </motion.div>
                    </Grid>
                )
                )}
            </Grid>
        </Grid>

    )
}