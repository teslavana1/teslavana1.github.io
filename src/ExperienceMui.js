import { Grid, Typography } from '@mui/material'
import { blue, grey } from 'material-ui-colors'
import React from 'react'

export default function Experience() {

    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600', mb:3 }} color={blue[600]}>Experience</Typography>
            <Grid container item mb='1.5rem'>
                <Grid container item direction='column' mb={0}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: '600' }}>Inseego Corp.</Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '1rem', fontWeight: '400' }}>Senior Mechanical Engineer</Typography>
                    <Typography color={grey[900]} sx={{ fontSize: '1rem', fontWeight: '200' }}>Aug 2020 - Oct 2022</Typography>
                </Grid>
                <Grid container item pl={2}>
                    <ul style={{ paddingInlineStart: 0, marginBottom: 0 }}>
                        <li>Designed 5G wireless device plastic housings and electromechanical assemblies.</li>
                        <li>Performed environmental and mechanical QA testing to validate production candidates.</li>
                        <li>Optimized rework process for regulatory testing to increase output by 50%.</li>
                        <li>Led cross-functional collaboration to simplify designs while maintaining performance.</li>
                        <li style={{mb: 0}}>Managed OEM-designed product development.</li>
                    </ul>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container item direction='column' mb={0}>

                    <Typography sx={{ fontSize: '1.4rem', fontWeight: '600' }}>HM Electronics</Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '1rem', fontWeight: '400' }}>Senior Mechanical Engineer</Typography>
                    <Typography color={grey[900]} sx={{ fontSize: '1rem', fontWeight: '200' }}>Mar 2014 - Aug 2020</Typography>
                    </Grid>
                    <Grid container item pl={2}>
                        <ul style={{ paddingInlineStart: 0, marginBottom: 0 }}>
                            <li>Served as Lead Mechanical Engineer on several design and sustaining projects simultaneously.
                            </li>
                            <li>Conducted cost reduction efforts to reduce BOM by 20% and streamline manufacturing.
                            </li>
                            <li>Led sustaining efforts with root cause analysis and 50+ design improvements to legacy
                                products.
                            </li>
                            <li>Managed and trained interns with an 80% success rate retaining them as full-time engineers.
                            </li>
                            <li style={{marginBottom: '16px'}}>Developed product ID and QA test equipment.
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </>
            )
}